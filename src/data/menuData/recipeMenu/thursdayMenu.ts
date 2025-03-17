import type { DailyMenu } from '../../../types';

export const thursdayMenu: DailyMenu = {
  朝食: [{
    name: 'チーズオムレツ',
    pfc: { protein: 18, fat: 13, carbs: 2 },
    difficulty: 'medium',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'チーズ', amount: '30g' },
      { name: 'バター', amount: '5g' },
      { name: 'トマト', amount: '1/2個' },
      { name: 'アボカド', amount: '1/4個' }
    ],
    instructions: [
      '卵を溶く',
      'チーズを加える',
      'オムレツを作る'
    ],
    detailedInstructions: [
      '卵を割りほぐし、塩コショウで味付けします',
      'チーズは細かく刻みます',
      'トマトは薄切りにします',
      'アボカドは薄くスライスします',
      'フライパンを中火で熱し、バターを溶かします',
      '溶き卵を流し入れ、端から中央に向かって混ぜます',
      '半熟状態になったら、チーズを散らします',
      'オムレツの端を折り、三つ折りにします',
      'トマトとアボカドを添えて完成です'
    ]
  }],
  昼食: [{
    name: '鮭のバター焼き',
    pfc: { protein: 23, fat: 15, carbs: 3 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '生鮭', amount: '1切(80g)' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'バター', amount: '10g' },
      { name: '醤油', amount: '5g' }
    ],
    instructions: [
      '鮭をバターで焼く',
      'ブロッコリーを茹でる',
      'キノコを炒める'
    ],
    detailedInstructions: [
      '鮭は塩をふり、10分ほど置きます',
      'ブロッコリーは小房に分け、茎は斜め薄切りにします',
      'キノコ類は石づきを取り、食べやすい大きさに切ります',
      '鍋に湯を沸かし、ブロッコリーを2分茹でます',
      '茹でたブロッコリーは氷水にとり、水気を切ります',
      'フライパンを中火で熱し、バター半量を溶かします',
      '鮭を皮目から焼きます（片面3分）',
      '裏返して残りのバターを加え、全体に絡めます',
      '別のフライパンでキノコを炒め、醤油で味付けします',
      '鮭、ブロッコリー、キノコを彩りよく盛り付けます'
    ]
  }],
  夕食: [{
    name: '豚しゃぶサラダ',
    pfc: { protein: 24, fat: 16, carbs: 4 },
    difficulty: 'easy',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'レタス', amount: '100g' },
      { name: 'キュウリ', amount: '1本' },
      { name: 'トマト', amount: '1個' },
      { name: 'オリーブオイル', amount: '10g' }
    ],
    instructions: [
      '豚肉をしゃぶしゃぶする',
      '野菜を切る',
      'オリーブオイルをかける'
    ],
    detailedInstructions: [
      '鍋に水を沸かし、塩少々を加えます',
      '豚肉は薄切りのまま、一枚ずつしゃぶしゃぶします',
      '火が通った豚肉は氷水にとり、引き締めます',
      'レタスは食べやすい大きさにちぎります',
      'キュウリは斜め薄切りにします',
      'トマトはくし形に切ります',
      '氷水から豚肉を取り出し、水気をしっかり切ります',
      'レタスを皿に敷き、その上に豚肉を盛ります',
      'キュウリとトマトを彩りよく配置します',
      'オリーブオイルをかけ、塩コショウで味を調えます'
    ]
  }]
};