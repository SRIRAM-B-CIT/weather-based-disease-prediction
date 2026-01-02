import type { WeatherData } from "@/app/page"
import { Card } from "@/components/ui/card"
import { Apple, Utensils } from "lucide-react"
import { getRegionalFoods } from "@/lib/local-foods-data"
import { useLanguage } from "@/contexts/language-context"

interface DietaryRecommendationsProps {
  weather: WeatherData
}

interface DietaryGuidance {
  category: string
  foods: string[]
  benefits: string
  hydration: string
}

export default function DietaryRecommendations({ weather }: DietaryRecommendationsProps) {
  const { t } = useLanguage()
  const getDietaryGuidance = (): DietaryGuidance[] => {
    const temp = weather.temperature
    const humidity = weather.humidity
    const condition = weather.condition.toLowerCase()
    const guidance: DietaryGuidance[] = []

    // Get regional foods based on country
    const regionalFoods = getRegionalFoods(weather.country)

    // Cold weather diet
    if (temp < 5) {
      guidance.push({
        category: t.coldWeatherNutrition,
        foods: regionalFoods.coldWeather,
        benefits: t.coldWeatherBenefits,
        hydration: `${t.hydration}: ${regionalFoods.beverages.hot.join(", ")}`,
      })
    }

    // Hot weather diet
    if (temp > 30) {
      guidance.push({
        category: t.hotWeatherHydration,
        foods: regionalFoods.hotWeather,
        benefits: t.hotWeatherBenefits,
        hydration: `${t.hydration}: ${regionalFoods.beverages.cold.join(", ")}`,
      })
    }

    // High humidity diet
    if (humidity > 70) {
      guidance.push({
        category: t.highHumiditySupport,
        foods: regionalFoods.highHumidity,
        benefits: t.highHumidityBenefits,
        hydration: `${t.hydration}: ${regionalFoods.beverages.cold.join(", ")}`,
      })
    }

    // Rainy weather diet
    if (condition.includes("rain")) {
      guidance.push({
        category: t.monsoonSeasonSupport,
        foods: regionalFoods.rainy,
        benefits: t.rainyWeatherBenefits,
        hydration: `${t.hydration}: ${regionalFoods.beverages.rainy.join(", ")}`,
      })
    }

    // Moderate weather - balanced diet
    if (guidance.length === 0) {
      guidance.push({
        category: t.balancedWellnessDiet,
        foods: regionalFoods.balanced,
        benefits: t.balancedDietBenefits,
        hydration: t.drinkWater,
      })
    }

    // General recommendations
    guidance.push({
      category: t.universalHealthTips,
      foods: t.universalTips,
      benefits: t.universalHealthBenefits,
      hydration: t.drinkWater,
    })

    return guidance
  }

  const guidance = getDietaryGuidance()

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Utensils className="w-6 h-6 text-green-600 dark:text-green-400" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.dietaryRecommendationsHeading}</h2>
      </div>

      <div className="space-y-4">
        {guidance.map((guide, idx) => (
          <Card
            key={idx}
            className="p-6 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <Apple className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{guide.category}</h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{t.recommendedFoods}:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {guide.foods.map((food, i) => (
                      <div
                        key={i}
                        className="bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300"
                      >
                        {food}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <h5 className="font-semibold text-blue-900 dark:text-blue-200 text-sm mb-1">{t.benefits}:</h5>
                    <p className="text-sm text-blue-800 dark:text-blue-300">{guide.benefits}</p>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                    <h5 className="font-semibold text-cyan-900 dark:text-cyan-200 text-sm mb-1">{t.hydration}:</h5>
                    <p className="text-sm text-cyan-800 dark:text-cyan-300">{guide.hydration}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
