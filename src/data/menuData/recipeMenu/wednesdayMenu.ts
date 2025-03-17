import type { DailyMenu } from '../../../types';

export const wednesdayMenu: DailyMenu = {
  朝食: [{
    name: 'アボカドエッグ',
    pfc: { protein: 20, fat: 15, carbs: 3 },
    difficulty: 'easy',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'アボカド', amount: '1/2個' },
      { name: 'チーズ', amount: '20g' },
      { name: 'バター', amount: '5g' },
      { name: 'レタス', amount: '30g' }
    ],
    instructions: [
      '卵を炒める',
      'アボカドを和える',
      'チーズを加える'
    ],
    detailedInstructions: [
      '卵を割りほぐし、塩コショウで味付けします',
      'アボカドは一口大に切ります',
      'レタスは食べやすい大きさにちぎります',
      'チーズは細かく刻みます',
      'フライパンを中火で熱し、バターを溶かします',
      '溶き卵を流し入れ、大きく混ぜながら半熟状態まで炒めます',
      'チーズを加えて軽く混ぜ合わせます',
      'アボカドを加えて優しく和えます',
      'レタスを皿に敷き、その上に卵を盛り付けます',
      '黒コショウを挽いて完成です'
    ]
  }],
  昼食: [{
    name: '鶏むね肉のハーブグリル',
    pfc: { protein: 26, fat: 15, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '鶏むね肉', amount: '120g' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'トマト', amount: '1個' },
      { name: 'オリーブオイル', amount: '10g' },
      { name: 'にんにく', amount: '1片' }
    ],
    instructions: [
      '鶏肉に下味をつける',
      'オリーブオイルで焼く',
      '野菜を添える'
    ],
    detailedInstructions: [
      '鶏むね肉は厚みを均一にし、塩コショウとハーブで下味をつけます',
      'にんにくはみじん切りにします',
      'ブロッコリーは小房に分け、茎は斜め薄切りにします',
      'トマトはくし形に切ります',
      'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
      '香りが出たら鶏肉を入れ、両面をこんがり焼きます（片面5分）',
      '一度取り出し、5分ほど休ませます',
      'その間にブロッコリーを電子レンジで2分加熱します',
      '鶏肉を食べやすい大きさに切り分けます',
      '野菜と共に盛り付け、オリーブオイルを回しかけます'
    ]
  }],
  夕食: [{
    name: '豚肉と野菜の炒め物',
    pfc: { protein: 24, fat: 16, carbs: 4 },
    difficulty: 'easy',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'キャベツ', amount: '150g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'バター', amount: '5g' },
      { name: '醤油', amount: '5g' }
    ],
    instructions: [
      '豚肉を切る',
      '野菜を切る',
      'バターで炒める'
    ],
    detailedInstructions: [
      '豚肉は一口大に切り、塩コショウをします',
      'キャベツは食べやすい大きさにざく切りにします',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      'フライパンを中火で熱し、バターを溶かします',
      '豚肉を入れ、こんがりと焼き色をつけます',
      '肉の色が変わったら、キャベツとキノコを加えます',
      '野菜がしんなりするまで炒めます',
      '醤油を加えて全体を混ぜ合わせます',
      '味を確認し、必要に応じて塩コショウで調整します',
      '器に盛り付けて完成です'
    ]
  }]
};