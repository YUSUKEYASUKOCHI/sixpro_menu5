import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ChefHat, Clock, AlertCircle, X } from 'lucide-react';

interface StepByStepGuideProps {
  steps: string[];
  currentStep: number;
  onStepComplete: (step: number) => void;
  cookingTime?: number;
  onClose: () => void;
  detailedInstructions?: string[];
}

export default function StepByStepGuide({ 
  steps, 
  currentStep, 
  onStepComplete,
  cookingTime,
  onClose,
  detailedInstructions
}: StepByStepGuideProps) {
  const displaySteps = detailedInstructions || steps;

  return (
    <div className="fixed inset-0 z-[80] bg-white">
      <div className="flex flex-col h-full max-h-screen">
        {/* ヘッダー */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-600" />
            <span className="text-gray-900">
              調理時間: {cookingTime}分
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              完了: {currentStep}/{displaySteps.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* スクロール可能なコンテンツ */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-4 max-w-2xl mx-auto">
            {displaySteps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;

              return (
                <button
                  key={index}
                  onClick={() => onStepComplete(index + 1)}
                  className={`
                    w-full flex items-start gap-4 p-4 rounded-xl text-left
                    ${isCompleted 
                      ? 'bg-green-50 border-2 border-green-100' 
                      : isCurrent 
                        ? 'bg-blue-50 border-2 border-blue-100' 
                        : 'bg-gray-50 border-2 border-gray-100'
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
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  )}
                </button>
              );
            })}

            {currentStep === displaySteps.length && (
              <div className="mt-6 bg-green-50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  調理完了！お疲れ様でした 🎉
                </h3>
                <p className="text-green-700">
                  すべての手順が完了しました。美味しく召し上がれ！
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  閉じる
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}