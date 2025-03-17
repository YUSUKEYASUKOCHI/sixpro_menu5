import React from 'react';
import { Calendar, ShoppingCart, Heart, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ currentTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'menu', icon: Calendar, label: 'メニュー' },
    { id: 'shopping', icon: ShoppingCart, label: '買い物リスト' },
    { id: 'favorites', icon: Heart, label: 'お気に入り' },
    { id: 'settings', icon: Settings, label: 'あなたの設定' },
  ];

  return (
    <nav className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-[0_4px_12px_-6px_rgba(0,0,0,0.1)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {tabs.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => onTabChange(id)}
              className={`
                relative flex items-center gap-3 py-4 px-6 rounded-xl
                transition-all duration-300 active:scale-95
                ${currentTab === id 
                  ? 'text-[#0066FF]' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50/80'
                }
              `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  scale: currentTab === id ? 1.1 : 1,
                  rotate: currentTab === id ? 360 : 0
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3
                }}
                className="relative"
              >
                <Icon 
                  className={`h-6 w-6 transition-all duration-300 ${
                    currentTab === id 
                      ? 'filter drop-shadow-[0_0_8px_rgba(0,102,255,0.3)]' 
                      : ''
                  }`} 
                  strokeWidth={currentTab === id ? 2.5 : 1.5}
                />
                {currentTab === id && (
                  <motion.div
                    className="absolute inset-0 bg-blue-400/20 blur-xl -z-10"
                    layoutId={`glow-${id}`}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>

              <span className={`text-base font-medium transition-all duration-300 ${
                currentTab === id 
                  ? 'text-[#0066FF] font-semibold' 
                  : ''
              }`}>
                {label}
              </span>

              {currentTab === id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 h-1 left-2 right-2 bg-gradient-to-r from-[#0066FF] to-[#00C2FF] rounded-full shadow-[0_0_12px_rgba(0,102,255,0.5)]"
                  transition={{ 
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}