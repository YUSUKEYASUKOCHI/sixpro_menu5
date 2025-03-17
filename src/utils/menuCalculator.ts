import type { MenuItem, DailyPFC, Ingredient, FoodItem } from '../types';
import { FOOD_DATABASE } from '../data/foodDatabase';
import { FIXED_INGREDIENTS_DATABASE } from '../data/menuData/fixedIngredientsDatabase';
import { RECIPE_INGREDIENTS_DATABASE } from '../data/menuData/recipeIngredientsDatabase';

const CALORIES_PER_GRAM = {
  protein: 4,
  fat: 9,
  carbs: 4,
};

interface PortionAdjustment {
  name: string;
  originalAmount: string;
  adjustedAmount: string;
  unit: string;
}

export function calculateCalories(pfc: { protein: number; fat: number; carbs: number }): number {
  return (
    pfc.protein * CALORIES_PER_GRAM.protein +
    pfc.fat * CALORIES_PER_GRAM.fat +
    pfc.carbs * CALORIES_PER_GRAM.carbs
  );
}

// コンビニ商品の分量を調整しない単位のリスト
const NON_ADJUSTABLE_UNITS = ['パック', '個', '本', '丁', '枚', '袋', '缶'];

function isNonAdjustableUnit(unit: string): boolean {
  return NON_ADJUSTABLE_UNITS.some(u => unit.includes(u));
}

function parseAmount(amount: string): { value: number; unit: string } {
  const match = amount.match(/^([\d./]+)\s*(.*)$/);
  if (!match) return { value: 0, unit: '' };

  const [, numStr, unit] = match;
  // 分数対応（例: "1/2" → 0.5）
  const value = numStr.includes('/') 
    ? numStr.split('/').reduce((n, d) => Number(n) / Number(d))
    : Number(numStr);

  return { value, unit };
}

// メニューパターンに応じた食材データベースの選択
function getFoodDatabase(pattern: number): FoodItem[] {
  switch (pattern) {
    case 0: // 食材固定版
      return FIXED_INGREDIENTS_DATABASE;
    case 1: // レシピ版
      return RECIPE_INGREDIENTS_DATABASE;
    case 2: // コンビニ版
      return FOOD_DATABASE;
    default:
      return FOOD_DATABASE;
  }
}

export function adjustMenuPortions(menu: MenuItem, targetPFC: DailyPFC, pattern: number = 2): MenuItem {
  // パターンに応じたデータベースを選択
  const foodDatabase = getFoodDatabase(pattern);

  // 1食あたりの目標値を計算（1日の目標値の1/3）
  const mealTarget = {
    protein: targetPFC.protein / 3,
    fat: targetPFC.fat / 3,
    carbs: targetPFC.carbs / 3,
  };

  // 現在のPFC比率を計算
  const currentRatio = {
    protein: menu.pfc.protein / mealTarget.protein,
    fat: menu.pfc.fat / mealTarget.fat,
    carbs: menu.pfc.carbs / mealTarget.carbs,
  };

  // 調整が必要な比率を決定（最も大きな比率に合わせる）
  const adjustmentRatio = Math.max(
    currentRatio.protein,
    currentRatio.fat,
    currentRatio.carbs
  );

  // 調整比率の上限を設定（2倍まで）
  const maxAdjustmentRatio = 2;
  const finalAdjustmentRatio = Math.min(adjustmentRatio, maxAdjustmentRatio);

  // 食材の量を調整
  const adjustedIngredients = menu.ingredients?.map(ingredient => {
    // 選択されたデータベースから商品情報を検索
    const foodItem = foodDatabase.find(item => item.name === ingredient.name);
    
    // パック商品や個数単位の商品は調整しない
    if (foodItem && isNonAdjustableUnit(foodItem.unit)) {
      return ingredient;
    }

    const { value, unit } = parseAmount(ingredient.amount);
    if (!value) return ingredient;

    // 単位が調整不可の場合は元の表記を維持
    if (isNonAdjustableUnit(unit)) {
      return ingredient;
    }

    // 数値を調整し、整数に切り上げ
    const adjustedValue = Math.ceil(value / finalAdjustmentRatio);
    
    return {
      ...ingredient,
      amount: `${adjustedValue}${unit}`
    };
  });

  // PFCを調整（整数に切り上げ）
  const adjustedPFC = {
    protein: Math.ceil(menu.pfc.protein / finalAdjustmentRatio),
    fat: Math.ceil(menu.pfc.fat / finalAdjustmentRatio),
    carbs: Math.ceil(menu.pfc.carbs / finalAdjustmentRatio),
  };

  // カロリーを計算
  const calories = calculateCalories(adjustedPFC);

  return {
    ...menu,
    ingredients: adjustedIngredients,
    pfc: adjustedPFC,
    calories,
    adjustedPortions: true,
  };
}