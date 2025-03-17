import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { MenuItem } from '../../types';
import RecipeStepGuide from './RecipeStepGuide';

interface MealDetailsProps {
  type: '朝食' | '昼食' | '夕食';
  meals: MenuItem[];
  onClose: () => void;
}

export default function MealDetails({ type, meals, onClose }: MealDetailsProps) {
  return (
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
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">{type}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {meals.map((meal, index) => (
              <div key={`${meal.name}-${index}`} className="space-y-4">
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
                <RecipeStepGuide
                  meal={meal}
                  onClose={onClose}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}