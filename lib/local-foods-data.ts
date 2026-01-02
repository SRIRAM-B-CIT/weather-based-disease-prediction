export interface RegionalFoods {
  coldWeather: string[];
  hotWeather: string[];
  rainy: string[];
  highHumidity: string[];
  balanced: string[];
  beverages: {
    cold: string[];
    hot: string[];
    rainy: string[];
  };
}

export interface RegionalFoodData {
  [countryCode: string]: RegionalFoods;
}

export const regionalFoods: RegionalFoodData = {
  // India
  IN: {
    coldWeather: [
      "Dal (lentil soup)",
      "Rajma (kidney beans)",
      "Gajar ka halwa (carrot pudding)",
      "Bajra roti (millet bread)",
      "Sarson ka saag (mustard greens)",
      "Dry fruits and nuts (almonds, cashews)",
    ],
    hotWeather: [
      "Buttermilk (chaas)",
      "Cucumber raita",
      "Watermelon",
      "Coconut water",
      "Curd rice",
      "Light salads with tomato and onion",
    ],
    rainy: [
      "Khichdi (rice and lentils)",
      "Pakoras (fritters)",
      "Masala chai",
      "Ginger and turmeric milk",
      "Hot dal with rice",
      "Steamed momos",
    ],
    highHumidity: [
      "Fresh lime water",
      "Light khichdi",
      "Steamed idli and dosa",
      "Fresh fruits (papaya, guava)",
      "Curd and yogurt",
      "Light vegetable curry",
    ],
    balanced: [
      "Mixed vegetable sabzi",
      "Roti and rice",
      "Dal and paneer",
      "Seasonal fruits",
      "Sprouts salad",
      "Coconut chutney",
    ],
    beverages: {
      cold: ["Buttermilk", "Coconut water", "Fresh lime soda", "Aam panna"],
      hot: ["Masala chai", "Turmeric milk", "Ginger tea", "Kadha"],
      rainy: ["Masala chai", "Hot soup", "Ginger tea", "Tulsi tea"],
    },
  },

  // United States
  US: {
    coldWeather: [
      "Chicken noodle soup",
      "Chili con carne",
      "Mac and cheese",
      "Beef stew",
      "Oatmeal with berries",
      "Roasted root vegetables",
    ],
    hotWeather: [
      "Fresh salads",
      "Grilled vegetables",
      "Watermelon",
      "Smoothie bowls",
      "Cold pasta salad",
      "Fresh berries",
    ],
    rainy: [
      "Tomato soup with grilled cheese",
      "Chicken pot pie",
      "Beef stew",
      "Baked potatoes",
      "Hot chocolate",
      "Corn chowder",
    ],
    highHumidity: [
      "Greek salad",
      "Grilled chicken",
      "Fresh fruit salad",
      "Quinoa bowls",
      "Steamed vegetables",
      "Light fish dishes",
    ],
    balanced: [
      "Mixed green salad",
      "Grilled chicken",
      "Brown rice",
      "Seasonal vegetables",
      "Nuts and seeds",
      "Whole grain bread",
    ],
    beverages: {
      cold: ["Iced tea", "Lemonade", "Fresh juice", "Smoothies"],
      hot: ["Coffee", "Hot chocolate", "Herbal tea", "Apple cider"],
      rainy: ["Hot coffee", "Tea", "Hot chocolate", "Warm milk"],
    },
  },

  // Japan
  JP: {
    coldWeather: [
      "Miso soup",
      "Ramen with hot broth",
      "Udon noodles",
      "Nabe (hot pot)",
      "Oden (hot stew)",
      "Steamed rice with natto",
    ],
    hotWeather: [
      "Cold soba noodles",
      "Hiyashi chuka (cold ramen)",
      "Edamame",
      "Sushi and sashimi",
      "Tofu salad",
      "Pickled vegetables",
    ],
    rainy: [
      "Hot ramen",
      "Tempura",
      "Miso soup",
      "Rice porridge (okayu)",
      "Nikujaga (meat and potato stew)",
      "Green tea",
    ],
    highHumidity: [
      "Light sushi",
      "Steamed fish",
      "Miso soup",
      "Fresh vegetables",
      "Tofu dishes",
      "Seaweed salad",
    ],
    balanced: [
      "Steamed rice",
      "Miso soup",
      "Grilled fish",
      "Pickled vegetables",
      "Nori (seaweed)",
      "Fresh tofu",
    ],
    beverages: {
      cold: ["Cold green tea", "Barley tea", "Fresh fruit juice", "Ramune"],
      hot: ["Green tea", "Hojicha", "Genmaicha", "Hot sake"],
      rainy: ["Hot green tea", "Matcha", "Warm sake", "Hot miso soup"],
    },
  },

  // China
  CN: {
    coldWeather: [
      "Hot pot",
      "Congee (rice porridge)",
      "Dumpling soup",
      "Steamed buns (baozi)",
      "Stir-fried vegetables",
      "Ginger chicken soup",
    ],
    hotWeather: [
      "Cold noodles",
      "Cucumber salad",
      "Watermelon",
      "Herbal tea",
      "Steamed fish",
      "Light stir-fry",
    ],
    rainy: [
      "Hot noodle soup",
      "Congee",
      "Steamed dumplings",
      "Ginger tea",
      "Stir-fried greens",
      "Wontons in broth",
    ],
    highHumidity: [
      "Steamed vegetables",
      "Light soup",
      "Fresh tofu",
      "Stir-fried greens",
      "Herbal tea",
      "Steamed fish",
    ],
    balanced: [
      "Steamed rice",
      "Stir-fried vegetables",
      "Tofu dishes",
      "Seasonal greens",
      "Lean meat",
      "Herbal soup",
    ],
    beverages: {
      cold: ["Herbal tea", "Chrysanthemum tea", "Fresh juice", "Coconut water"],
      hot: ["Green tea", "Oolong tea", "Ginger tea", "Pu-erh tea"],
      rainy: ["Hot tea", "Ginger tea", "Warm soy milk", "Hot soup"],
    },
  },

  // Italy
  IT: {
    coldWeather: [
      "Minestrone soup",
      "Risotto",
      "Polenta",
      "Pasta e fagioli",
      "Osso buco",
      "Roasted vegetables",
    ],
    hotWeather: [
      "Caprese salad",
      "Bruschetta",
      "Fresh tomatoes with basil",
      "Grilled vegetables",
      "Light pasta with olive oil",
      "Fresh fruits",
    ],
    rainy: [
      "Pasta with tomato sauce",
      "Ribollita soup",
      "Risotto",
      "Lasagna",
      "Espresso",
      "Ciabatta bread",
    ],
    highHumidity: [
      "Fresh salad",
      "Grilled fish",
      "Light pasta",
      "Fresh mozzarella",
      "Tomatoes and basil",
      "Olive oil dishes",
    ],
    balanced: [
      "Pasta with vegetables",
      "Fresh salad",
      "Olive oil",
      "Fresh bread",
      "Seasonal vegetables",
      "Fish or chicken",
    ],
    beverages: {
      cold: ["Iced coffee", "Limonata", "Fresh juice", "Aperol spritz"],
      hot: ["Espresso", "Cappuccino", "Hot chocolate", "Herbal tea"],
      rainy: ["Espresso", "Hot chocolate", "Cappuccino", "Tea"],
    },
  },

  // Mexico
  MX: {
    coldWeather: [
      "Pozole (hominy soup)",
      "Menudo",
      "Black beans with rice",
      "Tamales",
      "Hot tortillas",
      "Atole (corn-based drink)",
    ],
    hotWeather: [
      "Ceviche",
      "Fresh fruit (mango, papaya)",
      "Agua fresca",
      "Light tacos",
      "Guacamole",
      "Fresh salsa",
    ],
    rainy: [
      "Hot chocolate with bread",
      "Bean soup",
      "Tamales",
      "Pozole",
      "Warm tortillas",
      "Atole",
    ],
    highHumidity: [
      "Fresh ceviche",
      "Light tacos",
      "Fresh vegetables",
      "Agua fresca",
      "Fresh fruits",
      "Salsa verde",
    ],
    balanced: [
      "Rice and beans",
      "Fresh tortillas",
      "Grilled vegetables",
      "Fresh salsa",
      "Avocado",
      "Seasonal fruits",
    ],
    beverages: {
      cold: ["Agua fresca", "Horchata", "Jamaica", "Fresh lime water"],
      hot: ["Hot chocolate", "Atole", "Café de olla", "Champurrado"],
      rainy: ["Hot chocolate", "Atole", "Coffee", "Champurrado"],
    },
  },

  // Thailand
  TH: {
    coldWeather: [
      "Tom yum soup",
      "Khao soi (curry noodles)",
      "Pad thai",
      "Green curry",
      "Sticky rice",
      "Ginger chicken",
    ],
    hotWeather: [
      "Som tam (papaya salad)",
      "Fresh spring rolls",
      "Thai iced tea",
      "Fresh coconut",
      "Tropical fruits",
      "Light noodle salad",
    ],
    rainy: [
      "Hot tom yum soup",
      "Khao soi",
      "Pad krapow",
      "Green curry",
      "Hot jasmine rice",
      "Ginger tea",
    ],
    highHumidity: [
      "Fresh papaya salad",
      "Light curry",
      "Fresh vegetables",
      "Spring rolls",
      "Steamed fish",
      "Fresh herbs",
    ],
    balanced: [
      "Jasmine rice",
      "Stir-fried vegetables",
      "Fresh herbs (basil, cilantro)",
      "Light curry",
      "Grilled meats",
      "Tropical fruits",
    ],
    beverages: {
      cold: ["Thai iced tea", "Coconut water", "Fresh lime juice", "Nam manao"],
      hot: ["Thai tea", "Ginger tea", "Lemongrass tea", "Hot jasmine tea"],
      rainy: ["Hot tea", "Ginger tea", "Thai tea", "Hot lemongrass"],
    },
  },

  // France
  FR: {
    coldWeather: [
      "French onion soup",
      "Pot-au-feu (beef stew)",
      "Cassoulet",
      "Coq au vin",
      "Croissants with hot chocolate",
      "Baguette with cheese",
    ],
    hotWeather: [
      "Niçoise salad",
      "Ratatouille",
      "Fresh baguette",
      "Chilled soup",
      "Fresh cheeses",
      "Fresh fruits",
    ],
    rainy: [
      "French onion soup",
      "Boeuf bourguignon",
      "Quiche",
      "Hot coffee",
      "Croissants",
      "Croque monsieur",
    ],
    highHumidity: [
      "Fresh salad",
      "Light quiche",
      "Fresh vegetables",
      "Baguette",
      "Light cheese",
      "Fresh fruits",
    ],
    balanced: [
      "Fresh baguette",
      "Cheese platter",
      "Mixed salad",
      "Seasonal vegetables",
      "Roasted chicken",
      "Fresh fruits",
    ],
    beverages: {
      cold: ["Iced coffee", "Citron pressé", "Wine", "Fresh juice"],
      hot: ["Coffee", "Hot chocolate", "Tea", "Café au lait"],
      rainy: ["Coffee", "Hot chocolate", "Tea", "Café crème"],
    },
  },

  // United Kingdom
  GB: {
    coldWeather: [
      "Shepherd's pie",
      "Fish and chips",
      "Beef stew",
      "Porridge with honey",
      "Bangers and mash",
      "Hot pot",
    ],
    hotWeather: [
      "Fresh salads",
      "Cucumber sandwiches",
      "Strawberries and cream",
      "Cold meat platter",
      "Fresh vegetables",
      "Light fish",
    ],
    rainy: [
      "Hot soup",
      "Fish and chips",
      "Cottage pie",
      "Hot tea with biscuits",
      "Roast dinner",
      "Beans on toast",
    ],
    highHumidity: [
      "Fresh salad",
      "Light fish",
      "Fresh vegetables",
      "Cold cuts",
      "Cucumber",
      "Fresh fruits",
    ],
    balanced: [
      "Roast chicken",
      "Vegetables",
      "Jacket potato",
      "Fresh salad",
      "Fish",
      "Whole grain bread",
    ],
    beverages: {
      cold: ["Iced tea", "Pimm's", "Lemonade", "Fresh juice"],
      hot: ["Tea", "Coffee", "Hot chocolate", "Herbal tea"],
      rainy: ["Hot tea", "Coffee", "Hot chocolate", "Warm milk"],
    },
  },
};

export const genericFoods: RegionalFoods = {
  coldWeather: [
    "Warm soups and broths",
    "Root vegetables",
    "Ginger and turmeric",
    "Honey and warm milk",
    "Nuts and seeds",
    "Whole grains and oats",
  ],
  hotWeather: [
    "Watermelon and cucumber",
    "Leafy greens",
    "Coconut water",
    "Fresh fruits",
    "Yogurt",
    "Light salads",
  ],
  rainy: [
    "Hot soup",
    "Garlic and ginger",
    "Cooked vegetables",
    "Lentils and beans",
    "Steamed grains",
    "Herbal tea",
  ],
  highHumidity: [
    "Citrus fruits",
    "Bell peppers and tomatoes",
    "Garlic and onions",
    "Probiotics (yogurt)",
    "Fresh herbs",
    "Lean proteins",
  ],
  balanced: [
    "Mixed vegetables",
    "Whole grains",
    "Lean proteins",
    "Fresh fruits",
    "Nuts and seeds",
    "Dairy products",
  ],
  beverages: {
    cold: ["Fresh water", "Lemonade", "Fresh juice", "Coconut water"],
    hot: ["Herbal tea", "Warm water with honey", "Green tea", "Ginger tea"],
    rainy: ["Hot tea", "Warm soup", "Hot water", "Herbal infusions"],
  },
};

export function getRegionalFoods(countryCode?: string): RegionalFoods {
  if (!countryCode) {
    return genericFoods;
  }
  return regionalFoods[countryCode.toUpperCase()] || genericFoods;
}
