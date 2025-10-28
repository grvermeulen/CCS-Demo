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
    season: "Best from September to November"
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
    season: "Available year-round"
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
    season: "Peak season from November to March"
  }
};

// Extended fruits
FRUIT_FACTS.pear = {
  nutrition: { calories: "101 kcal", fiber: "5.5g", vitamin_c: "12% DV" },
  facts: [
    "Pears ripen best off the tree",
    "They belong to the rose family",
    "Bartlett is the most common pear variety"
  ],
  benefits: [
    "High in dietary fiber",
    "Supports gut health",
    "Naturally hydrating"
  ],
  season: "Best from August to October"
};

FRUIT_FACTS.melon = {
  nutrition: { calories: "60 kcal", fiber: "1.6g", vitamin_c: "65% DV" },
  facts: [
    "Cantaloupe and honeydew are popular melons",
    "Melons are over 90% water",
    "Ancient Egyptians cultivated melons"
  ],
  benefits: [
    "Excellent hydration",
    "Rich in vitamin C",
    "Low calorie snack"
  ],
  season: "Peak season in summer"
};

FRUIT_FACTS.grapes = {
  nutrition: { calories: "62 kcal", fiber: "0.8g", vitamin_c: "6% DV" },
  facts: [
    "Grapes are one of the oldest cultivated crops",
    "Seedless grapes are created through selective breeding",
    "Grapes grow in clusters called bunches"
  ],
  benefits: [
    "Contain resveratrol antioxidants",
    "Support heart health",
    "Good source of hydration"
  ],
  season: "Best from August to October"
};

FRUIT_FACTS.orange = {
  nutrition: { calories: "62 kcal", fiber: "3.1g", vitamin_c: "92% DV" },
  facts: [
    "Oranges are a hybrid of pomelo and mandarin",
    "Navel oranges have a small secondary fruit inside",
    "Brazil is the largest orange producer"
  ],
  benefits: [
    "Boosts immune function",
    "Supports collagen production",
    "Great source of vitamin C"
  ],
  season: "Peak season from December to April"
};

FRUIT_FACTS.strawberry = {
  nutrition: { calories: "49 kcal", fiber: "3g", vitamin_c: "97% DV" },
  facts: [
    "Strawberries have their seeds on the outside",
    "Not true berries botanically",
    "There are over 600 varieties"
  ],
  benefits: [
    "Rich in antioxidants",
    "Supports skin health",
    "Low in calories"
  ],
  season: "Peak season from April to June"
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