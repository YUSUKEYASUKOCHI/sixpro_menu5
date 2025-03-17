import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';
import MenuTypeSelector from './MenuTypeSelector';

interface WeeklyMenuHeaderProps {
  selectedPattern: number;
  onPatternSelect: (index: number) => void;
  patterns: string[];
  descriptions: string[];
  onShowOverview: () => void;
}

export default function WeeklyMenuHeader({
  selectedPattern,
  onPatternSelect,
  patterns,
  descriptions,
  onShowOverview
}: WeeklyMenuHeaderProps) {
  return (
    <>
      <MenuTypeSelector 
        selectedPattern={selectedPattern}
        onPatternSelect={onPatternSelect}
        patterns={patterns}
        descriptions={descriptions}
      />

      <div className="flex justify-end">
        <motion.button
          onClick={onShowOverview}
          className="flex items-center gap-2 px-4 py-3 text-[#007AFF] hover:bg-blue-50 rounded-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Grid className="h-5 w-5" />
          <span className="text-base">週間メニューを表示</span>
        </motion.button>
      </div>
    </>
  );
}