import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingCart, ChefHat, Store } from 'lucide-react';
import type { UserProfileFormData } from '../../types';
import { calculateDailyCalorieTarget, validateInputs } from '../../utils/calorieCalculator';
import { calculatePFCFromCalories } from '../../utils/nutritionCalculator';
import { PATTERN_NAMES, PATTERN_DESCRIPTIONS } from '../../data/menu';
import { saveMenuType } from '../../utils/storage';

interface UserProfileFormProps {
  onSubmit: (data: UserProfileFormData, selectedPattern: number) => void;
  initialData: UserProfileFormData | null;
  onClose?: () => void;
}

export default function UserProfileForm({ onSubmit, initialData, onClose }: UserProfileFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserProfileFormData>(() => ({
    height: initialData?.height || '',
    weight: initialData?.weight || '',
    age: initialData?.age || '',
    gender: initialData?.gender || 'male',
    activityLevel: initialData?.activityLevel || 'moderate',
    calories: initialData?.calories || '',
    protein: initialData?.protein || '',
    fat: initialData?.fat || '',
    carbs: initialData?.carbs || '',
  }));
  const [selectedPattern, setSelectedPattern] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 7) {
      setStep(step + 1);
      return;
    }

    const validationError = validateInputs(formData);
    if (validationError) {
      alert(validationError);
      return;
    }

    const dailyCalories = calculateDailyCalorieTarget(formData);
    const pfc = calculatePFCFromCalories(dailyCalories);

    const finalData: UserProfileFormData = {
      ...formData,
      calories: dailyCalories.toString(),
      protein: pfc.protein.toString(),
      fat: pfc.fat.toString(),
      carbs: pfc.carbs.toString(),
    };

    // メニュータイプを保存
    saveMenuType(selectedPattern);
    onSubmit(finalData, selectedPattern);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const menuTypes = [
    {
      Icon: ShoppingCart,
      iconColor: 'text-[#34C759]',
      gradient: 'from-[#34C759] to-[#32ADE6]'
    },
    {
      Icon: ChefHat,
      iconColor: 'text-[#FF9500]',
      gradient: 'from-[#FF9500] to-[#FF3B30]'
    },
    {
      Icon: Store,
      iconColor: 'text-[#5856D6]',
      gradient: 'from-[#5856D6] to-[#007AFF]'
    }
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">身長を教えてください</h3>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                className="text-4xl font-bold text-center w-40 h-20 rounded-xl border-2 border-gray-200 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                placeholder="170"
              />
              <span className="text-2xl text-gray-600">cm</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">体重を教えてください</h3>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="text-4xl font-bold text-center w-40 h-20 rounded-xl border-2 border-gray-200 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                placeholder="65"
              />
              <span className="text-2xl text-gray-600">kg</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">年齢を教えてください</h3>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="text-4xl font-bold text-center w-40 h-20 rounded-xl border-2 border-gray-200 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                placeholder="40"
              />
              <span className="text-2xl text-gray-600">歳</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">性別を選択してください</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: 'male' })}
                className={`
                  p-6 rounded-xl border-2 transition-all
                  ${formData.gender === 'male'
                    ? 'border-[#007AFF] bg-[#007AFF]/5'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <span className="text-2xl mb-2">👨</span>
                <span className={`
                  text-xl font-medium
                  ${formData.gender === 'male' ? 'text-[#007AFF]' : 'text-gray-900'}
                `}>
                  男性
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: 'female' })}
                className={`
                  p-6 rounded-xl border-2 transition-all
                  ${formData.gender === 'female'
                    ? 'border-[#FF2D55] bg-[#FF2D55]/5'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <span className="text-2xl mb-2">👩</span>
                <span className={`
                  text-xl font-medium
                  ${formData.gender === 'female' ? 'text-[#FF2D55]' : 'text-gray-900'}
                `}>
                  女性
                </span>
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">普段の運動量を教えてください</h3>
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, activityLevel: 'sedentary' })}
                className={`
                  w-full p-4 rounded-xl border-2 text-left transition-all
                  ${formData.activityLevel === 'sedentary'
                    ? 'border-[#007AFF] bg-[#007AFF]/5'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🪑</span>
                  <div>
                    <span className={`
                      block text-lg font-medium
                      ${formData.activityLevel === 'sedentary' ? 'text-[#007AFF]' : 'text-gray-900'}
                    `}>
                      低い
                    </span>
                    <span className="text-sm text-gray-500">
                      デスクワークが中心で、運動はほとんどしない
                    </span>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, activityLevel: 'moderate' })}
                className={`
                  w-full p-4 rounded-xl border-2 text-left transition-all
                  ${formData.activityLevel === 'moderate'
                    ? 'border-[#007AFF] bg-[#007AFF]/5'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚶</span>
                  <div>
                    <span className={`
                      block text-lg font-medium
                      ${formData.activityLevel === 'moderate' ? 'text-[#007AFF]' : 'text-gray-900'}
                    `}>
                      普通
                    </span>
                    <span className="text-sm text-gray-500">
                      週に1-2回程度の運動や立ち仕事が多い
                    </span>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, activityLevel: 'active' })}
                className={`
                  w-full p-4 rounded-xl border-2 text-left transition-all
                  ${formData.activityLevel === 'active'
                    ? 'border-[#007AFF] bg-[#007AFF]/5'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏃</span>
                  <div>
                    <span className={`
                      block text-lg font-medium
                      ${formData.activityLevel === 'active' ? 'text-[#007AFF]' : 'text-gray-900'}
                    `}>
                      高い
                    </span>
                    <span className="text-sm text-gray-500">
                      週に3回以上の運動や肉体労働が中心
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              メニュータイプを選択してください
            </h3>
            <p className="text-gray-600">
              あなたのライフスタイルに合わせて最適なメニュータイプを選択してください。
              この設定は後からいつでも変更できます。
            </p>
            <div className="space-y-4">
              {PATTERN_NAMES.map((name, index) => {
                const { Icon, iconColor, gradient } = menuTypes[index];
                const isSelected = selectedPattern === index;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedPattern(index)}
                    className={`
                      w-full p-4 rounded-xl transition-all duration-300
                      ${isSelected 
                        ? 'bg-gray-900 text-white shadow-lg' 
                        : 'bg-white border-2 border-gray-100 hover:border-gray-200'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center
                        ${isSelected 
                          ? `bg-gradient-to-br ${gradient}` 
                          : 'bg-gray-50'
                        }
                      `}>
                        <Icon 
                          className={`h-8 w-8 ${isSelected ? 'text-white' : iconColor}`} 
                          strokeWidth={2}
                        />
                      </div>

                      <div className="flex-1 text-left">
                        <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                          {name}
                        </h3>
                        <p className={`mt-1 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                          {PATTERN_DESCRIPTIONS[index]}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              入力内容を確認してください
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">身長</span>
                    <p className="text-lg font-medium text-gray-900">{formData.height} cm</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">体重</span>
                    <p className="text-lg font-medium text-gray-900">{formData.weight} kg</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">年齢</span>
                    <p className="text-lg font-medium text-gray-900">{formData.age} 歳</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">性別</span>
                    <p className="text-lg font-medium text-gray-900">
                      {formData.gender === 'male' ? '男性' : '女性'}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">運動量</span>
                    <p className="text-lg font-medium text-gray-900">
                      {formData.activityLevel === 'sedentary' ? '低い' :
                       formData.activityLevel === 'moderate' ? '普通' : '高い'}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">メニュータイプ</span>
                    <p className="text-lg font-medium text-gray-900">
                      {PATTERN_NAMES[selectedPattern]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium text-gray-500">
                ステップ {step} / 7
              </div>
              <div className="text-sm font-medium text-gray-500">
                {Math.round((step / 7) * 100)}%
              </div>
            </div>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#007AFF]"
                animate={{ width: `${(step / 7) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-6 p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-colors"
              >
                戻る
              </button>
            ) : (
              <div></div>
            )}
            <button
              type="submit"
              className="px-6 py-3 bg-[#007AFF] text-white font-medium rounded-xl hover:bg-[#0066CC] transition-colors"
            >
              {step < 7 ? '次へ' : '設定を保存'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}