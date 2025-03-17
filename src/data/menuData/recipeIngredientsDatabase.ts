import type { FoodItem } from '../../types';

// レシピ版用の食材データベース
export const RECIPE_INGREDIENTS_DATABASE: FoodItem[] = [
  // 主菜用食材
  {
    name: "鶏むね肉",
    size: "1枚(200g)",
    pfc: {
      calories: 216,
      protein: 48.8,
      fat: 2.4,
      carbs: 0
    },
    unit: "枚",
    notes: "鶏もも肉, ささみ, 鶏ミンチ"
  },
  {
    name: "豚ロース",
    size: "1枚(150g)",
    pfc: {
      calories: 253.5,
      protein: 33.45,
      fat: 13.35,
      carbs: 0
    },
    unit: "枚",
    notes: "豚もも肉, 豚肩ロース, 豚バラ肉"
  },

  // 野菜・香味野菜
  {
    name: "玉ねぎ",
    size: "1個(200g)",
    pfc: {
      calories: 72,
      protein: 1.6,
      fat: 0.2,
      carbs: 16.4
    },
    unit: "個",
    notes: "新玉ねぎ, 赤玉ねぎ, シャロット"
  },
  {
    name: "にんにく",
    size: "1片(5g)",
    pfc: {
      calories: 109,
      protein: 3.9,
      fat: 0.1,
      carbs: 23.1
    },
    unit: "片",
    notes: "生姜, シャロット, 長ねぎ"
  },

  // 調味料・香辛料
  {
    name: "醤油",
    size: "大さじ1(15ml)",
    pfc: {
      calories: 25,
      protein: 6.2,
      fat: 0,
      carbs: 0
    },
    unit: "ml",
    notes: "たまり醤油, 薄口醤油, ポン酢"
  },
  {
    name: "味噌",
    size: "大さじ1(18g)",
    pfc: {
      calories: 32,
      protein: 2.3,
      fat: 1.1,
      carbs: 4.2
    },
    unit: "g",
    notes: "赤味噌, 白味噌, 合わせ味噌"
  }
];