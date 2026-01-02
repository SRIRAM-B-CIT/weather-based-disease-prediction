import type { WeatherData } from "@/app/page";
import { Card } from "@/components/ui/card";
import { Cloud, Droplets, Wind, Gauge } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface WeatherDisplayProps {
  weather: WeatherData;
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  const { t } = useLanguage();
  const getWeatherIcon = (condition: string) => {
    const lower = condition.toLowerCase();
    if (lower.includes("rain")) return "🌧️";
    if (lower.includes("cloud")) return "☁️";
    if (lower.includes("clear") || lower.includes("sunny")) return "☀️";
    if (lower.includes("snow")) return "❄️";
    if (lower.includes("thunderstorm")) return "⛈️";
    if (lower.includes("mist") || lower.includes("fog")) return "🌫️";
    return "🌤️";
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-4xl font-bold mb-2">{weather.city}</h2>
          <p className="text-blue-100 text-lg">{weather.description}</p>
        </div>
        <div className="text-7xl">{getWeatherIcon(weather.condition)}</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5" />
            <span className="text-sm font-semibold text-blue-100">
              {t.temperature}
            </span>
          </div>
          <p className="text-3xl font-bold">
            {Math.round(weather.temperature)}°C
          </p>
          <p className="text-sm text-blue-100">
            {t.feelsLike} {Math.round(weather.feelsLike)}°C
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-5 h-5" />
            <span className="text-sm font-semibold text-blue-100">
              {t.humidity}
            </span>
          </div>
          <p className="text-3xl font-bold">{weather.humidity}%</p>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-5 h-5" />
            <span className="text-sm font-semibold text-blue-100">
              {t.windSpeed}
            </span>
          </div>
          <p className="text-3xl font-bold">
            {Math.round(weather.windSpeed)} m/s
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-5 h-5" />
            <span className="text-sm font-semibold text-blue-100">
              {t.condition}
            </span>
          </div>
          <p className="text-xl font-bold">{weather.condition}</p>
        </div>
      </div>
    </Card>
  );
}
