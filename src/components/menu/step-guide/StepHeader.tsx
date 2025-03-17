import React from 'react';
import { Clock, X, Maximize2, Minimize2 } from 'lucide-react';

interface StepHeaderProps {
  cookingTime?: number;
  currentStep: number;
  totalSteps: number;
  onClose: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function StepHeader({ 
  cookingTime, 
  currentStep, 
  totalSteps, 
  onClose,
  isFullscreen,
  onToggleFullscreen
}: StepHeaderProps) {
  return (
    <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-[#007AFF]" />
        <span className="text-gray-900 font-medium">
          調理時間: {cookingTime}分
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {currentStep + 1}/{totalSteps}
        </span>
        <button
          onClick={onToggleFullscreen}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isFullscreen ? '通常表示に戻す' : 'フルスクリーン表示'}
        >
          {isFullscreen ? (
            <Minimize2 className="h-5 w-5 text-gray-400" />
          ) : (
            <Maximize2 className="h-5 w-5 text-gray-400" />
          )}
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}