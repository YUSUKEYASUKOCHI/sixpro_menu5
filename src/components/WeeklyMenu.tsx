import React, { useState, useMemo } from 'react';
import type { DailyPFC, MenuItem, UserData } from '../types';
import { MENU_PATTERNS } from '../data/menu';
import { adjustMenuPortions } from '../utils/menuCalculator';
import { createShoppingListFromMeals } from '../utils/storage';
import { AnimatePresence } from 'framer-motion';
import ConvenienceTips from './menu/ConvenienceTips';
import MealDetails from './menu/MealDetails';
import AddToListToast from './menu/AddToListToast';
import WeeklyMenuGrid from './menu/WeeklyMenuGrid';
import MenuHeader from './menu/MenuHeader';

const DAYS = ['月', '火', '水', '木', '金', '土', '日'];

interface WeeklyMenuProps {
  userPFC: DailyPFC;
  selectedPattern: number;
  onShoppingListUpdate: () => void;
  userData: UserData | null;
  onPatternSelect: (index: number) => void;
}

export default function WeeklyMenu({ 
  userPFC, 
  selectedPattern, 
  onShoppingListUpdate,
  userData,
  onPatternSelect
}: WeeklyMenuProps) {
  const [showToast, setShowToast] = useState(false);
  const [isAddingToList, setIsAddingToList] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedMealType, setSelectedMealType] = useState<'朝食' | '昼食' | '夕食' | null>(null);

  const adjustedWeeklyMenu = useMemo(() => {
    if (!MENU_PATTERNS[selectedPattern]) return [];

    return MENU_PATTERNS[selectedPattern].map(dayMenu => ({
      朝食: (dayMenu.朝食 || []).map(meal => ({
        ...adjustMenuPortions(meal, userPFC, selectedPattern),
        timing: '朝食' as const
      })),
      昼食: (dayMenu.昼食 || []).map(meal => ({
        ...adjustMenuPortions(meal, userPFC, selectedPattern),
        timing: '昼食' as const
      })),
      夕食: (dayMenu.夕食 || []).map(meal => ({
        ...adjustMenuPortions(meal, userPFC, selectedPattern),
        timing: '夕食' as const
      })),
    }));
  }, [selectedPattern, userPFC]);

  const handleAddToShoppingList = (dayIndex: number) => {
    const dayMenu = adjustedWeeklyMenu[dayIndex];
    if (!dayMenu) return;

    const allMeals = [
      ...(dayMenu.朝食 || []),
      ...(dayMenu.昼食 || []),
      ...(dayMenu.夕食 || [])
    ];

    if (allMeals.length > 0) {
      setIsAddingToList(true);
      createShoppingListFromMeals(allMeals, `${DAYS[dayIndex]}曜日の献立`);
      
      setShowToast(true);
      onShoppingListUpdate();
      setTimeout(() => {
        setShowToast(false);
        setIsAddingToList(false);
      }, 3000);
    }
  };

  const handleAddAllToList = () => {
    const allMeals = adjustedWeeklyMenu.flatMap(dayMenu => [
      ...(dayMenu.朝食 || []),
      ...(dayMenu.昼食 || []),
      ...(dayMenu.夕食 || [])
    ]);

    if (allMeals.length > 0) {
      setIsAddingToList(true);
      createShoppingListFromMeals(allMeals, '今週の献立');
      
      setShowToast(true);
      onShoppingListUpdate();
      setTimeout(() => {
        setShowToast(false);
        setIsAddingToList(false);
      }, 3000);
    }
  };

  return (
    <div className="space-y-6 pb-32">
      <MenuHeader 
        userData={userData}
        selectedPattern={selectedPattern}
        onPatternSelect={onPatternSelect}
      />

      <WeeklyMenuGrid
        menu={adjustedWeeklyMenu}
        days={DAYS}
        onDaySelect={setSelectedDay}
        onMealSelect={setSelectedMealType}
        onAddToList={handleAddToShoppingList}
        onAddAllToList={handleAddAllToList}
        isAddingToList={isAddingToList}
      />

      {selectedPattern === 2 && <ConvenienceTips />}

      {selectedMealType !== null && selectedDay !== null && (
        <MealDetails
          type={selectedMealType}
          meals={adjustedWeeklyMenu[selectedDay][selectedMealType]}
          onClose={() => {
            setSelectedDay(null);
            setSelectedMealType(null);
          }}
        />
      )}

      <AnimatePresence>
        <AddToListToast show={showToast} />
      </AnimatePresence>
    </div>
  );
}