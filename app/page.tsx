"use client";

import { useState } from "react";
import SearchBar from "@/components/search-bar";
import WeatherDisplay from "@/components/weather-display";
import DiseaseRisks from "@/components/disease-risks";
import DietaryRecommendations from "@/components/dietary-recommendations";
import LanguageSelector from "@/components/language-selector";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  description: string;
}

export default function Home() {
  const { t } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );

      if (!response.ok) {
        setError(t.cityNotFound);
        setWeather(null);
        throw new Error(t.cityNotFound);
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-3">
            {t.appTitle}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t.appDescription}
          </p>
        </div>

        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        {/* Search Section */}
        <Card className="mb-8 p-8 shadow-lg">
          <SearchBar onSearch={handleSearch} isLoading={loading} />
        </Card>

        {/* Error Display */}
        {error && (
          <Card className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </Card>
        )}

        {/* Weather Data Display */}
        {weather && (
          <div className="space-y-8">
            <WeatherDisplay weather={weather} />
            <DiseaseRisks weather={weather} />
            <DietaryRecommendations weather={weather} />
          </div>
        )}

        {/* Empty State */}
        {!weather && !loading && !error && (
          <Card className="p-12 text-center bg-white/50 dark:bg-slate-800/50">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              {t.searchForCity}
            </p>
          </Card>
        )}
      </div>
    </main>
  );
}
