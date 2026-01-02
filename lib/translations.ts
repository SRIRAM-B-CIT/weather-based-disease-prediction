export type Language = "en" | "ta" | "hi";

export interface Translations {
  // App titles and descriptions
  appTitle: string;
  appDescription: string;
  searchPlaceholder: string;
  searchButton: string;

  // Section headings
  weatherHeading: string;
  diseaseRisksHeading: string;
  dietaryRecommendationsHeading: string;

  // Common terms
  temperature: string;
  humidity: string;
  windSpeed: string;
  condition: string;
  feelsLike: string;
  benefits: string;
  hydration: string;
  recommendedFoods: string;

  // Dietary categories
  coldWeatherNutrition: string;
  hotWeatherHydration: string;
  highHumiditySupport: string;
  monsoonSeasonSupport: string;
  balancedWellnessDiet: string;
  universalHealthTips: string;

  // Dietary benefits
  coldWeatherBenefits: string;
  hotWeatherBenefits: string;
  highHumidityBenefits: string;
  rainyWeatherBenefits: string;
  balancedDietBenefits: string;
  universalHealthBenefits: string;

  // Universal health tips foods (these are generic and can be translated)
  universalTips: string[];

  // Messages
  searchForCity: string;
  cityNotFound: string;
  loadingWeather: string;

  // Hydration recommendations
  drinkWater: string;

  // Disease names and labels
  commonCold: string;
  heatStroke: string;
  fungalInfections: string;
  waterborne: string;
  respiratory: string;
  rheumatoid: string;
  generalWellness: string;
  commonSymptoms: string;
  precautions: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: "HealthWeather",
    appDescription:
      "Discover disease risks and dietary guidance based on weather conditions",
    searchPlaceholder: "Enter city name...",
    searchButton: "Search",

    weatherHeading: "Current Weather",
    diseaseRisksHeading: "Health Risks",
    dietaryRecommendationsHeading: "Dietary Recommendations",

    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "Wind Speed",
    condition: "Condition",
    feelsLike: "Feels like",
    benefits: "Benefits",
    hydration: "Hydration",
    recommendedFoods: "Recommended Foods",

    coldWeatherNutrition: "Cold Weather Nutrition",
    hotWeatherHydration: "Hot Weather Hydration",
    highHumiditySupport: "High Humidity Support",
    monsoonSeasonSupport: "Monsoon Season Support",
    balancedWellnessDiet: "Balanced Wellness Diet",
    universalHealthTips: "Universal Health Tips",

    coldWeatherBenefits:
      "Provides warmth, boosts immunity, and increases metabolism",
    hotWeatherBenefits: "Cools body, prevents dehydration, aids digestion",
    highHumidityBenefits:
      "Boosts immunity against fungal infections and infections",
    rainyWeatherBenefits: "Strengthens digestive system and immunity",
    balancedDietBenefits: "Maintains optimal health and energy levels",
    universalHealthBenefits:
      "Supports overall health and prevents chronic diseases",

    universalTips: [
      "Include all food groups daily",
      "Eat colorful vegetables",
      "Choose whole grains over refined",
      "Limit sugar and salt",
      "Eat seasonal produce",
      "Prepare fresh food",
    ],

    searchForCity: "Search for a city to get started",
    cityNotFound: "City not found",
    loadingWeather: "Loading weather data...",
    drinkWater: "Stay hydrated throughout the day with clean water",

    commonCold: "Common Cold & Flu",
    heatStroke: "Heat Stroke & Dehydration",
    fungalInfections: "Fungal Infections & Allergies",
    waterborne: "Waterborne Diseases & Infections",
    respiratory: "Respiratory Issues & Asthma",
    rheumatoid: "Rheumatoid & Joint Pain",
    generalWellness: "General Wellness",
    commonSymptoms: "Common Symptoms",
    precautions: "Precautions",
  },

  ta: {
    appTitle: "ஹெல்த்வெதர்",
    appDescription:
      "வானிலை நிலைமைகளின் அடிப்படையில் நோய் அபாயங்கள் மற்றும் உணவு வழிகாட்டுதலைக் கண்டறியவும்",
    searchPlaceholder: "நகர பெயரை உள்ளிடவும்...",
    searchButton: "தேடு",

    weatherHeading: "தற்போதைய வானிலை",
    diseaseRisksHeading: "உடல்நல அபாயங்கள்",
    dietaryRecommendationsHeading: "உணவு பரிந்துரைகள்",

    temperature: "வெப்பநிலை",
    humidity: "ஈரப்பதம்",
    windSpeed: "காற்றின் வேகம்",
    condition: "நிலைமை",
    feelsLike: "உணர்வு",
    benefits: "நன்மைகள்",
    hydration: "நீர்ச்சத்து",
    recommendedFoods: "பரிந்துரைக்கப்பட்ட உணவுகள்",

    coldWeatherNutrition: "குளிர் காலத்திற்கான ஊட்டச்சத்து",
    hotWeatherHydration: "வெப்ப காலத்திற்கான நீர்ச்சத்து",
    highHumiditySupport: "அதிக ஈரப்பதத்திற்கான ஆதரவு",
    monsoonSeasonSupport: "பருவமழை காலத்திற்கான ஆதரவு",
    balancedWellnessDiet: "சமச்சீர் ஆரோக்கிய உணவு",
    universalHealthTips: "பொதுவான உடல்நல குறிப்புகள்",

    coldWeatherBenefits:
      "வெப்பத்தை வழங்குகிறது, நோயெதிர்ப்பு சக்தியை அதிகரிக்கிறது, வளர்சிதை மாற்றத்தை அதிகரிக்கிறது",
    hotWeatherBenefits:
      "உடலை குளிர்விக்கிறது, நீரிழப்பை தடுக்கிறது, செரிமானத்திற்கு உதவுகிறது",
    highHumidityBenefits:
      "பூஞ்சை தொற்றுகள் மற்றும் நோய்த்தொற்றுகளுக்கு எதிராக நோயெதிர்ப்பு சக்தியை அதிகரிக்கிறது",
    rainyWeatherBenefits:
      "செரிமான அமைப்பு மற்றும் நோயெதிர்ப்பு சக்தியை வலுப்படுத்துகிறது",
    balancedDietBenefits:
      "உகந்த ஆரோக்கியம் மற்றும் ஆற்றல் நிலைகளை பராமரிக்கிறது",
    universalHealthBenefits:
      "ஒட்டுமொத்த ஆரோக்கியத்தை ஆதரிக்கிறது மற்றும் நாள்பட்ட நோய்களை தடுக்கிறது",

    universalTips: [
      "தினமும் அனைத்து உணவு வகைகளையும் சேர்க்கவும்",
      "வண்ணமயமான காய்கறிகளை சாப்பிடவும்",
      "சுத்திகரிக்கப்பட்டதை விட முழு தானியங்களை தேர்வு செய்யவும்",
      "சர்க்கரை மற்றும் உப்பை கட்டுப்படுத்தவும்",
      "பருவகால உணவுகளை சாப்பிடவும்",
      "புதிய உணவை தயாரிக்கவும்",
    ],

    searchForCity: "தொடங்க ஒரு நகரத்தைத் தேடவும்",
    cityNotFound: "நகரம் கண்டுபிடிக்கப்படவில்லை",
    loadingWeather: "வானிலை தரவை ஏற்றுகிறது...",
    drinkWater: "சுத்தமான தண்ணீருடன் நாள் முழுவதும் நீரேற்றமாக இருங்கள்",

    commonCold: "சளி & காய்ச்சல்",
    heatStroke: "வெப்ப பக்षாঘாதம் & நீரிழப்பு",
    fungalInfections: "பூஞ்சை தொற்றுகள் & ஒவ்வாமை",
    waterborne: "நீர்வவ்வு நோய்கள் & தொற்றுகள்",
    respiratory: "சுவாசக்குழாய் பிரச்சனைகள் & ஆஸ்துமா",
    rheumatoid: "முடக்குவாதம் & கீல வலி",
    generalWellness: "பொதுவான நல்வாழ்க்கை",
    commonSymptoms: "பொதுவான அறிகுறிகள்",
    precautions: "முன்னெச்சரிக்கைகள்",
  },

  hi: {
    appTitle: "हेल्थवेदर",
    appDescription:
      "मौसम की स्थिति के आधार पर बीमारी के जोखिम और आहार मार्गदर्शन खोजें",
    searchPlaceholder: "शहर का नाम दर्ज करें...",
    searchButton: "खोजें",

    weatherHeading: "वर्तमान मौसम",
    diseaseRisksHeading: "स्वास्थ्य जोखिम",
    dietaryRecommendationsHeading: "आहार सिफारिशें",

    temperature: "तापमान",
    humidity: "आर्द्रता",
    windSpeed: "हवा की गति",
    condition: "स्थिति",
    feelsLike: "महसूस होता है",
    benefits: "लाभ",
    hydration: "जलयोजन",
    recommendedFoods: "अनुशंसित खाद्य पदार्थ",

    coldWeatherNutrition: "ठंड के मौसम के लिए पोषण",
    hotWeatherHydration: "गर्म मौसम के लिए जलयोजन",
    highHumiditySupport: "उच्च आर्द्रता के लिए सहायता",
    monsoonSeasonSupport: "मानसून के मौसम के लिए सहायता",
    balancedWellnessDiet: "संतुलित स्वास्थ्य आहार",
    universalHealthTips: "सार्वभौमिक स्वास्थ्य सुझाव",

    coldWeatherBenefits:
      "गर्मी प्रदान करता है, प्रतिरक्षा बढ़ाता है, और चयापचय बढ़ाता है",
    hotWeatherBenefits:
      "शरीर को ठंडा करता है, निर्जलीकरण रोकता है, पाचन में सहायता करता है",
    highHumidityBenefits:
      "फंगल संक्रमण और संक्रमणों के खिलाफ प्रतिरक्षा बढ़ाता है",
    rainyWeatherBenefits: "पाचन तंत्र और प्रतिरक्षा को मजबूत करता है",
    balancedDietBenefits: "इष्टतम स्वास्थ्य और ऊर्जा स्तर बनाए रखता है",
    universalHealthBenefits:
      "समग्र स्वास्थ्य का समर्थन करता है और पुरानी बीमारियों को रोकता है",

    universalTips: [
      "प्रतिदिन सभी खाद्य समूहों को शामिल करें",
      "रंगीन सब्जियां खाएं",
      "परिष्कृत की तुलना में साबुत अनाज चुनें",
      "चीनी और नमक सीमित करें",
      "मौसमी उपज खाएं",
      "ताजा भोजन तैयार करें",
    ],

    searchForCity: "शुरू करने के लिए किसी शहर को खोजें",
    cityNotFound: "शहर नहीं मिला",
    loadingWeather: "मौसम डेटा लोड हो रहा है...",
    drinkWater: "पूरे दिन साफ पानी से हाइड्रेटेड रहें",

    commonCold: "सामान्य सर्दी और फ्लू",
    heatStroke: "हीट स्ट्रोक और निर्जलीकरण",
    fungalInfections: "फंगल संक्रमण और एलर्जी",
    waterborne: "जलजनित रोग और संक्रमण",
    respiratory: "श्वसन संबंधी समस्याएं और अस्थमा",
    rheumatoid: "गठिया और जोड़ों का दर्द",
    generalWellness: "सामान्य स्वास्थ्य",
    commonSymptoms: "सामान्य लक्षण",
    precautions: "सावधानियां",
  },
};

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.en;
}
