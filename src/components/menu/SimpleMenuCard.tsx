import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChefHat } from 'lucide-react';
import type { MenuItem } from '../../types';

interface SimpleMenuCardProps {
  meal: MenuItem;
  onClick: () => void;
}

function SimpleMenuCard({ meal, onClick }: SimpleMenuCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full p-3 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-200 text-left border border-gray-100"
      whileTap={{ scale: 0.98 }}
    >
      <h4 className="text-[17px] font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.75rem]">
        {meal.name}
      </h4>
      
      <div className="flex flex-wrap gap-1 mb-2">
        <span className="px-2 py-1 bg-[#34C759]/10 text-[#34C759] rounded-lg text-[15px] font-medium">
          P:{meal.pfc.protein}
        </span>
        <span className="px-2 py-1 bg-[#FF9500]/10 text-[#FF9500] rounded-lg text-[15px] font-medium">
          F:{meal.pfc.fat}
        </span>
        <span className="px-2 py-1 bg-[#5856D6]/10 text-[#5856D6] rounded-lg text-[15px] font-medium">
          C:{meal.pfc.carbs}
        </span>
      </div>

      <div className="flex items-center gap-2 text-[14px] text-gray-500">
        {meal.cookingTime && (
          <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
            <Clock className="w-3 h-3" />
            {meal.cookingTime}分
          </span>
        )}
        {meal.difficulty && (
          <span className={`
            flex items-center gap-1 px-2 py-1 rounded-lg
            ${meal.difficulty === 'easy' 
              ? 'bg-green-50 text-green-600' 
              : meal.difficulty === 'medium' 
                ? 'bg-orange-50 text-orange-600' 
                : 'bg-red-50 text-red-600'
            }`}
          >
            <ChefHat className="w-3 h-3" />
            {meal.difficulty === 'easy' ? '簡単' :
             meal.difficulty === 'medium' ? '普通' : '本格的'}
          </span>
        )}
      </div>
    </motion.button>
  );
}

// propsの比較関数
function areEqual(prevProps: SimpleMenuCardProps, nextProps: SimpleMenuCardProps) {
  return (
    prevProps.meal.name === nextProps.meal.name &&
    prevProps.meal.pfc.protein === nextProps.meal.pfc.protein &&
    prevProps.meal.pfc.fat === nextProps.meal.pfc.fat &&
    prevProps.meal.pfc.carbs === nextProps.meal.pfc.carbs &&
    prevProps.meal.cookingTime === nextProps.meal.cookingTime &&
    prevProps.meal.difficulty === nextProps.meal.difficulty
  );
}

// React.memoでコンポーネントをメモ化
export default React.memo(SimpleMenuCard, areEqual);