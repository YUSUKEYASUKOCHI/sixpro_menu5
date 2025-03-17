import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isFullscreen: boolean;
}

export default function StepProgress({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isFullscreen
}: StepProgressProps) {
  return (
    <div className={`
      fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200
      ${isFullscreen ? 'pb-safe' : 'pb-4'}
    `}>
      <div className="max-w-2xl mx-auto px-6 pt-4 flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={currentStep === 0}
          className={`
            p-4 rounded-full transition-colors
            ${currentStep === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="flex-1 mx-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#007AFF] transition-all duration-300"
              style={{
                width: `${(currentStep / (totalSteps - 1)) * 100}%`
              }}
            />
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
          className={`
            p-4 rounded-full transition-colors
            ${currentStep === totalSteps - 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#007AFF] hover:bg-blue-50'
            }
          `}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}