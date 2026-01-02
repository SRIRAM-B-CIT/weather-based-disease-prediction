"use client"

import { useLanguage } from '@/contexts/language-context'
import { type Language } from '@/lib/translations'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Languages } from 'lucide-react'

const languageOptions = [
    { value: 'en' as Language, label: 'English', flag: '🇬🇧' },
    { value: 'ta' as Language, label: 'தமிழ்', flag: '🇮🇳' },
    { value: 'hi' as Language, label: 'हिंदी', flag: '🇮🇳' },
]

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className="w-[140px] bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600">
                    <SelectValue>
                        {languageOptions.find((opt) => opt.value === language)?.flag}{' '}
                        {languageOptions.find((opt) => opt.value === language)?.label}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {languageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            <span className="flex items-center gap-2">
                                <span>{option.flag}</span>
                                <span>{option.label}</span>
                            </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
