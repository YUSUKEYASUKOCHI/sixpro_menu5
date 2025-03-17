import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingCart, Heart, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BottomNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  animationKey?: number;
}

export default function BottomNavigation({ currentTab, onTabChange, animationKey }: BottomNavigationProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (animationKey) {
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [animationKey]);

  const tabs = [
    { id: 'menu', icon: Calendar, label: 'メニュー' },
    { id: 'shopping', icon: ShoppingCart, label: '買い物リスト' },
    { id: 'favorites', icon: Heart, label: 'お気に入り' },
    { id: 'settings', icon: Settings, label: 'あなたの設定' },
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100/50 px-4 pb-safe pt-2 z-50 shadow-[0_-8px_16px_-6px_rgba(0,0,0,0.1)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => onTabChange(id)}
            className={`
              relative flex flex-col items-center justify-center
              min-w-[84px] min-h-[72px] rounded-2xl -mt-2
              transition-all duration-300 active:scale-95
              touch-none select-none
              ${currentTab === id 
                ? 'bg-gradient-to-b from-blue-50/90 to-transparent' 
                : 'hover:bg-gray-50/80'
              }
            `}
            whileTap={{ scale: 0.95 }}
            role="tab"
            aria-selected={currentTab === id}
            aria-label={`${label}タブ`}
          >
            <motion.div
              animate={{
                scale: currentTab === id ? 1.2 : 1,
                y: currentTab === id ? -4 : 0
              }}
              transition={{ 
                type: 'spring',
                stiffness: 500,
                damping: 30
              }}
              className="relative"
            >
              {id === 'shopping' && showAnimation ? (
                <motion.div
                  key={animationKey}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -15, 15, -15, 0],
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 0.6,
                    times: [0, 0.2, 0.4, 0.6, 0.8],
                    ease: "easeInOut"
                  }}
                >
                  <Icon 
                    className={`h-7 w-7 transition-all duration-300 ${
                      currentTab === id 
                        ? 'text-[#0066FF] filter drop-shadow-[0_0_8px_rgba(0,102,255,0.3)]' 
                        : 'text-[#34c759]'
                    }`}
                    strokeWidth={currentTab === id ? 2.5 : 1.5} 
                  />
                </motion.div>
              ) : (
                <Icon 
                  className={`h-7 w-7 transition-all duration-300 ${
                    currentTab === id 
                      ? 'text-[#0066FF] filter drop-shadow-[0_0_8px_rgba(0,102,255,0.3)]' 
                      : 'text-gray-400'
                  }`}
                  strokeWidth={currentTab === id ? 2.5 : 1.5} 
                />
              )}
              {currentTab === id && (
                <motion.div
                  className="absolute inset-0 bg-blue-400/20 blur-xl -z-10"
                  layoutId={`glow-${id}`}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>

            <span className={`text-sm mt-2 font-medium transition-all duration-300 ${
              currentTab === id 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00C2FF] font-semibold scale-105' 
                : 'text-gray-400'
            }`}>
              {label}
            </span>

            {currentTab === id && (
              <motion.div
                layoutId="bottomNav"
                className="absolute bottom-1.5 h-1 w-10 bg-gradient-to-r from-[#0066FF] to-[#00C2FF] rounded-full shadow-[0_0_12px_rgba(0,102,255,0.5)]"
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}

            {id === 'shopping' && showAnimation && (
              <motion.div
                key={`glow-${animationKey}`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.2, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 0.8,
                  times: [0, 0.3, 1],
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-[#34c759]/20 rounded-2xl"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="h-safe pb-2" />
    </motion.nav>
  );
}