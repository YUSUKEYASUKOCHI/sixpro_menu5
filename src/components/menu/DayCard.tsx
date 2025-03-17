import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingCart } from 'lucide-react';
import type { DailyMenu } from '../../types';
import MealSummary from './MealSummary';

interface DayCardProps {
  day: string;
  menu: DailyMenu;
  isToday: boolean;
  onAddToList: () => void;
  onMealSelect: (type: '朝食' | '昼食' | '夕食') => void;
}

export default function DayCard({ 
  day, 
  menu, 
  isToday,
  onAddToList,
  onMealSelect
}: DayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        bg-white rounded-2xl shadow-sm overflow-hidden
        ${isToday ? 'ring-2 ring-[#34C759]' : ''}
      `}
    >
      <div className="p-6 space-y-6">
        {/* ヘッダー */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              ${isToday ? 'bg-[#34C759]/10' : 'bg-gray-50'}
            `}>
              <Calendar 
                className={`h-6 w-6 ${isToday ? 'text-[#34C759]' : 'text-gray-600'}`}
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {day}曜日
              </h2>
              {isToday && (
                <span className="text-sm text-[#34C759] font-medium">
                  今日のメニュー
                </span>
              )}
            </div>
          </div>
        </div>

        {/* メニューリスト */}
        <div className="space-y-4">
          <MealSummary
            title="朝食"
            meals={menu.朝食}
            onClick={() => onMealSelect('朝食')}
          />
          <MealSummary
            title="昼食"
            meals={menu.昼食}
            onClick={() => onMealSelect('昼食')}
          />
          <MealSummary
            title="夕食"
            meals={menu.夕食}
            onClick={() => onMealSelect('夕食')}
          />
        </div>

        {/* 買い物リスト追加ボタン */}
        <motion.button
          onClick={onAddToList}
          className="w-full flex items-center justify-center gap-2 p-4 bg-[#34C759] text-white font-medium rounded-xl hover:bg-[#2eb350] transition-colors"
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart className="h-5 w-5" />
          <span>この日のメニューを買い物リストに追加</span>
        </motion.button>
      </div>
    </motion.div>
  );
}