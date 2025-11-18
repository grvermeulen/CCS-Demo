# GitHub Template Repository Setup Script
# This script automates the setup process for workshop participants

Write-Host "=== GitHub Template Repository Setup ===" -ForegroundColor Cyan
Write-Host ""

# 1. Check/Install GitHub CLI
if (!(Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI not found. Installing..." -ForegroundColor Yellow
    try {
        winget install --id GitHub.cli --silent --accept-package-agreements --accept-source-agreements
        Write-Host "GitHub CLI installed successfully!" -ForegroundColor Green
        Write-Host "Please restart your terminal and run this script again." -ForegroundColor Yellow
        exit
    } catch {
        Write-Host "Failed to install GitHub CLI. Please install manually from: https://github.com/cli/cli/releases" -ForegroundColor Red
        exit 1
    }
}

Write-Host "GitHub CLI found: $(gh --version | Select-Object -First 1)" -ForegroundColor Green
Write-Host ""

# 2. Authenticate (if not already)
Write-Host "Checking GitHub authentication..." -ForegroundColor Cyan
$null = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not authenticated. Please authenticate with GitHub..." -ForegroundColor Yellow
    gh auth login
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Authentication failed. Exiting." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Already authenticated!" -ForegroundColor Green
}
Write-Host ""

# 3. Get username
$username = gh api user --jq .login
if (!$username) {
    Write-Host "Failed to get GitHub username. Exiting." -ForegroundColor Red
    exit 1
}
Write-Host "Logged in as: $username" -ForegroundColor Green
Write-Host ""

# 4. Create repository from template
Write-Host "Creating repository from template..." -ForegroundColor Cyan
# Check if repository name was provided as parameter
if ($args.Count -gt 0 -and ![string]::IsNullOrWhiteSpace($args[0])) {
    $repoName = $args[0]
    Write-Host "Using provided repository name: $repoName" -ForegroundColor Cyan
} else {
    $repoName = Read-Host "Enter your repository name (default: CCS-Demo)"
    if ([string]::IsNullOrWhiteSpace($repoName)) { 
        $repoName = "CCS-Demo" 
    }
}

# Check if repository already exists
$repoExists = $false
$null = gh repo view "$username/$repoName" 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "Repository $username/$repoName already exists!" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to use the existing repository? (y/n)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "Exiting. Please choose a different repository name." -ForegroundColor Red
        exit 1
    }
    $repoExists = $true
} else {
    Write-Host "Creating repository: $repoName from template..." -ForegroundColor Cyan
    gh repo create $repoName --template grvermeulen/CCS-Demo --public --clone
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to create repository from template. Exiting." -ForegroundColor Red
        exit 1
    }
    Write-Host "Repository created successfully!" -ForegroundColor Green
}

# Fetch specific branch from template and create PR
# This logic runs for both new and existing repositories
Write-Host ""
Write-Host "Fetching branch from template repository..." -ForegroundColor Cyan

# For existing repos, clone if not already cloned locally
if ($repoExists -and !(Test-Path $repoName)) {
    Write-Host "Cloning existing repository..." -ForegroundColor Cyan
    gh repo clone "$username/$repoName"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to clone repository. Exiting." -ForegroundColor Red
        exit 1
    }
}

# Navigate to cloned repository
if (Test-Path $repoName) {
    Push-Location $repoName
    
    # Add template repository as remote (remove first if it exists)
    Write-Host "Adding template repository as remote..." -ForegroundColor Cyan
    git remote remove template 2>&1 | Out-Null
    git remote add template https://github.com/grvermeulen/CCS-Demo.git 2>&1 | Out-Null
    
    # Fetch the specific branch
    $branchName = "feat/footer-ccs-woerden-issue-19"
    Write-Host "Fetching branch: $branchName from template..." -ForegroundColor Cyan
    git fetch template $branchName
    
    if ($LASTEXITCODE -eq 0) {
        # Ensure we're on main first
        git checkout main 2>&1 | Out-Null
        
        # Delete branch if it exists locally
        git branch -D $branchName 2>&1 | Out-Null
        
        # Create a fresh branch from main to ensure shared history
        Write-Host "Creating branch from main..." -ForegroundColor Cyan
        git checkout -b $branchName main
        
        # Get the list of files that differ between template branch and template main
        Write-Host "Identifying changes from template branch..." -ForegroundColor Cyan
        
        # Fetch template's main branch for comparison
        git fetch template main 2>&1 | Out-Null
        
        # Copy all files from the template branch (this overwrites with template branch versions)
        Write-Host "Applying changes from template branch..." -ForegroundColor Cyan
        git checkout template/$branchName -- . 2>&1 | Out-Null
        
        # Check if there are any changes to commit
        $changes = git status --porcelain
        if ($changes) {
            Write-Host "Staging changes..." -ForegroundColor Cyan
            git add -A
            if ($LASTEXITCODE -ne 0) {
                Write-Host "Warning: Failed to stage changes. Continuing anyway..." -ForegroundColor Yellow
            }
            
            Write-Host "Committing changes..." -ForegroundColor Cyan
            git commit -m "feat: Footer CCS Woerden (Issue #19) - copied from template" 2>&1 | Out-Null
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Changes committed to branch." -ForegroundColor Green
                
                # Verify the branch is based on main
                $mergeBase = git merge-base main $branchName
                $mainCommit = git rev-parse main
                if ($mergeBase -eq $mainCommit) {
                    Write-Host "Branch correctly based on main." -ForegroundColor Green
                } else {
                    Write-Host "Warning: Branch may not share history with main correctly." -ForegroundColor Yellow
                }
            } else {
                Write-Host "Error: Failed to commit changes. The branch may not have the expected changes." -ForegroundColor Red
            }
        } else {
            Write-Host "No changes to apply from template branch." -ForegroundColor Yellow
        }
        
        # Delete remote branch if it exists to ensure clean push
        git push origin --delete $branchName 2>&1 | Out-Null
        
        # Push the branch to the repository
        Write-Host "Pushing branch to your repository..." -ForegroundColor Cyan
        git push -u origin $branchName
        
        if ($LASTEXITCODE -eq 0) {
            # Create a pull request using GitHub CLI
            Write-Host "Creating pull request..." -ForegroundColor Cyan
            $prTitle = "feat: Footer CCS Woerden (Issue #19)"
            $prBody = @"
This pull request was automatically created from the template repository branch.

**Source:** feat/footer-ccs-woerden-issue-19 from grvermeulen/CCS-Demo

This branch contains the footer implementation for CCS Woerden as referenced in issue #19.
"@
            
            gh pr create --repo "$username/$repoName" `
                --title $prTitle `
                --body $prBody `
                --base main `
                --head $branchName
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Pull request created successfully!" -ForegroundColor Green
            } else {
                Write-Host "Warning: Failed to create pull request. You can create it manually." -ForegroundColor Yellow
            }
        } else {
            Write-Host "Warning: Failed to push branch. You can push it manually." -ForegroundColor Yellow
        }
        
        # Switch back to main branch
        git checkout main 2>&1 | Out-Null
    } else {
        Write-Host "Warning: Failed to fetch branch from template. It may not exist." -ForegroundColor Yellow
    }
    
    # Remove template remote (cleanup)
    git remote remove template 2>&1 | Out-Null
    
    Pop-Location
} else {
    Write-Host "Warning: Repository directory not found. Skipping branch fetch." -ForegroundColor Yellow
}

Write-Host ""

# 5. Create a sample scrum issue
Write-Host "Creating sample scrum issue..." -ForegroundColor Cyan
$issueTitle = "Workshop: Initial Setup"
$issueBody = @"
This is a sample scrum issue created during setup. 

**Next steps:**
- Review and modify this issue as needed
- Or create your own scrum issue following the workshop guidelines
- Start coding your feature!

Feel free to delete this issue if you prefer to create your own from scratch.
"@

gh issue create --repo "$username/$repoName" --title $issueTitle --body $issueBody
if ($LASTEXITCODE -eq 0) {
    Write-Host "Sample scrum issue created successfully!" -ForegroundColor Green
} else {
    Write-Host "Warning: Failed to create sample issue. You can create one manually." -ForegroundColor Yellow
}

Write-Host ""

# 6. Create GitHub API Token for n8n (optional)
Write-Host "=== GitHub API Token for n8n ===" -ForegroundColor Cyan
Write-Host ""
$createToken = Read-Host "Would you like to create/get a GitHub API token for n8n? (y/n)"
if ($createToken -eq "y" -or $createToken -eq "Y") {
    Write-Host "Creating GitHub API token with required scopes..." -ForegroundColor Cyan
    Write-Host ""
    
    # Check authentication
    $null = gh auth status 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Not authenticated. Please authenticate first..." -ForegroundColor Yellow
        gh auth login
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Authentication failed. Skipping token creation." -ForegroundColor Red
        }
    }
    
    # Try to refresh authentication with required scopes
    Write-Host "Refreshing authentication with required scopes..." -ForegroundColor Cyan
    Write-Host "This will open a browser for you to authorize the new scopes." -ForegroundColor Yellow
    Write-Host ""
    
    gh auth refresh -s repo,workflow,admin:org,admin:repo_hook,admin:org_hook 2>&1 | Out-Null
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Authentication refreshed successfully!" -ForegroundColor Green
        Write-Host ""
        
        # Get the token
        Write-Host "Retrieving your GitHub API token..." -ForegroundColor Cyan
        $token = gh auth token
        if ($LASTEXITCODE -eq 0 -and $token) {
            Write-Host ""
            Write-Host "=== Your GitHub API Token ===" -ForegroundColor Green
            Write-Host ""
            Write-Host $token -ForegroundColor Yellow
            Write-Host ""
            Write-Host "⚠️  IMPORTANT: Save this token now! You'll need it for n8n configuration." -ForegroundColor Red
            Write-Host "   This token will not be shown again." -ForegroundColor Red
            Write-Host ""
            Write-Host "Required scopes:" -ForegroundColor Cyan
            Write-Host "  - repo (Full control of private repositories)" -ForegroundColor White
            Write-Host "  - workflow (Update GitHub Action workflows)" -ForegroundColor White
            Write-Host "  - admin:org (Full control of orgs and teams)" -ForegroundColor White
            Write-Host "  - admin:repo_hook (Full control of repository hooks)" -ForegroundColor White
            Write-Host "  - admin:org_hook (Full control of organization hooks)" -ForegroundColor White
            Write-Host ""
            
            # Ask if user wants to copy to clipboard (Windows)
            if ($IsWindows -or $env:OS -like "*Windows*") {
                $copyToClipboard = Read-Host "Copy token to clipboard? (y/n)"
                if ($copyToClipboard -eq "y" -or $copyToClipboard -eq "Y") {
                    $token | Set-Clipboard
                    Write-Host "Token copied to clipboard!" -ForegroundColor Green
                }
            }
        } else {
            Write-Host "Failed to retrieve token. You may need to create one manually." -ForegroundColor Yellow
            Write-Host "Visit: https://github.com/settings/tokens" -ForegroundColor Cyan
        }
    } else {
        Write-Host "Failed to refresh authentication with required scopes." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "You can create a token manually:" -ForegroundColor Cyan
        Write-Host "1. Go to: https://github.com/settings/tokens" -ForegroundColor White
        Write-Host "2. Click 'Generate new token' -> 'Generate new token (classic)'" -ForegroundColor White
        Write-Host "3. Name it (e.g., 'n8n-workshop-token')" -ForegroundColor White
        Write-Host "4. Select scopes: repo, workflow, admin:org, admin:repo_hook, admin:org_hook" -ForegroundColor White
        Write-Host "5. Click 'Generate token' and copy it immediately" -ForegroundColor White
        Write-Host ""
    }
} else {
    Write-Host "Skipping token creation. You can create one later if needed." -ForegroundColor Yellow
    Write-Host "See README.md for instructions." -ForegroundColor Cyan
}

Write-Host ""
Write-Host "=== Setup Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Your repository is ready at: https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Continue with the rest of the setup in README.md" -ForegroundColor White
Write-Host "2. Connect your Vercel account to this repository" -ForegroundColor White
Write-Host "3. Import the n8n workflow and configure it" -ForegroundColor White
if ($createToken -ne "y" -and $createToken -ne "Y") {
    Write-Host "4. Create a GitHub API token for n8n (see README.md)" -ForegroundColor White
}
Write-Host ""

