import React, { useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sun, Moon, ShoppingCart, Plus } from 'lucide-react';
import type { DailyMenu } from '../../types';
import SimpleMenuCard from './SimpleMenuCard';
import ScrollGuide from './ScrollGuide';

interface WeeklyMenuGridProps {
  menu: DailyMenu[];
  days: string[];
  onDaySelect: (index: number) => void;
  onMealSelect: (type: '朝食' | '昼食' | '夕食') => void;
  onAddToList: (index: number) => void;
  onAddAllToList: () => void;
  isAddingToList: boolean;
}

const MEAL_ICONS = {
  朝食: Coffee,
  昼食: Sun,
  夕食: Moon,
};

export default function WeeklyMenuGrid({
  menu,
  days,
  onDaySelect,
  onMealSelect,
  onAddToList,
  onAddAllToList,
  isAddingToList
}: WeeklyMenuGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentDay, setCurrentDay] = useState(() => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1;
  });

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const timeColumnWidth = 80;
      const dayWidth = (container.scrollWidth - timeColumnWidth) / days.length;
      const scrollPosition = dayWidth * currentDay;
      container.scrollLeft = scrollPosition;
    }
  }, [currentDay, days.length]);

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] overflow-hidden relative">
      <ScrollGuide />

      <div 
        ref={scrollContainerRef} 
        className="overflow-x-auto custom-scrollbar relative"
      >
        <div className="min-w-[1400px] max-w-[1600px]">
          {/* ヘッダー行 */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-gray-200">
            <div className="p-3 bg-gray-50 border-r border-gray-200 sticky left-0 z-20">
              <span className="font-medium text-[16px] text-gray-600">時間帯</span>
            </div>
            {days.map((day, index) => (
              <div 
                key={index} 
                className={`p-4 bg-gray-50 border-r border-gray-200 flex items-center justify-between ${
                  currentDay === index ? 'bg-gradient-to-r from-orange-50 to-orange-100' : ''
                }`}
              >
                <span className="font-medium text-[18px] text-gray-900">{day}曜日</span>
                {currentDay === index && (
                  <span className="px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-sm">
                    Today
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* メニュー行 */}
          <div className="grid auto-rows-fr">
            {(['朝食', '昼食', '夕食'] as const).map((mealTime, timeIndex) => {
              const Icon = MEAL_ICONS[mealTime];
              return (
                <div 
                  key={mealTime} 
                  className={`
                    grid grid-cols-[80px_repeat(7,1fr)] border-b border-gray-200 last:border-b-0
                    ${timeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  `}
                >
                  <div className="p-4 bg-white border-r border-gray-200 sticky left-0 z-10 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <span className="font-medium text-[17px] text-gray-900">{mealTime}</span>
                    </div>
                  </div>
                  {menu.map((dayMenu, dayIndex) => (
                    <div 
                      key={dayIndex} 
                      className="p-3 border-r border-gray-200 h-full"
                    >
                      <div className="space-y-2 h-full">
                        {dayMenu[mealTime]?.map((meal, mealIndex) => (
                          <SimpleMenuCard 
                            key={mealIndex}
                            meal={meal} 
                            onClick={() => {
                              onDaySelect(dayIndex);
                              onMealSelect(mealTime);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* 買い物リストボタンの行 */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] border-t border-gray-200 bg-white">
            <div className="p-4 bg-white border-r border-gray-200 sticky left-0 z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
            {days.map((day, dayIndex) => (
              <div key={dayIndex} className="p-2 border-r border-gray-200">
                <motion.button
                  onClick={() => onAddToList(dayIndex)}
                  className="w-full h-14 flex items-center justify-center gap-1.5 bg-[#34c759] hover:bg-[#2eb350] rounded-xl transition-colors group"
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="h-6 w-6 text-white" />
                  <Plus className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}