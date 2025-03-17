import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScrollGuide() {
  return (
    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 md:hidden">
      <div className="flex items-center justify-center gap-3">
        <motion.div
          animate={{ x: [-4, 0, -4] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </motion.div>

        <span className="text-sm text-gray-500">
          左右にスワイプしてメニューを確認できます
        </span>

        <motion.div
          animate={{ x: [4, 0, 4] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>
    </div>
  );
}