import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Utensils, Moon, ChevronRight, BookOpen } from 'lucide-react';
import type { MenuItem } from '../../types';

const MEAL_ICONS = {
  朝食: Coffee,
  昼食: Utensils,
  夕食: Moon,
};

const MEAL_GRADIENTS = {
  朝食: 'from-amber-400 to-orange-400',
  昼食: 'from-sky-500 to-blue-600',
  夕食: 'from-indigo-900 to-purple-800'
};

interface MealBlockProps {
  type: '朝食' | '昼食' | '夕食';
  meals: MenuItem[];
  onShowDetails: () => void;
}

export default function MealBlock({ type, meals, onShowDetails }: MealBlockProps) {
  const Icon = MEAL_ICONS[type];

  return (
    <div className={`
      w-full rounded-2xl overflow-hidden
      bg-gradient-to-br ${MEAL_GRADIENTS[type]}
      hover:shadow-lg transition-all duration-300
      group relative
    `}>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/25 backdrop-blur-sm">
            <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-xl font-medium text-white drop-shadow-sm">
              {type}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {meals.map(meal => (
                <div 
                  key={meal.name} 
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                >
                  <span className="text-sm text-white font-medium">
                    {meal.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <motion.button
            onClick={onShowDetails}
            className="flex items-center gap-3 text-white/90 group-hover:text-white transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-end gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm font-medium tracking-wide">
                レシピを見る
              </span>
            </div>
            <ChevronRight className="h-6 w-6 ml-1" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}