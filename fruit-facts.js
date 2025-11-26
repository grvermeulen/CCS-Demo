const FRUIT_FACTS = {
  apple: {
    nutrition: {
      calories: "95 kcal",
      fiber: "4.5g",
      vitamin_c: "14% DV"
    },
    facts: [
      "Apples float in water because they are 25% air",
      "There are over 7,500 varieties of apples grown worldwide",
      "The science of apple growing is called pomology"
    ],
    benefits: [
      "Supports heart health",
      "Helps maintain healthy blood sugar levels",
      "Rich in antioxidants"
    ],
    season: "Best from September to November",
    cultural_info: {
      origin: "Central Asia (Kazakhstan region)",
      regions: ["North America", "Europe", "Asia", "Australia"],
      cultural_significance: [
        "🍎 Symbol of knowledge and temptation in Western culture",
        "🎓 Traditional gift for teachers in American schools",
        "🍏 Associated with health: 'An apple a day keeps the doctor away'",
        "🌸 Cherry blossoms (related fruit) are celebrated in Japan's Hanami festival"
      ],
      popular_varieties_by_region: {
        "North America": ["Gala", "Fuji", "Red Delicious", "Granny Smith"],
        "Europe": ["Golden Delicious", "Braeburn", "Cox's Orange Pippin"],
        "Asia": ["Fuji", "Asian Pear-Apple hybrids"],
        "Australia": ["Pink Lady", "Gala", "Granny Smith"]
      },
      traditional_uses: [
        "Apple cider in American autumn traditions",
        "Toffee apples at British fairs",
        "Apple strudel in Austrian cuisine",
        "Dried apples in Turkish and Middle Eastern sweets"
      ]
    }
  },
  banana: {
    nutrition: {
      calories: "105 kcal",
      fiber: "3.1g",
      potassium: "422mg"
    },
    facts: [
      "Bananas are berries, but strawberries aren't!",
      "They naturally produce a happy hormone called serotonin",
      "Wild bananas have large seeds and little flesh"
    ],
    benefits: [
      "Great source of quick energy",
      "Supports muscle function",
      "Aids in digestion"
    ],
    season: "Available year-round",
    cultural_info: {
      origin: "Southeast Asia and Papua New Guinea",
      regions: ["Central America", "South America", "Africa", "Asia", "Caribbean"],
      cultural_significance: [
        "🍌 Sacred fruit in Hindu and Buddhist traditions",
        "🎋 Banana leaves used as natural plates in South Indian cuisine",
        "🏃‍♂️ Popular energy source for athletes worldwide",
        "🎉 Symbol of fertility and prosperity in many tropical cultures"
      ],
      popular_varieties_by_region: {
        "Central America": ["Cavendish", "Plantains"],
        "Caribbean": ["Red bananas", "Blue Java", "Plantains"],
        "Asia": ["Lady Finger", "Red bananas", "Cooking bananas"],
        "Africa": ["East African Highland bananas", "Plantains"]
      },
      traditional_uses: [
        "Banana leaf wrapping in Thai and Indian cooking",
        "Fried plantains in Caribbean and African cuisine",
        "Banana bread in American and European baking",
        "Banana chips as snacks in Asian countries"
      ]
    }
  },
  lemon: {
    nutrition: {
      calories: "20 kcal",
      fiber: "2.4g",
      vitamin_c: "51% DV"
    },
    facts: [
      "One tree can produce up to 600 pounds of lemons per year",
      "They were once used to combat scurvy in sailors",
      "Ancient Romans believed lemons could neutralize poison"
    ],
    benefits: [
      "Boosts immune system",
      "Aids in iron absorption",
      "Supports skin health"
    ],
    season: "Peak season from November to March",
    cultural_info: {
      origin: "Northeast India, Northern Myanmar, and Southern China",
      regions: ["Mediterranean", "California", "Argentina", "Turkey", "Italy"],
      cultural_significance: [
        "🍋 Symbol of purification in Mediterranean cultures",
        "🧿 Used in evil eye protection rituals in Turkey and Greece",
        "🍸 Essential in British gin and tonic tradition",
        "🌊 Associated with cleansing and freshness in aromatherapy"
      ],
      popular_varieties_by_region: {
        "Mediterranean": ["Eureka", "Lisbon", "Meyer"],
        "California": ["Eureka", "Meyer", "Ponderosa"],
        "Italy": ["Sorrento", "Sfusato Amalfitano"],
        "Turkey": ["Interdonato", "Lamas"]
      },
      traditional_uses: [
        "Preserved lemons in Moroccan tagines",
        "Lemon curd in British teatime traditions",
        "Limoncello liqueur in Italian culture",
        "Lemon water for morning detox in wellness traditions"
      ]
    }
  },
  strawberry: {
    nutrition: {
      calories: "32 kcal",
      fiber: "2.0g",
      vitamin_c: "89% DV"
    },
    facts: [
      "Strawberries are the only fruit with seeds on the outside",
      "One strawberry has about 200 seeds on its surface",
      "They belong to the rose family along with apples and cherries"
    ],
    benefits: [
      "Excellent source of vitamin C and antioxidants",
      "Supports heart health and immune system",
      "May help regulate blood sugar levels"
    ],
    season: "Peak season from April to July",
    cultural_info: {
      origin: "Europe and North America",
      regions: ["Europe", "North America", "Asia", "Australia", "South America"],
      cultural_significance: [
        "🍓 Symbol of love and passion in many cultures",
        "👑 Associated with royalty - served at medieval feasts",
        "🌸 Represents spring renewal and new beginnings",
        "💕 Traditional romantic fruit in European folklore"
      ],
      popular_varieties_by_region: {
        "North America": ["Albion", "Chandler", "Seascape", "Jewel"],
        "Europe": ["Elsanta", "Sonata", "Clery", "Gariguette"],
        "Asia": ["Amaou", "Tochiotome", "Akihime"],
        "Australia": ["Festival", "Redlands Joy", "Albion"]
      },
      traditional_uses: [
        "Strawberries and cream at Wimbledon tennis",
        "French fraises des bois in gourmet cuisine",
        "Japanese strawberry daifuku (mochi desserts)",
        "American strawberry shortcake tradition"
      ]
    }
  }
};

// Regional bundle configurations
const REGIONAL_BUNDLES = {
  mediterranean: {
    name: "Mediterranean Sunshine",
    region: "Mediterranean",
    fruits: ["apple", "lemon"],
    description: "Experience the warmth of the Mediterranean with crisp apples and zesty lemons, perfect for traditional recipes.",
    cultural_context: "Inspired by the sun-drenched orchards of Italy and Greece, where these fruits have been cultivated for centuries.",
    emoji: "🌅",
    traditional_recipe: "Try making a Mediterranean apple-lemon tart!"
  },
  tropical: {
    name: "Tropical Paradise",
    region: "Tropical",
    fruits: ["banana", "lemon"],
    description: "Transport yourself to tropical beaches with sweet bananas and tangy lemons.",
    cultural_context: "Celebrates the vibrant fruit cultures of the Caribbean and Southeast Asia.",
    emoji: "🏝️",
    traditional_recipe: "Perfect for tropical smoothies and banana-lemon bread!"
  },
  global_harmony: {
    name: "Global Harmony",
    region: "Worldwide",
    fruits: ["apple", "banana", "lemon"],
    description: "A celebration of fruits loved across all continents and cultures.",
    cultural_context: "Represents the universal appeal of these fruits across different cultures and cuisines.",
    emoji: "🌍",
    traditional_recipe: "Create an international fruit salad with honey and mint!"
  },
  asian_fusion: {
    name: "Asian Garden",
    region: "Asia",
    fruits: ["apple", "banana"],
    description: "Discover the Asian varieties and traditions surrounding these beloved fruits.",
    cultural_context: "Honoring the rich fruit cultivation traditions of Asia, from Japanese apple orchards to Southeast Asian banana plantations.",
    emoji: "🏮",
    traditional_recipe: "Try tempura-style fruit fritters or Asian fruit salad!"
  },
  american_classic: {
    name: "American Orchard",
    region: "North America",
    fruits: ["apple", "lemon"],
    description: "Classic American fruit combination perfect for traditional desserts and drinks.",
    cultural_context: "Celebrating American orchard traditions and the popularity of apple pie and lemonade.",
    emoji: "🦅",
    traditional_recipe: "Perfect for apple pie with lemon zest or fresh lemonade!"
  },
  european_romance: {
    name: "European Romance",
    region: "Europe",
    fruits: ["strawberry", "lemon"],
    description: "A romantic combination celebrating European strawberry traditions and citrus elegance.",
    cultural_context: "Inspired by French patisseries and British garden parties where strawberries and lemon are cherished.",
    emoji: "💕",
    traditional_recipe: "Try strawberry lemon tarts or British strawberries and cream!"
  },
  berry_harvest: {
    name: "Berry Harvest Festival",
    region: "Worldwide",
    fruits: ["strawberry", "apple"],
    description: "Celebrate the joy of berry picking season with this sweet and crisp combination.",
    cultural_context: "Honoring harvest festivals worldwide where berries and orchard fruits are celebrated together.",
    emoji: "🍓",
    traditional_recipe: "Perfect for strawberry apple crisp or fresh fruit salads!"
  },
  spring_awakening: {
    name: "Spring Awakening",
    region: "Worldwide",
    fruits: ["strawberry", "banana", "lemon"],
    description: "A vibrant mix representing the renewal and freshness of spring across cultures.",
    cultural_context: "Celebrating spring festivals worldwide where fresh fruits symbolize new beginnings and vitality.",
    emoji: "🌸",
    traditional_recipe: "Create a spring smoothie bowl or fresh fruit parfait!"
  }
};

function getFruitFacts(fruit) {
  return FRUIT_FACTS[fruit] || null;
}

function createFactsSection(fruit) {
  const facts = getFruitFacts(fruit);
  if (!facts) return '';

  return `
    <div class="facts-section">
      <div class="facts-nutrition">
        <h3>Nutrition Facts</h3>
        <div class="nutrition-grid">
          <div class="nutrition-item">
            <span class="nutrition-value">${facts.nutrition.calories}</span>
            <span class="nutrition-label">Calories</span>
          </div>
          <div class="nutrition-item">
            <span class="nutrition-value">${facts.nutrition.fiber}</span>
            <span class="nutrition-label">Fiber</span>
          </div>
          ${facts.nutrition.vitamin_c ? `
            <div class="nutrition-item">
              <span class="nutrition-value">${facts.nutrition.vitamin_c}</span>
              <span class="nutrition-label">Vitamin C</span>
            </div>
          ` : `
            <div class="nutrition-item">
              <span class="nutrition-value">${facts.nutrition.potassium}</span>
              <span class="nutrition-label">Potassium</span>
            </div>
          `}
        </div>
      </div>

      <div class="cultural-origin">
        <h3>🌍 Origin & Cultural Journey</h3>
        <p><strong>Originally from:</strong> ${facts.cultural_info.origin}</p>
        <p><strong>Now grown in:</strong> ${facts.cultural_info.regions.join(', ')}</p>
      </div>

      <div class="cultural-significance">
        <h3>🎭 Cultural Significance</h3>
        <ul class="cultural-list">
          ${facts.cultural_info.cultural_significance.map(significance => `<li>${significance}</li>`).join('')}
        </ul>
      </div>

      <div class="regional-varieties">
        <h3>🌏 Popular Varieties by Region</h3>
        <div class="varieties-grid">
          ${Object.entries(facts.cultural_info.popular_varieties_by_region).map(([region, varieties]) => `
            <div class="variety-region">
              <h4>${region}</h4>
              <p>${varieties.join(', ')}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="traditional-uses">
        <h3>🍽️ Traditional Uses Around the World</h3>
        <ul class="traditional-list">
          ${facts.cultural_info.traditional_uses.map(use => `<li>${use}</li>`).join('')}
        </ul>
      </div>

      <div class="facts-benefits">
        <h3>Health Benefits</h3>
        <ul class="benefits-list">
          ${facts.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
      </div>

      <div class="fun-facts">
        <h3>Fun Facts</h3>
        <div class="facts-carousel">
          ${facts.facts.map(fact => `
            <div class="fact-card">
              <p>${fact}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="season-info">
        <h3>Best Season</h3>
        <p>${facts.season}</p>
      </div>
    </div>
  `;
}

// Regional bundle functions
function getRegionalBundles() {
  return REGIONAL_BUNDLES;
}

function getRegionalBundle(bundleKey) {
  return REGIONAL_BUNDLES[bundleKey] || null;
}

function addRegionalBundle(bundleKey) {
  const bundle = getRegionalBundle(bundleKey);
  if (!bundle) {
    console.error('Bundle not found:', bundleKey);
    return;
  }

  // Add each fruit in the bundle to the cart
  bundle.fruits.forEach(fruit => {
    if (typeof addToBasket === 'function') {
      addToBasket(fruit);
    }
  });

  // Show success message with cultural context
  showBundleAddedMessage(bundle);
}

function showBundleAddedMessage(bundle) {
  const message = `${bundle.emoji} ${bundle.name} bundle added to your basket! ${bundle.cultural_context}`;
  
  // Create a temporary message element
  const messageEl = document.createElement('div');
  messageEl.className = 'bundle-success-message';
  messageEl.innerHTML = `
    <div class="success-content">
      <h3>${bundle.emoji} Bundle Added!</h3>
      <p><strong>${bundle.name}</strong> from ${bundle.region}</p>
      <p>${bundle.cultural_context}</p>
      <p><em>${bundle.traditional_recipe}</em></p>
    </div>
  `;
  
  document.body.appendChild(messageEl);
  
  // Remove message after 5 seconds
  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.parentNode.removeChild(messageEl);
    }
  }, 5000);
}

function filterBundlesByRegion(region) {
  if (region === 'all') {
    return Object.values(REGIONAL_BUNDLES);
  }
  
  return Object.values(REGIONAL_BUNDLES).filter(bundle => 
    bundle.region.toLowerCase().includes(region.toLowerCase())
  );
}

function createRegionalBundleCard(bundleKey, bundle) {
  return `
    <div class="regional-bundle-card" data-region="${bundle.region.toLowerCase()}">
      <div class="bundle-header">
        <span class="bundle-emoji">${bundle.emoji}</span>
        <h2>${bundle.name}</h2>
        <span class="bundle-region">${bundle.region}</span>
      </div>
      <div class="bundle-fruits">
        ${bundle.fruits.map(fruit => {
          const fruitEmoji = fruit === 'apple' ? '🍏' : fruit === 'banana' ? '🍌' : fruit === 'lemon' ? '🍋' : '🍓';
          return `<span class="fruit-emoji" title="${fruit}">${fruitEmoji}</span>`;
        }).join('')}
      </div>
      <p class="bundle-description">${bundle.description}</p>
      <div class="cultural-context">
        <p><em>${bundle.cultural_context}</em></p>
      </div>
      <div class="traditional-recipe">
        <p><strong>💡 Try this:</strong> ${bundle.traditional_recipe}</p>
      </div>
      <button
        onclick="addRegionalBundle('${bundleKey}')"
        class="regional-bundle-btn"
        aria-label="Add ${bundle.name} bundle to basket"
      >
        Add ${bundle.name} Bundle
      </button>
    </div>
  `;
}

// Initialize facts carousel
function initFactsCarousel() {
  const cards = document.querySelectorAll('.fact-card');
  let currentCard = 0;

  function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
  }

  function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  }

  // Show first card and start rotation
  if (cards.length > 0) {
    showCard(0);
    setInterval(nextCard, 5000); // Rotate every 5 seconds
  }
}

// Initialize regional bundle filtering
function initRegionalBundleFiltering() {
  const filterButtons = document.querySelectorAll('.region-filter-btn');
  const bundleCards = document.querySelectorAll('.regional-bundle-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const region = button.dataset.region;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter bundle cards
      bundleCards.forEach(card => {
        if (region === 'all' || card.dataset.region === region) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('fade-in');
        }
      });
    });
  });
} 