import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ChefHat, Store } from 'lucide-react';
import { saveMenuType } from '../../utils/storage';

interface MenuTypeSelectorProps {
  selectedPattern: number;
  onPatternSelect: (index: number) => void;
  patterns: string[];
  descriptions: string[];
}

export default function MenuTypeSelector({ 
  selectedPattern, 
  onPatternSelect, 
  patterns, 
  descriptions 
}: MenuTypeSelectorProps) {
  const handlePatternSelect = (index: number) => {
    onPatternSelect(index);
    saveMenuType(index);
  };

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

  return (
    <div className="space-y-4">
      {patterns.map((name, index) => {
        const { Icon, iconColor, gradient } = menuTypes[index];
        const isSelected = selectedPattern === index;
        
        return (
          <motion.button
            key={index}
            onClick={() => handlePatternSelect(index)}
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
                  {descriptions[index]}
                </p>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}