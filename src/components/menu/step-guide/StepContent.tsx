import React from 'react';
import { motion } from 'framer-motion';

interface StepContentProps {
  step: string;
  stepNumber: number;
  totalSteps: number;
  isFullscreen: boolean;
}

export default function StepContent({
  step,
  stepNumber,
  totalSteps,
  isFullscreen
}: StepContentProps) {
  return (
    <div className="flex-1 p-6 overflow-y-auto overscroll-contain">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className={`
            text-center mb-8
            ${isFullscreen ? 'text-4xl' : 'text-2xl'}
          `}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <span className="text-[#007AFF] font-bold">
            Step {stepNumber}/{totalSteps}
          </span>
        </motion.div>

        <motion.p
          className={`
            text-gray-800 leading-relaxed
            ${isFullscreen ? 'text-2xl' : 'text-xl'}
          `}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {step}
        </motion.p>
      </div>
    </div>
  );
}