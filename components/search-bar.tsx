"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const { t } = useLanguage();
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        type="text"
        placeholder={t.searchPlaceholder}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={isLoading}
        className="flex-1 px-4 py-3 rounded-lg"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Search className="w-4 h-4" />
        {isLoading ? t.loadingWeather : t.searchButton}
      </Button>
    </form>
  );
}
