import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, ChefHat, Check, Sparkles, Heart } from 'lucide-react';
import type { MenuItem } from '../../types';
import IngredientDetail from './IngredientDetail';
import { toggleFavoriteMeal, isMealFavorited } from '../../utils/storage';

interface RecipeStepGuideProps {
  meal: MenuItem;
  onClose: () => void;
}

export default function RecipeStepGuide({ meal, onClose }: RecipeStepGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [isFavorite, setIsFavorite] = useState(() => isMealFavorited(meal.name));
  const steps = meal.detailedInstructions || meal.instructions || [];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFavoriteToggle = () => {
    const isNowFavorite = toggleFavoriteMeal(meal);
    setIsFavorite(isNowFavorite);
  };

  return (
    <div className="space-y-6">
      {/* レシピ名とお気に入りボタン */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">{meal.name}</h2>
        <button
          onClick={handleFavoriteToggle}
          className="p-2"
        >
          <Heart 
            className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
            strokeWidth={2}
          />
        </button>
      </div>

      {/* 材料セクション */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">材料</h3>
          {meal.adjustedPortions && (
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#007AFF]/10 to-[#34C759]/10 rounded-full">
              <Sparkles className="w-4 h-4 text-[#007AFF]" strokeWidth={1.5} />
              <span className="text-sm font-medium bg-gradient-to-r from-[#007AFF] to-[#34C759] text-transparent bg-clip-text">
                あなた専用に最適化済み
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {meal.ingredients?.map((ingredient, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedIngredient(ingredient)}
              className="p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[16px] text-gray-900">
                  {ingredient.name}
                </span>
                <span className="text-[16px] text-gray-500">
                  {ingredient.amount}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* 調理手順セクション */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">調理手順</h3>
          <div className="flex items-center gap-2">
            {meal.cookingTime && (
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{meal.cookingTime}分</span>
              </div>
            )}
            {meal.difficulty && (
              <div className={`
                flex items-center gap-1 px-2 py-1 rounded-lg text-sm
                ${meal.difficulty === 'easy' 
                  ? 'bg-green-50 text-green-600' 
                  : meal.difficulty === 'medium' 
                    ? 'bg-orange-50 text-orange-600' 
                    : 'bg-red-50 text-red-600'
                }`}
              >
                <ChefHat className="h-4 w-4" />
                <span>
                  {meal.difficulty === 'easy' ? '簡単' :
                   meal.difficulty === 'medium' ? '普通' : '本格的'}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`
                w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all
                ${currentStep === index 
                  ? 'bg-blue-50 border-2 border-blue-100' 
                  : index < currentStep
                    ? 'bg-green-50 border-2 border-green-100'
                    : 'bg-gray-50 border-2 border-gray-100'
                }
              `}
            >
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                ${currentStep === index 
                  ? 'bg-blue-100' 
                  : index < currentStep
                    ? 'bg-green-100'
                    : 'bg-gray-200'
                }
              `}>
                {index < currentStep ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : currentStep === index ? (
                  <ChefHat className="w-5 h-5 text-blue-600" />
                ) : (
                  <span className="text-gray-600 font-medium">{index + 1}</span>
                )}
              </div>

              <div className="flex-1">
                <p className={`text-base ${
                  currentStep === index 
                    ? 'text-blue-800' 
                    : index < currentStep
                      ? 'text-green-800'
                      : 'text-gray-600'
                }`}>
                  {step}
                </p>
                {currentStep === index && (
                  <div className="mt-2 text-sm text-blue-600">
                    このステップを実行中です。完了したら次のステップに進んでください。
                  </div>
                )}
              </div>

              {currentStep === index && (
                <ChevronRight className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>
          ))}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`
              p-3 rounded-lg transition-colors
              ${currentStep === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
              }
            `}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-sm text-gray-500">
            ステップ {currentStep + 1} / {steps.length}
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className={`
              p-3 rounded-lg transition-colors
              ${currentStep === steps.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50'
              }
            `}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 食材詳細モーダル */}
      <IngredientDetail
        isOpen={!!selectedIngredient}
        onClose={() => setSelectedIngredient(null)}
        ingredient={selectedIngredient}
      />
    </div>
  );
}