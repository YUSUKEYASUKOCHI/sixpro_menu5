import React, { useState } from 'react';
import { Settings, Beef, Droplet, Cookie, ShoppingCart, ChefHat, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import type { UserData, UserProfileFormData } from '../types';
import { PATTERN_NAMES, PATTERN_DESCRIPTIONS } from '../data/menu';
import { saveMenuType } from '../utils/storage';
import UserProfileForm from './profile/UserProfileForm';

interface UserProfilePanelProps {
  onSubmit: (data: UserData | UserProfileFormData) => void;
  initialData: UserData | null;
  selectedPattern: number;
  onPatternSelect: (index: number) => void;
}

export default function UserProfilePanel({ 
  onSubmit, 
  initialData,
  selectedPattern,
  onPatternSelect
}: UserProfilePanelProps) {
  const [showProfileForm, setShowProfileForm] = useState(false);

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
    <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] p-8">
      <div className="space-y-8">
        {/* ヘッダー */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-gray-900">あなたの設定</h2>
          </div>

          {/* 現在の栄養設定 */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-[#FF3B30]">
                  {initialData?.calories || '---'}
                </span>
                <span className="text-lg text-gray-600">kcal</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium text-[#34C759]">
                  P:{initialData?.protein || '---'}
                </span>
                <span className="text-lg font-medium text-[#FF9500]">
                  F:{initialData?.fat || '---'}
                </span>
                <span className="text-lg font-medium text-[#5856D6]">
                  C:{initialData?.carbs || '---'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowProfileForm(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>プロフィール設定を変更する</span>
            </button>
          </div>
        </div>

        {/* メニュータイプ設定 */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">メニュータイプ</h3>
          <div className="grid grid-cols-1 gap-3">
            {PATTERN_NAMES.map((name, index) => {
              const { Icon, iconColor, gradient } = menuTypes[index];
              const isSelected = selectedPattern === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    onPatternSelect(index);
                    saveMenuType(index);
                  }}
                  className={`
                    w-full p-4 rounded-xl transition-all duration-300
                    ${isSelected 
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-white border-2 border-gray-100 hover:border-gray-200'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center
                      ${isSelected 
                        ? `bg-gradient-to-br ${gradient}` 
                        : 'bg-gray-50'
                      }
                    `}>
                      <Icon 
                        className={`h-8 w-8 ${isSelected ? 'text-white' : iconColor}`} 
                        strokeWidth={2}
                      />
                    </div>

                    <div className="flex-1 text-left">
                      <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                        {name}
                      </h3>
                      <p className={`mt-1 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                        {PATTERN_DESCRIPTIONS[index]}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* プロフィール設定モーダル */}
      {showProfileForm && (
        <UserProfileForm 
          onSubmit={(data) => {
            onSubmit(data);
            setShowProfileForm(false);
          }}
          initialData={null}
          onClose={() => setShowProfileForm(false)}
        />
      )}
    </div>
  );
}