import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ChefHat, Users, ArrowRight, Sparkles, ChevronLeft, Heart } from 'lucide-react';
import type { MenuItem } from '../../types';
import { toggleFavoriteMeal, isMealFavorited } from '../../utils/storage';
import StepByStepGuide from './StepByStepGuide';

interface RecipeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  meal: MenuItem;
  displayMode: 'modal' | 'fullscreen';
}

export default function RecipeDetailsModal({ isOpen, onClose, meal, displayMode }: RecipeDetailsModalProps) {
  const [isFavorite, setIsFavorite] = useState(() => isMealFavorited(meal.name));
  const [showCookingGuide, setShowCookingGuide] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleFavoriteToggle = () => {
    const isNowFavorite = toggleFavoriteMeal(meal);
    setIsFavorite(isNowFavorite);
  };

  const handleStartCooking = () => {
    setShowCookingGuide(true);
  };

  const handleCloseCookingGuide = () => {
    setShowCookingGuide(false);
    setCurrentStep(0);
  };

  const content = (
    <div className={`relative ${displayMode === 'fullscreen' ? 'min-h-screen bg-gray-50' : ''}`}>
      {displayMode === 'fullscreen' ? (
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="px-4 py-3 flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 flex-1 truncate">
              {meal.name}
            </h3>
            <button
              onClick={handleFavoriteToggle}
              className="p-2"
            >
              <Heart 
                className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      )}

      <div className={`${displayMode === 'fullscreen' ? 'p-4' : 'px-6 py-8'} space-y-6 max-w-2xl mx-auto`}>
        {displayMode !== 'fullscreen' && (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2 pr-8">
              {meal.name}
            </h3>
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
          </>
        )}

        <div className="flex flex-wrap gap-3 mb-4">
          {meal.difficulty && (
            <div className="flex items-center gap-2">
              <ChefHat className={`h-4 w-4 ${
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
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-[14px] text-gray-600">
                {meal.cookingTime}分
              </span>
            </div>
          )}
          {meal.servings && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-[14px] text-gray-600">
                {meal.servings}人分
              </span>
            </div>
          )}
        </div>

        {meal.ingredients && (
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-gray-900">材料</h4>
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
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] text-gray-900">
                      {ingredient.name}
                    </span>
                    <span className="text-[16px] text-gray-500">
                      {ingredient.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {meal.instructions && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900">作り方の概要</h4>
              <button
                onClick={handleStartCooking}
                className="flex items-center gap-2 px-4 py-2 text-[#007AFF] hover:bg-[#007AFF]/10 rounded-lg transition-colors"
              >
                <span className="text-sm">今から調理する</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <ol className="space-y-3">
              {meal.instructions.map((step, idx) => (
                <li 
                  key={idx}
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
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {displayMode === 'modal' ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                onClick={onClose}
              />
              
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-x-0 bottom-0 z-[70] bg-white rounded-t-[32px] shadow-xl max-h-[90vh] overflow-y-auto"
              >
                {content}
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[70] bg-white overflow-y-auto"
            >
              {content}
            </motion.div>
          )}

          <AnimatePresence>
            {showCookingGuide && (
              <StepByStepGuide
                steps={meal.detailedInstructions || meal.instructions || []}
                currentStep={currentStep}
                onStepComplete={setCurrentStep}
                cookingTime={meal.cookingTime}
                onClose={handleCloseCookingGuide}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}