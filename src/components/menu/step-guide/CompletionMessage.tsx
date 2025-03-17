import React from 'react';
import { motion } from 'framer-motion';

interface CompletionMessageProps {
  onClose: () => void;
}

export default function CompletionMessage({ onClose }: CompletionMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 bg-green-50 rounded-xl p-6 text-center"
    >
      <h3 className="text-lg font-medium text-green-800 mb-2">
        調理完了！お疲れ様でした 🎉
      </h3>
      <p className="text-green-700">
        すべての手順が完了しました。美味しく召し上がれ！
      </p>
      <button
        onClick={onClose}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        閉じる
      </button>
    </motion.div>
  );
}