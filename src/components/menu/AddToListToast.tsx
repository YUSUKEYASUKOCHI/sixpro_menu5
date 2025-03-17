import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface AddToListToastProps {
  show: boolean;
}

export default function AddToListToast({ show }: AddToListToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-28 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[320px] bg-white text-gray-900 px-5 py-5 rounded-2xl shadow-lg z-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#34c759] rounded-xl flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <p className="font-medium text-[15px] leading-relaxed whitespace-pre-line">
              {'この日に使用する食材を\n買い物リストに追加しました！'}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}