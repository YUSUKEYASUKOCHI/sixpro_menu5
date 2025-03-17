// 食材データベースの形式
export interface FoodItem {
  name: string;      // 商品名
  size: string;      // 分量目安（例："2個(120g)"、"30g"、"1パック(110g)" など）
  pfc: {
    protein: number; // たんぱく質(g)
    fat: number;     // 脂質(g)
    carbs: number;   // 炭水化物(g)
    calories: number;// エネルギー(kcal)
  };
  unit: string;      // 単位（例："個", "g", "パック", "枚", etc）
  notes?: string;    // 代替品例などの備考
}

// 既存のインターフェースはそのまま維持
export interface UserProfile {
  height: string;
  weight: string;
  age: string;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'moderate' | 'active';
}

export interface UserProfileFormData extends UserProfile {
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
}

export interface DailyPFC {
  protein: number;
  fat: number;
  carbs: number;
}

export interface MenuItem {
  name: string;
  pfc: DailyPFC;
  calories?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  cookingTime?: number;
  servings?: number;
  ingredients?: Ingredient[];
  instructions?: string[];
  detailedInstructions?: string[];
  timing?: '朝食' | '昼食' | '夕食';
  adjustedPortions?: boolean;
}

export interface Ingredient {
  name: string;
  amount: string;
  recipes?: string[];
}

export interface DailyMenu {
  朝食: MenuItem[];
  昼食: MenuItem[];
  夕食: MenuItem[];
}

export interface UserData extends UserProfile {
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
}