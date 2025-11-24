---
description: Agentic QA Workflow to analyze PRs, plan tests, and execute them locally.
---

# Agentic QA Workflow

This workflow automates the QA process for a Pull Request.

## 1. Setup Local Environment
Start the local static server to host the application.
```bash
# Start http-server in the background on port 8080
start-process npx -ArgumentList "-y", "http-server", "-p", "8080", "--silent" -WindowStyle Hidden
```
*Wait a few seconds for the server to start.*

## 2. Analyze Changes & Requirements
1.  **Get the current branch name**:
    ```bash
    git branch --show-current
    ```
2.  **Get the diff**:
    ```bash
    git diff main...HEAD
    ```
3.  **Find linked GitHub Issue**:
    - Extract issue number from PR title or branch name.
    - Fetch issue details:
      ```bash
      gh issue view <ISSUE_NUMBER> --json title,body
      ```

## 3. Impact Analysis & Test Planning
**Step 3.1: Analyze Impact**
- Review the `git diff` and `issue body`.
- Determine if testing is required (skip for docs, config, etc.).

**Step 3.2: Generate Test Plan**
- If testing is required, generate a structured test plan.
- **Format**:
    - **Test Case ID**: TC-00X
    - **Title**: Short description.
    - **Steps**: Actionable steps for a browser agent.
    - **Expected Result**: What to verify.

**Step 3.3: Post Plan to GitHub**
- Post the generated plan to the PR as a comment.
  ```bash
  gh pr comment <PR_NUMBER> --body "## 🧪 Agentic QA Test Plan... (content)"
  ```

## 4. Test Execution (Browser Agent)
**Step 4.1: Launch Browser Agent**
- Use the `browser_subagent` tool.
- **Task**: "Execute the following test cases against http://localhost:8080..."
- **Instructions**:
    - Navigate to the pages.
    - Perform actions (click, type).
    - Verify content matches "Expected Result".
    - Take screenshots of failures.

## 5. Reporting
**Step 5.1: Generate Report**
- Compile results into a Markdown report.
    - ✅ Pass / ❌ Fail for each test case.
    - Observations/Logs.

**Step 5.2: Post Results to GitHub**
- Post the final report to the PR.
  ```bash
  gh pr comment <PR_NUMBER> --body "## 🔬 Agentic QA Results... (content)"
  ```

## 6. Cleanup
- Stop the local server (optional, or leave running for user).
