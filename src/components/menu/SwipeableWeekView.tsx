import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeableWeekViewProps {
  currentDay: number;
  onDayChange: (day: number) => void;
  days: string[];
  children: React.ReactNode;
}

export default function SwipeableWeekView({
  currentDay,
  onDayChange,
  days,
  children
}: SwipeableWeekViewProps) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentDay < days.length - 1) {
        onDayChange(currentDay + 1);
      }
    },
    onSwipedRight: () => {
      if (currentDay > 0) {
        onDayChange(currentDay - 1);
      }
    },
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
    delta: 10,
    swipeDuration: 500,
    touchEventOptions: { passive: true }
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative overflow-hidden">
      {/* 曜日タブ */}
      <div className="mb-6 bg-white rounded-2xl shadow-sm p-2">
        <div className="flex gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => onDayChange(index)}
              className={`
                relative flex-1 min-w-[4rem] py-3 px-4 rounded-xl
                transition-all duration-300
                ${currentDay === index 
                  ? 'text-white font-bold shadow-lg scale-105' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <motion.span
                animate={{ 
                  scale: currentDay === index ? 1.1 : 1,
                  y: currentDay === index ? -2 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {day}曜
              </motion.span>
              {currentDay === index && (
                <motion.div
                  layoutId="activeDay"
                  className="absolute inset-0 bg-gradient-to-br from-[#007AFF] to-[#34C759] rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* スワイプ可能なコンテンツ */}
      <div {...handlers} className="relative touch-pan-x">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentDay}
            custom={currentDay}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* スワイプインジケーター */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex items-center justify-between px-4">
            {currentDay > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.5, x: 0 }}
                className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </motion.div>
            )}
            {currentDay < days.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.5, x: 0 }}
                className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center ml-auto"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* モバイル用のインジケーター */}
      <div className="flex justify-center gap-1 mt-4 md:hidden">
        {days.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              width: currentDay === index ? '1rem' : '0.5rem',
              backgroundColor: currentDay === index ? '#007AFF' : '#D1D5DB'
            }}
            className="h-2 rounded-full transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}