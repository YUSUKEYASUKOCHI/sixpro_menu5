import React, { useState, useMemo } from 'react';
import { Heart, Search, ChevronRight, Coffee, Sun, Moon, Grid } from 'lucide-react';
import { getFavoriteMeals } from '../utils/storage';
import { createSearchPattern } from '../utils/textUtils';
import SimpleMenuCard from './menu/SimpleMenuCard';
import { motion, AnimatePresence } from 'framer-motion';
import MealDetails from './menu/MealDetails';

const MEAL_ICONS = {
  '全て': Grid,
  '朝食': Coffee,
  '昼食': Sun,
  '夕食': Moon
};

const MEAL_TABS = [
  {
    id: '全て' as const,
    icon: MEAL_ICONS['全て'],
    gradient: 'from-gray-400 to-gray-500',
    label: '全て'
  },
  { 
    id: '朝食' as const,
    icon: MEAL_ICONS['朝食'],
    gradient: 'from-orange-400 to-amber-500',
    label: '朝食'
  },
  {
    id: '昼食' as const,
    icon: MEAL_ICONS['昼食'],
    gradient: 'from-sky-400 to-blue-500',
    label: '昼食'
  },
  {
    id: '夕食' as const,
    icon: MEAL_ICONS['夕食'],
    gradient: 'from-indigo-400 to-purple-500',
    label: '夕食'
  }
];

export default function FavoritesTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<{ type: '朝食' | '昼食' | '夕食'; meals: MenuItem[] } | null>(null);
  const [selectedTab, setSelectedTab] = useState<'全て' | '朝食' | '昼食' | '夕食'>('全て');
  const favorites = getFavoriteMeals();

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const searchPatterns = createSearchPattern(searchQuery);
    const results = new Set<string>();

    favorites.forEach(favorite => {
      if (searchPatterns.some(pattern => 
        favorite.meal.name.toLowerCase().includes(pattern)
      )) {
        results.add(favorite.meal.name);
      }

      favorite.meal.ingredients?.forEach(ingredient => {
        if (searchPatterns.some(pattern => 
          ingredient.name.toLowerCase().includes(pattern)
        )) {
          results.add(ingredient.name);
        }
      });
    });

    return Array.from(results).slice(0, 5);
  }, [favorites, searchQuery]);

  const filteredFavorites = useMemo(() => {
    let filtered = favorites;

    if (searchQuery.trim()) {
      const searchPatterns = createSearchPattern(searchQuery);
      filtered = filtered.filter(favorite => {
        const searchText = [
          favorite.meal.name,
          ...(favorite.meal.ingredients?.map(i => i.name) || []),
        ].join(' ').toLowerCase();

        return searchPatterns.some(pattern => searchText.includes(pattern));
      });
    }

    if (selectedTab !== '全て') {
      filtered = filtered.filter(favorite => 
        favorite.meal.timing === selectedTab || 
        favorite.context?.timing === selectedTab
      );
    }

    return filtered;
  }, [favorites, searchQuery, selectedTab]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleMealSelect = (meal: MenuItem) => {
    const timing = meal.timing || '朝食';
    setSelectedMeal({
      type: timing,
      meals: [meal]
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold text-gray-900">お気に入りメニュー</h2>
      </div>

      {favorites.length > 0 && (
        <>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 200);
              }}
              placeholder="メニューやレシピを検索..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-2 border-gray-100 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-gray-900">{suggestion}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {MEAL_TABS.map(tab => {
              const Icon = tab.icon;
              const isSelected = selectedTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="selectedTab"
                      className={`absolute inset-0 bg-gradient-to-br ${tab.gradient} rounded-xl`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                    <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                      {tab.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </>
      )}

      <AnimatePresence mode="wait">
        {favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-600">お気に入りに登録されたメニューはありません</p>
            <p className="text-gray-500 mt-2">
              メニューのハートアイコンをタップして、お気に入りに追加できます
            </p>
          </motion.div>
        ) : filteredFavorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-600">検索条件に一致するメニューが見つかりませんでした</p>
            <p className="text-gray-500 mt-2">
              別のキーワードで検索してみてください
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredFavorites.map(favorite => (
              <motion.div
                key={favorite.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <SimpleMenuCard
                  meal={favorite.meal}
                  onClick={() => handleMealSelect(favorite.meal)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {selectedMeal && (
        <MealDetails
          type={selectedMeal.type}
          meals={selectedMeal.meals}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
}