import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ChefHat, Store, Settings, ChevronDown, Beef, Droplet, Cookie } from 'lucide-react';
import type { UserData } from '../../types';
import { PATTERN_NAMES, PATTERN_DESCRIPTIONS } from '../../data/menu';
import { saveMenuType } from '../../utils/storage';

interface MenuHeaderProps {
  userData: UserData | null;
  selectedPattern: number;
  onPatternSelect: (index: number) => void;
}

export default function MenuHeader({ 
  userData, 
  selectedPattern, 
  onPatternSelect 
}: MenuHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuTypes = [
    {
      Icon: ShoppingCart,
      iconColor: 'text-[#34C759]',
      gradient: 'from-[#34C759] to-[#32ADE6]'
    },
    {
      Icon: ChefHat,
      iconColor: 'text-[#FF9500]',
      gradient: 'from-[#FF9500] to-[#FF3B30]'
    },
    {
      Icon: Store,
      iconColor: 'text-[#5856D6]',
      gradient: 'from-[#5856D6] to-[#007AFF]'
    }
  ];

  const { Icon: SelectedIcon, gradient } = menuTypes[selectedPattern];

  return (
    <div className="bg-white rounded-2xl shadow-sm mb-4">
      {/* ヘッダー部分 */}
      <div className="flex items-center gap-3 px-4 pt-2 pb-3">
        <Settings className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
        <h2 className="text-xl font-bold text-gray-900">あなたの設定</h2>
      </div>

      {/* 現在の設定表示 */}
      <div className="px-4 pb-4 space-y-4">
        {/* カロリー表示 */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#FF3B30]/10 flex items-center justify-center">
            <Beef className="h-5 w-5 text-[#FF3B30]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#FF3B30]">
              {userData?.calories || '---'}
            </span>
            <span className="text-lg text-gray-600">kcal</span>
          </div>
        </div>

        {/* PFC表示 */}
        <div className="grid grid-cols-3 gap-3">
          {/* タンパク質 */}
          <div className="bg-[#34C759]/10 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Beef className="h-4 w-4 text-[#34C759]" />
              <span className="text-sm font-medium text-[#34C759]">タンパク質</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-[#34C759]">
                {userData?.protein || '---'}
              </span>
              <span className="text-sm text-gray-600">g</span>
            </div>
          </div>

          {/* 脂質 */}
          <div className="bg-[#FF9500]/10 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Droplet className="h-4 w-4 text-[#FF9500]" />
              <span className="text-sm font-medium text-[#FF9500]">脂質</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-[#FF9500]">
                {userData?.fat || '---'}
              </span>
              <span className="text-sm text-gray-600">g</span>
            </div>
          </div>

          {/* 糖質 */}
          <div className="bg-[#5856D6]/10 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Cookie className="h-4 w-4 text-[#5856D6]" />
              <span className="text-sm font-medium text-[#5856D6]">糖質</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-[#5856D6]">
                {userData?.carbs || '---'}
              </span>
              <span className="text-sm text-gray-600">g</span>
            </div>
          </div>
        </div>

        {/* メニュータイプ表示 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <SelectedIcon className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-medium">
              {PATTERN_NAMES[selectedPattern]}
            </span>
          </div>

          {/* メニュータイプ切り替えボタン */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-4 py-2 text-[#007AFF] hover:bg-blue-50 rounded-lg transition-colors"
          >
            <span className="text-sm">メニュータイプを切り替える</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>
        </div>
      </div>

      {/* メニュータイプ選択アコーディオン */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {PATTERN_NAMES.map((name, index) => {
                const { Icon, iconColor, gradient } = menuTypes[index];
                const isSelected = selectedPattern === index;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => {
                      onPatternSelect(index);
                      saveMenuType(index);
                      setIsExpanded(false);
                    }}
                    className={`
                      w-full p-3 rounded-xl transition-all duration-300
                      ${isSelected 
                        ? 'bg-gray-900 text-white shadow-lg' 
                        : 'bg-white border-2 border-gray-100 hover:border-gray-200'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center
                        ${isSelected 
                          ? `bg-gradient-to-br ${gradient}` 
                          : 'bg-gray-50'
                        }
                      `}>
                        <Icon 
                          className={`h-5 w-5 ${isSelected ? 'text-white' : iconColor}`} 
                          strokeWidth={2}
                        />
                      </div>

                      <div className="flex-1 text-left">
                        <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                          {name}
                        </h3>
                        <p className={`text-sm mt-0.5 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                          {PATTERN_DESCRIPTIONS[index]}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}