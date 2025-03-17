import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepHeader from './step-guide/StepHeader';
import StepContent from './step-guide/StepContent';
import StepProgress from './step-guide/StepProgress';
import CompletionMessage from './step-guide/CompletionMessage';

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const displaySteps = detailedInstructions || steps;

  const handleNext = () => {
    if (currentStep < displaySteps.length - 1) {
      onStepComplete(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      onStepComplete(currentStep - 1);
    }
  };

  return (
    <div className={`
      fixed inset-0 z-[80] bg-white
      ${isFullscreen ? 'h-[calc(var(--vh,1vh)*100)]' : ''}
    `}>
      <div className="flex flex-col h-full">
        <StepHeader
          cookingTime={cookingTime}
          currentStep={currentStep}
          totalSteps={displaySteps.length}
          onClose={onClose}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
        />

        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {currentStep === displaySteps.length ? (
              <CompletionMessage onClose={onClose} />
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute inset-0 flex flex-col"
              >
                <StepContent
                  step={displaySteps[currentStep]}
                  stepNumber={currentStep + 1}
                  totalSteps={displaySteps.length}
                  isFullscreen={isFullscreen}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {currentStep < displaySteps.length && (
            <StepProgress
              currentStep={currentStep}
              totalSteps={displaySteps.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFullscreen={isFullscreen}
            />
          )}
        </div>
      </div>
    </div>
  );
}