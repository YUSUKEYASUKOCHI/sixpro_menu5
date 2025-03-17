import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import MealBlock from './MealBlock';
import type { DailyMenu } from '../../types';

interface DayMenuProps {
  menu: DailyMenu;
  day: string;
  isAddingToList: boolean;
  onAddToList: () => void;
  onMealSelect: (type: '朝食' | '昼食' | '夕食') => void;
}

export default function DayMenu({ 
  menu, 
  day, 
  isAddingToList, 
  onAddToList, 
  onMealSelect 
}: DayMenuProps) {
  return (
    <div className="space-y-6">
      <motion.button
        onClick={onAddToList}
        disabled={isAddingToList}
        className="w-full flex items-center justify-center gap-2 p-5 bg-[#34c759] text-white font-medium rounded-xl hover:bg-[#2eb350] transition-colors"
        whileTap={{ scale: 0.98 }}
      >
        <ShoppingCart className="h-6 w-6" />
        <span className="font-medium text-lg">
          {day}曜日のメニューを買い物リストに追加
        </span>
      </motion.button>

      <div className="space-y-4">
        <MealBlock
          type="朝食"
          meals={menu.朝食}
          onShowDetails={() => onMealSelect('朝食')}
        />
        <MealBlock
          type="昼食"
          meals={menu.昼食}
          onShowDetails={() => onMealSelect('昼食')}
        />
        <MealBlock
          type="夕食"
          meals={menu.夕食}
          onShowDetails={() => onMealSelect('夕食')}
        />
      </div>
    </div>
  );
}