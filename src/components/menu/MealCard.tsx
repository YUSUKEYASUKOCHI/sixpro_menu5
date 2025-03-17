import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { MenuItem } from '../../types';
import { toggleFavoriteMeal, isMealFavorited } from '../../utils/storage';
import IngredientDetail from './IngredientDetail';
import StepByStepGuide from './StepByStepGuide';
import { Sparkles } from 'lucide-react';

interface MealCardProps {
  meal: MenuItem;
  expanded: boolean;
  context?: {
    pattern: string;
    day: string;
    timing: string;
  };
}

export default function MealCard({ meal, expanded, context }: MealCardProps) {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [showStepGuide, setShowStepGuide] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFavorite, setIsFavorite] = useState(() => isMealFavorited(meal.name));

  const handleFavoriteToggle = () => {
    const isNowFavorite = toggleFavoriteMeal(meal, context);
    setIsFavorite(isNowFavorite);
  };

  return (
    <motion.div 
      className="relative p-4 rounded-xl bg-gray-50 space-y-4 transition-all duration-200 hover:bg-gray-100"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: expanded ? 1 : 1.02 }}
      whileTap={{ scale: expanded ? 1 : 0.98 }}
    >
      {/* Main content */}
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h4 className="text-[16px] leading-relaxed font-medium text-gray-900">
            {meal.name}
          </h4>
          <button
            onClick={handleFavoriteToggle}
            className="p-2 transition-colors"
          >
            <Icons.Heart 
              className={`h-5 w-5 transition-colors ${
                isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-gray-600'
              }`}
            />
          </button>
        </div>

        {/* Meal info */}
        {(meal.difficulty || meal.cookingTime || meal.servings) && (
          <div className="flex flex-wrap gap-4">
            {meal.difficulty && (
              <div className="flex items-center gap-2">
                <Icons.ChefHat className={`h-4 w-4 ${
                  meal.difficulty === 'easy' ? 'text-green-600' :
                  meal.difficulty === 'medium' ? 'text-orange-600' :
                  'text-red-600'
                }`} />
                <span className={`text-[14px] ${
                  meal.difficulty === 'easy' ? 'text-green-600' :
                  meal.difficulty === 'medium' ? 'text-orange-600' :
                  'text-red-600'
                }`}>
                  {meal.difficulty === 'easy' ? '簡単' :
                   meal.difficulty === 'medium' ? '普通' : '本格的'}
                </span>
              </div>
            )}
            {meal.cookingTime && (
              <div className="flex items-center gap-2">
                <Icons.Clock className="h-4 w-4 text-gray-600" />
                <span className="text-[14px] text-gray-600">{meal.cookingTime}分</span>
              </div>
            )}
            {meal.servings && (
              <div className="flex items-center gap-2">
                <Icons.Users className="h-4 w-4 text-gray-600" />
                <span className="text-[14px] text-gray-600">{meal.servings}人分</span>
              </div>
            )}
          </div>
        )}

        {/* PFC values */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-2 bg-[#34C759]/10 text-[#34C759] rounded-lg text-[16px] font-medium">
            P: {meal.pfc.protein}g
          </span>
          <span className="px-3 py-2 bg-[#FF9500]/10 text-[#FF9500] rounded-lg text-[16px] font-medium">
            F: {meal.pfc.fat}g
          </span>
          <span className="px-3 py-2 bg-[#5856D6]/10 text-[#5856D6] rounded-lg text-[16px] font-medium">
            C: {meal.pfc.carbs}g
          </span>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && meal.ingredients && (
        <div className="space-y-6 pt-4 border-t border-gray-200">
          {/* Ingredients */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-[16px] font-medium text-gray-900">材料</h5>
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
              {meal.ingredients.map((ingredient, idx) => (
                <motion.button
                  key={`${ingredient.name}-${idx}`}
                  onClick={() => setSelectedIngredient(ingredient)}
                  className="text-left p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] text-gray-900">{ingredient.name}</span>
                    <span className="text-[16px] text-gray-500">{ingredient.amount}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          {meal.instructions && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h5 className="text-[16px] font-medium text-gray-900">作り方の概要</h5>
                <button
                  onClick={() => setShowStepGuide(true)}
                  className="flex items-center gap-2 px-4 py-2 text-[#007AFF] hover:bg-[#007AFF]/10 rounded-lg"
                >
                  <span className="text-sm">今から調理する</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <ol className="space-y-3">
                {meal.instructions.map((step, idx) => (
                  <li 
                    key={`${step}-${idx}`}
                    className="flex gap-3 text-[16px] leading-relaxed text-gray-600"
                  >
                    <span className="font-medium text-gray-900 flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Modals */}
      <IngredientDetail
        isOpen={!!selectedIngredient}
        onClose={() => setSelectedIngredient(null)}
        ingredient={selectedIngredient}
      />

      {showStepGuide && (
        <StepByStepGuide
          steps={meal.detailedInstructions || meal.instructions || []}
          currentStep={currentStep}
          onStepComplete={setCurrentStep}
          cookingTime={meal.cookingTime}
          onClose={() => {
            setShowStepGuide(false);
            setCurrentStep(0);
          }}
        />
      )}
    </motion.div>
  );
}