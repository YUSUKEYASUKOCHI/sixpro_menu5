import type { DailyMenu } from '../../../types';

export const saturdayMenu: DailyMenu = {
  朝食: [{
    name: 'キノコとチーズのオムレツ',
    pfc: { protein: 20, fat: 15, carbs: 3 },
    difficulty: 'medium',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'キノコ類', amount: '50g' },
      { name: 'チーズ', amount: '30g' },
      { name: 'バター', amount: '5g' },
      { name: 'トマト', amount: '1/2個' }
    ],
    instructions: [
      'キノコを炒める',
      '卵を流し入れる',
      'チーズを加える',
      'トマトを添える'
    ],
    detailedInstructions: [
      'キノコ類は石づきを取り、食べやすい大きさに切ります',
      '卵を割りほぐし、塩コショウで味付けします',
      'チーズは細かく刻みます',
      'トマトは薄切りにします',
      'フライパンを中火で熱し、バター半量でキノコを炒めます',
      'キノコがしんなりしたら一旦取り出します',
      '残りのバターを溶かし、溶き卵を流し入れます',
      '半熟状態になったら、キノコとチーズを散らします',
      'オムレツの端を折り、三つ折りにします',
      'トマトを添えて完成です'
    ]
  }],
  昼食: [{
    name: '豚肉の生姜焼き',
    pfc: { protein: 24, fat: 14, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'キャベツ', amount: '150g' },
      { name: '生姜', amount: '1かけ' },
      { name: '醤油', amount: '5g' },
      { name: 'オリーブオイル', amount: '10g' }
    ],
    instructions: [
      '豚肉を焼く',
      'キャベツを千切り',
      '生姜と醤油で味付け'
    ],
    detailedInstructions: [
      '豚肉は筋を切り、塩コショウをします',
      '生姜はすりおろします',
      'キャベツは食べやすい大きさにざく切りにします',
      '醤油と生姜を混ぜ合わせます',
      'フライパンを中火で熱し、オリーブオイルを入れます',
      '豚肉を並べ、両面を焼きます（片面2-3分）',
      '焼き色がついたら生姜醤油を加えて絡めます',
      'キャベツは電子レンジで1分加熱します',
      '豚肉とキャベツを盛り付けます',
      '残った生姜醤油をかけて完成です'
    ]
  }],
  夕食: [{
    name: '鮭のムニエル',
    pfc: { protein: 25, fat: 16, carbs: 5 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '生鮭', amount: '1切(80g)' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'バター', amount: '10g' },
      { name: 'レモン', amount: '1/4個' },
      { name: 'オリーブオイル', amount: '5g' }
    ],
    instructions: [
      '鮭をバターで焼く',
      'ブロッコリーを蒸す',
      'レモンを絞る',
      'オリーブオイルをかける'
    ],
    detailedInstructions: [
      '鮭は塩コショウをし、10分ほど置きます',
      'ブロッコリーは小房に分け、茎は斜め薄切りにします',
      'レモンは薄切りにします',
      'フライパンを中火で熱し、バター半量を溶かします',
      '鮭を皮目から焼きます（片面3-4分）',
      '裏返して残りのバターを加え、全体に絡めます',
      'ブロッコリーは電子レンジで2分加熱します',
      'ブロッコリーにオリーブオイルを回しかけます',
      '鮭とブロッコリーを盛り付けます',
      'レモンを添え、果汁を絞って完成です'
    ]
  }]
};