import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ChefHat, AlertCircle } from 'lucide-react';

interface StepItemProps {
  step: string;
  index: number;
  isCompleted: boolean;
  isCurrent: boolean;
  onComplete: (index: number) => void;
}

export default function StepItem({
  step,
  index,
  isCompleted,
  isCurrent,
  onComplete
}: StepItemProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onComplete(index + 1)}
      className={`
        w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all
        ${isCompleted 
          ? 'bg-green-50 border-2 border-green-100' 
          : isCurrent 
            ? 'bg-blue-50 border-2 border-blue-100' 
            : 'bg-gray-50 border-2 border-gray-100 hover:bg-gray-100'
        }
      `}
      disabled={!isCurrent && !isCompleted}
    >
      <div className={`
        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isCompleted 
          ? 'bg-green-100' 
          : isCurrent 
            ? 'bg-blue-100' 
            : 'bg-gray-200'
        }
      `}>
        {isCompleted ? (
          <CheckCircle2 className="w-6 h-6 text-green-700" strokeWidth={2.5} />
        ) : isCurrent ? (
          <ChefHat className="w-5 h-5 text-blue-600" />
        ) : (
          <span className="text-gray-600 font-medium">{index + 1}</span>
        )}
      </div>

      <div className="flex-1">
        <p className={`text-base ${
          isCompleted 
            ? 'text-green-800' 
            : isCurrent 
              ? 'text-blue-800' 
              : 'text-gray-600'
        }`}>
          {step}
        </p>
        {isCurrent && (
          <div className="mt-2 flex items-start gap-2 text-sm text-blue-600">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>このステップを実行中です。完了したらタップしてください。</span>
          </div>
        )}
      </div>

      {isCurrent && (
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </motion.div>
      )}
    </motion.button>
  );
}