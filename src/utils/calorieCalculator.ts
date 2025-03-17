import type { UserProfile } from '../types';

// 活動レベルの係数
export const ACTIVITY_LEVEL = {
  sedentary: 1.3,  // 低い
  moderate: 1.5,   // 普通
  active: 1.9      // 高い
} as const;

// 基礎代謝量（BMR）の計算
export function calculateBMR(profile: UserProfile): number {
  const weight = parseFloat(profile.weight);
  const height = parseFloat(profile.height);
  const age = parseFloat(profile.age);

  if (profile.gender === 'male') {
    return ((0.0481 * weight) + (0.0234 * height) - (0.0138 * age) - 0.4235) * 1000 / 4.186;
  }
  return ((0.0481 * weight) + (0.0234 * height) - (0.0138 * age) - 0.9708) * 1000 / 4.186;
}

// 1日の消費カロリー（TDEE）の計算
export function calculateTDEE(bmr: number, activityLevel: keyof typeof ACTIVITY_LEVEL): number {
  return bmr * ACTIVITY_LEVEL[activityLevel];
}

// 月間の減量目標の計算
export function calculateMonthlyWeightLossGoal(weight: number): number {
  return weight * 0.04;
}

// 1日あたりの摂取カロリー目標の計算
export function calculateDailyCalorieTarget(profile: UserProfile): number {
  const bmr = calculateBMR(profile);
  const tdee = calculateTDEE(bmr, profile.activityLevel);
  const monthlyWeightLossGoal = calculateMonthlyWeightLossGoal(parseFloat(profile.weight));
  const totalCalorieToReduce = monthlyWeightLossGoal * 7000;
  const dailyCalorieToReduce = totalCalorieToReduce / 30;
  
  return Math.round(tdee - dailyCalorieToReduce);
}

// 入力値の検証
export function validateInputs(profile: UserProfile): string | null {
  const height = parseFloat(profile.height);
  const weight = parseFloat(profile.weight);
  const age = parseFloat(profile.age);

  if (isNaN(height) || height < 120 || height > 220) {
    return '身長は120cm〜220cmの範囲で入力してください';
  }
  if (isNaN(weight) || weight < 30 || weight > 200) {
    return '体重は30kg〜200kgの範囲で入力してください';
  }
  if (isNaN(age) || age < 18 || age > 100) {
    return '年齢は18歳〜100歳の範囲で入力してください';
  }

  return null;
}