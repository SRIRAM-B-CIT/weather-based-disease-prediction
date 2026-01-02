import type { WeatherData } from "@/app/page";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface DiseaseRisksProps {
  weather: WeatherData;
}

interface DiseaseRisk {
  name: string;
  risk: "high" | "medium" | "low";
  description: string;
  symptoms: string[];
  precautions: string[];
}

export default function DiseaseRisks({ weather }: DiseaseRisksProps) {
  const { t } = useLanguage();
  const analyzeRisks = (): DiseaseRisk[] => {
    const risks: DiseaseRisk[] = [];
    const temp = weather.temperature;
    const humidity = weather.humidity;
    const condition = weather.condition.toLowerCase();

    // Cold-related diseases
    if (temp < 5) {
      risks.push({
        name: t.commonCold,
        risk: temp < -5 ? "high" : "medium",
        description: "Cold temperatures increase respiratory infections",
        symptoms: ["Runny nose", "Cough", "Sore throat", "Fever"],
        precautions: [
          "Wear warm layers",
          "Stay hydrated",
          "Get adequate rest",
          "Avoid sudden temperature changes",
        ],
      });
    }

    // Heat-related diseases
    if (temp > 35) {
      risks.push({
        name: t.heatStroke,
        risk: "high",
        description: "Extremely hot weather increases heat-related illnesses",
        symptoms: ["Dizziness", "Headache", "Rapid heartbeat", "Confusion"],
        precautions: [
          "Drink plenty of water",
          "Limit outdoor activities",
          "Wear light-colored clothing",
          "Use sunscreen",
        ],
      });
    }

    // High humidity diseases
    if (humidity > 70 && temp > 20) {
      risks.push({
        name: t.fungalInfections,
        risk: humidity > 80 ? "high" : "medium",
        description:
          "High humidity and warm temperatures promote fungal growth",
        symptoms: ["Skin rashes", "Itching", "Respiratory issues", "Sneezing"],
        precautions: [
          "Keep skin dry",
          "Use antifungal powder",
          "Wear breathable clothing",
          "Avoid damp areas",
        ],
      });
    }

    // Rainy weather diseases
    if (condition.includes("rain")) {
      risks.push({
        name: t.waterborne,
        risk: "medium",
        description: "Rainy weather can lead to waterborne illnesses",
        symptoms: ["Stomach pain", "Diarrhea", "Nausea", "Fever"],
        precautions: [
          "Drink boiled water",
          "Practice good hygiene",
          "Avoid contaminated water",
          "Wash hands frequently",
        ],
      });
    }

    // Cloudy/Misty weather
    if (condition.includes("mist") || condition.includes("fog")) {
      risks.push({
        name: t.respiratory,
        risk: "medium",
        description: "Poor visibility weather affects respiratory health",
        symptoms: [
          "Difficulty breathing",
          "Chest tightness",
          "Cough",
          "Wheezing",
        ],
        precautions: [
          "Use air purifier",
          "Keep windows closed",
          "Avoid outdoor exercise",
          "Use prescribed inhalers",
        ],
      });
    }

    // Low temperature with high humidity
    if (temp < 10 && humidity > 60) {
      risks.push({
        name: t.rheumatoid,
        risk: "medium",
        description: "Cold and damp conditions aggravate joint problems",
        symptoms: ["Joint pain", "Stiffness", "Swelling", "Limited mobility"],
        precautions: [
          "Keep joints warm",
          "Do light stretching",
          "Take warm baths",
          "Consume anti-inflammatory foods",
        ],
      });
    }

    // Moderate conditions - general wellness
    if (risks.length === 0) {
      risks.push({
        name: t.generalWellness,
        risk: "low",
        description: "Weather conditions are favorable for good health",
        symptoms: [],
        precautions: [
          "Maintain regular exercise",
          "Eat balanced diet",
          "Stay hydrated",
          "Get adequate sleep",
        ],
      });
    }

    return risks;
  };

  const risks = analyzeRisks();

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      case "medium":
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";
      default:
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
    }
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-500 text-white";
      case "medium":
        return "bg-yellow-500 text-white";
      default:
        return "bg-green-500 text-white";
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t.diseaseRisksHeading}
        </h2>
      </div>

      <div className="space-y-4">
        {risks.map((disease, idx) => (
          <Card
            key={idx}
            className={`p-6 border-2 ${getRiskColor(disease.risk)}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {disease.name}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {disease.description}
                </p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ml-4 ${getRiskBadgeColor(
                  disease.risk
                )}`}
              >
                {disease.risk.toUpperCase()} RISK
              </span>
            </div>

            {disease.symptoms.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t.commonSymptoms}:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {disease.symptoms.map((symptom, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      • {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                {t.precautions}:
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {disease.precautions.map((precaution, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 dark:text-slate-300"
                  >
                    ✓ {precaution}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
