import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GUIDE_STEPS } from '../data/guideSteps';

interface UserGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserGuide({ isOpen, onClose }: UserGuideProps) {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const handleStepClick = (index: number) => {
    setSelectedStep(index);
  };

  const handleClose = () => {
    setSelectedStep(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={handleClose}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-[70] max-h-[90vh] overflow-hidden"
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-3" />

            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  使い方ガイド
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-6">
              <div className="space-y-4">
                {GUIDE_STEPS.map((step, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`
                      flex items-start gap-4 p-4 bg-white rounded-xl transition-all group
                      ${selectedStep === null ? 'shadow-sm hover:shadow-md' : 'opacity-40'}
                      ${selectedStep === index ? 'opacity-100 shadow-lg scale-105' : ''}
                    `}>
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedStep !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] flex items-center justify-center p-6 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl">
                        <span className="text-2xl">{GUIDE_STEPS[selectedStep].icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {GUIDE_STEPS[selectedStep].title}
                        </h3>
                        <p className="text-gray-600">
                          {GUIDE_STEPS[selectedStep].description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {GUIDE_STEPS[selectedStep].details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-[#007AFF] text-sm font-medium">
                            {index + 1}
                          </span>
                          <p className="text-gray-600 leading-relaxed">
                            {detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedStep(null)}
                      className="w-full p-4 bg-[#007AFF] text-white font-medium rounded-xl hover:bg-[#0066CC] transition-colors"
                    >
                      閉じる
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}