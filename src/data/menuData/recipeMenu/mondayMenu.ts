import type { DailyMenu } from '../../../types';

export const mondayMenu: DailyMenu = {
  朝食: [{
    name: 'スクランブルエッグ',
    pfc: { protein: 20, fat: 15, carbs: 3 },
    difficulty: 'easy',
    cookingTime: 10,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'ほうれん草', amount: '50g' },
      { name: 'チーズ', amount: '30g' },
      { name: 'バター', amount: '5g' },
      { name: '塩', amount: '3g' }
    ],
    instructions: [
      'ほうれん草を炒める',
      '卵を炒めてチーズを加える',
      'アボカドを添える'
    ],
    detailedInstructions: [
      'ほうれん草を洗い、水気をしっかり切ってざく切りにします',
      'ボウルに卵を割り入れ、塩とコショウで味を調え、軽く溶きほぐします',
      'フライパンにバターを中火で溶かし、ほうれん草を炒めます',
      'ほうれん草がしんなりしたら、取り出します',
      '同じフライパンに残りのバターを足し、溶き卵を流し入れます',
      '木べらで大きく混ぜながら、半熟状態まで炒めます',
      'チーズを加えて軽く混ぜ合わせます',
      '最後にほうれん草を戻し入れ、全体を混ぜ合わせます',
      '器に盛り付けて完成です'
    ]
  }],
  昼食: [{
    name: '鶏胸肉とブロッコリーの炒め物',
    pfc: { protein: 25, fat: 14, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '鶏むね肉', amount: '100g' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'オリーブオイル', amount: '10g' },
      { name: 'にんにく', amount: '1片' },
      { name: '醤油', amount: '5g' }
    ],
    instructions: [
      '鶏肉を一口大に切る',
      'ブロッコリーを小房に分ける',
      '炒めて味付けする'
    ],
    detailedInstructions: [
      '鶏むね肉は一口大に切り、塩コショウで下味をつけます',
      'ブロッコリーは小房に分け、茎は薄切りにします',
      'にんにくはみじん切りにします',
      'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
      '香りが出たら鶏肉を加えて、こんがりと焼き色をつけます',
      '鶏肉に火が通ったら、ブロッコリーを加えます',
      '全体を炒めながら、醤油を加えて味付けします',
      'ブロッコリーが好みの硬さになるまで炒めます',
      '器に盛り付けて完成です'
    ]
  }],
  夕食: [{
    name: '焼き鮭と野菜の盛り合わせ',
    pfc: { protein: 23, fat: 16, carbs: 5 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '鮭', amount: '80g' },
      { name: 'ほうれん草', amount: '100g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'バター', amount: '5g' },
      { name: '醤油', amount: '5g' }
    ],
    instructions: [
      '鮭を焼く',
      'ほうれん草を茹でる',
      'キノコを炒める'
    ],
    detailedInstructions: [
      '鮭は塩をふり、10分ほど置きます',
      'ほうれん草は根を切り、3cm幅に切ります',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      '鍋に湯を沸かし、ほうれん草を1分ほど茹でます',
      '茹でたほうれん草は冷水にとり、水気をしっかり絞ります',
      'フライパンを熱し、鮭を皮目から焼きます（片面3分）',
      '別のフライパンでバターを溶かし、キノコを炒めます',
      'キノコがしんなりしたら醤油を加えて味付けします',
      '鮭、ほうれん草、キノコを彩りよく盛り付けます'
    ]
  }]
};