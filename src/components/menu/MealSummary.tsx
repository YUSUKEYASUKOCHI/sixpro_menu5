import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { MenuItem } from '../../types';

interface MealSummaryProps {
  title: string;
  meals: MenuItem[];
  onClick: () => void;
}

export default function MealSummary({ title, meals, onClick }: MealSummaryProps) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-1">
          {meals.map((meal, index) => (
            <div key={index} className="text-gray-600">
              {meal.name}
            </div>
          ))}
        </div>
      </div>
    </motion.button>
  );
}