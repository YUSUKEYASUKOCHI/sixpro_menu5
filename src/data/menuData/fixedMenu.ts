import type { DailyMenu } from '../../types';

// 食材固定版（ケトジェニック対応）のメニュー
export const FIXED_INGREDIENTS_MENU: DailyMenu[] = [
  // 月曜日
  {
    朝食: [{
      name: 'シンプル目玉焼き＆アボカド',
      pfc: { protein: 20, fat: 25, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'バター', amount: '5g' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'バターを溶かす',
        '卵を焼く',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        'フライパンを中火で熱し、バターを溶かします',
        '卵を割り入れ、白身が固まるまで焼きます',
        '黄身の固さは好みで調整します',
        'アボカドは1/2個を薄くスライスします',
        '卵とアボカドを盛り付け、塩を振って完成です'
      ]
    }],
    昼食: [{
      name: '鶏むね肉のソテー＆ブロッコリー',
      pfc: { protein: 25, fat: 20, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '鶏むね肉', amount: '100g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '鶏肉を一口大に切る',
        'ブロッコリーを小房に分ける',
        '塩を振る',
        'オイルで焼く'
      ],
      detailedInstructions: [
        '鶏むね肉は一口大に切ります',
        'ブロッコリーは小房に分けます',
        '塩を振って下味をつけます',
        'フライパンを中火で熱し、オリーブオイルを入れます',
        '鶏肉を並べ、両面をこんがりと焼きます',
        'ブロッコリーを加えて軽く炒めます',
        '火が通ったら完成です'
      ]
    }],
    夕食: [{
      name: '焼き鮭＆アーモンド',
      pfc: { protein: 23, fat: 28, carbs: 7 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '生鮭', amount: '1切(80g)' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'アーモンド', amount: '15g' },
        { name: 'ほうれん草', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '鮭に塩を振る',
        'ほうれん草を茹でる',
        '両面を焼く',
        'アーモンドを添える'
      ],
      detailedInstructions: [
        '鮭は両面に塩を振り、10分ほど置きます',
        'ほうれん草を茹でて水気を絞ります',
        'フライパンを中火で熱し、オリーブオイルを入れます',
        '鮭を皮目から焼きます',
        '両面に焼き色がついたら完成です',
        'ほうれん草とアーモンドを添えます'
      ]
    }]
  },
  // 火曜日
  {
    朝食: [{
      name: 'ゆで卵＆アボカド',
      pfc: { protein: 18, fat: 24, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '卵を茹でる',
        '殻をむく',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        '鍋に水を入れ、沸騰させます',
        '卵を静かに入れ、7分茹でます',
        '氷水で冷やし、殻をむきます',
        'アボカドは1/2個を薄くスライスします',
        '卵とアボカドを盛り付け、塩を振って完成です'
      ]
    }],
    昼食: [{
      name: 'サバの塩焼き＆ブロッコリー',
      pfc: { protein: 24, fat: 22, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1切(80g)' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'サバに塩を振る',
        'ブロッコリーを茹でる',
        '両面を焼く'
      ],
      detailedInstructions: [
        'サバは両面に塩を振り、10分ほど置きます',
        'ブロッコリーを小房に分け、茹でます',
        'フライパンを中火で熱し、オリーブオイルを入れます',
        'サバを皮目から焼きます',
        '両面に焼き色がついたら完成です',
        'ブロッコリーを添えます'
      ]
    }],
    夕食: [{
      name: '豚肉のソテー＆アーモンド',
      pfc: { protein: 25, fat: 26, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '豚ロース', amount: '100g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '豚肉を一口大に切る',
        '塩を振る',
        'オイルで焼く',
        'アーモンドを添える'
      ],
      detailedInstructions: [
        '豚肉は一口大に切ります',
        '塩を振って下味をつけます',
        'フライパンを中火で熱し、オイルを入れます',
        '豚肉を並べ、両面を焼きます',
        '火が通ったら取り出します',
        'アーモンドを添えて完成です'
      ]
    }]
  },
  // 水曜日
  {
    朝食: [{
      name: 'スクランブルエッグ＆アボカド',
      pfc: { protein: 20, fat: 25, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'バター', amount: '5g' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '卵を溶く',
        'バターで炒める',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        '卵を割りほぐし、塩を加えて混ぜます',
        'フライパンを中火で熱し、バターを溶かします',
        '溶き卵を入れ、木べらで大きく混ぜながら炒めます',
        '好みの固さになったら取り出します',
        'アボカドを薄くスライスして添えます'
      ]
    }],
    昼食: [{
      name: '鶏むね肉の塩焼き＆ブロッコリー',
      pfc: { protein: 26, fat: 21, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '鶏むね肉', amount: '120g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '鶏肉に塩を振る',
        'ブロッコリーを茹でる',
        'オイルで焼く'
      ],
      detailedInstructions: [
        '鶏むね肉は厚みを均一にし、塩を振ります',
        'ブロッコリーを小房に分け、茹でます',
        'フライパンを中火で熱し、オイルを入れます',
        '鶏肉を並べ、両面をこんがりと焼きます',
        '中まで火が通ったら完成です',
        'ブロッコリーを添えます'
      ]
    }],
    夕食: [{
      name: '豚肉の塩焼き＆アーモンド',
      pfc: { protein: 24, fat: 24, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '豚ロース', amount: '100g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '豚肉に塩を振る',
        'オイルで焼く',
        'アーモンドを添える'
      ],
      detailedInstructions: [
        '豚肉は筋を切り、塩を振ります',
        'フライパンを中火で熱し、オイルを入れます',
        '豚肉を並べ、両面を焼きます',
        '好みの焼き加減になったら取り出します',
        'アーモンドを添えて完成です'
      ]
    }]
  },
  // 木曜日
  {
    朝食: [{
      name: '目玉焼き＆アボカド',
      pfc: { protein: 20, fat: 23, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'バター', amount: '5g' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'バターを溶かす',
        '卵を焼く',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        'フライパンを中火で熱し、バターを溶かします',
        '卵を割り入れ、白身が固まるまで焼きます',
        '黄身は好みの固さに調整します',
        'アボカドを薄くスライスして添えます',
        '塩を振って完成です'
      ]
    }],
    昼食: [{
      name: '鮭の塩焼き＆ブロッコリー',
      pfc: { protein: 23, fat: 21, carbs: 5 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '生鮭', amount: '1切(80g)' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '鮭に塩を振る',
        'ブロッコリーを茹でる',
        '両面を焼く'
      ],
      detailedInstructions: [
        '鮭は両面に塩を振り、10分ほど置きます',
        'ブロッコリーを小房に分け、茹でます',
        'フライパンを中火で熱し、オイルを入れます',
        '鮭を皮目から焼きます',
        '両面に焼き色がついたら完成です',
        'ブロッコリーを添えます'
      ]
    }],
    夕食: [{
      name: '豚しゃぶ＆アーモンド',
      pfc: { protein: 24, fat: 24, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '豚ロース', amount: '100g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'お湯を沸かす',
        '豚肉をしゃぶしゃぶする',
        'アーモンドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        '鍋に水を沸かし、塩を少々加えます',
        '豚肉を一枚ずつしゃぶしゃぶします',
        '火が通ったら取り出します',
        'アーモンドを添えます',
        '塩を振って完成です'
      ]
    }]
  },
  // 金曜日
  {
    朝食: [{
      name: 'スクランブルエッグ＆アボカド',
      pfc: { protein: 20, fat: 25, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'バター', amount: '5g' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '卵を溶く',
        'バターで炒める',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        '卵を割りほぐし、塩を加えて混ぜます',
        'フライパンを中火で熱し、バターを溶かします',
        '溶き卵を入れ、木べらで大きく混ぜながら炒めます',
        '好みの固さになったら取り出します',
        'アボカドを薄くスライスして添えます'
      ]
    }],
    昼食: [{
      name: '豚肉の塩焼き＆ブロッコリー',
      pfc: { protein: 28, fat: 22, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '豚ロース', amount: '150g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '豚肉に塩を振る',
        'ブロッコリーを茹でる',
        'オイルで焼く'
      ],
      detailedInstructions: [
        '豚肉は筋を切り、塩を振ります',
        'ブロッコリーを小房に分け、茹でます',
        'フライパンを中火で熱し、オイルを入れます',
        '豚肉を並べ、両面を焼きます',
        '好みの焼き加減になったら完成です',
        'ブロッコリーを添えます'
      ]
    }],
    夕食: [{
      name: 'サバの塩焼き＆アーモンド',
      pfc: { protein: 26, fat: 22, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1切(80g)' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'サバに塩を振る',
        '両面を焼く',
        'アーモンドを添える'
      ],
      detailedInstructions: [
        'サバは両面に塩を振り、10分ほど置きます',
        'フライパンを中火で熱し、オイルを入れます',
        'サバを皮目から焼きます',
        '両面に焼き色がついたら取り出します',
        'アーモンドを添えて完成です'
      ]
    }]
  },
  // 土曜日
  {
    朝食: [{
      name: '目玉焼き＆アボカド',
      pfc: { protein: 20, fat: 25, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'バター', amount: '5g' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'バターを溶かす',
        '卵を焼く',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        'フライパンを中火で熱し、バターを溶かします',
        '卵を割り入れ、白身が固まるまで焼きます',
        '黄身は好みの固さに調整します',
        'アボカドを薄くスライスして添えます',
        '塩を振って完成です'
      ]
    }],
    昼食: [{
      name: '豚肉の塩焼き＆ブロッコリー',
      pfc: { protein: 24, fat: 20, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '豚ロース', amount: '100g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '豚肉に塩を振る',
        'ブロッコリーを茹でる',
        'オイルで焼く'
      ],
      detailedInstructions: [
        '豚肉は筋を切り、塩を振ります',
        'ブロッコリーを小房に分け、茹でます',
        'フライパンを中火で熱し、オイルを入れます',
        '豚肉を並べ、両面を焼きます',
        '好みの焼き加減になったら完成です',
        'ブロッコリーを添えます'
      ]
    }],
    夕食: [{
      name: '鮭の塩焼き＆アーモンド',
      pfc: { protein: 25, fat: 24, carbs: 7 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '生鮭', amount: '1切(80g)' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '鮭に塩を振る',
        '両面を焼く',
        'アーモンドを添える'
      ],
      detailedInstructions: [
        '鮭は両面に塩を振り、10分ほど置きます',
        'フライパンを中火で熱し、オイルを入れます',
        '鮭を皮目から焼きます',
        '両面に焼き色がついたら取り出します',
        'アーモンドを添えて完成です'
      ]
    }]
  },
  // 日曜日
  {
    朝食: [{
      name: 'ゆで卵＆アボカド',
      pfc: { protein: 18, fat: 24, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'アボカド', amount: '1/2個' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '卵を茹でる',
        '殻をむく',
        'アボカドを添える',
        '塩を振る'
      ],
      detailedInstructions: [
        '鍋に水を入れ、沸騰させます',
        '卵を静かに入れ、7分茹でます',
        '氷水で冷やし、殻をむきます',
        'アボカドを薄くスライスして添えます',
        '塩を振って完成です'
      ]
    }],
    昼食: [{
      name: '鶏むね肉の塩焼き＆ブロッコリー',
      pfc: { protein: 25, fat: 21, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '鶏むね肉', amount: '120g' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        '鶏肉に塩を振る',
        'ブロッコリーを茹でる',
        'オイルで焼く'
      ],
      detailedInstructions: [
        '鶏むね肉は厚みを均一にし、塩を振ります',
        'ブロッコリーを小房に分け、茹でます',
        'フライパンを中火で熱し、オイルを入れます',
        '鶏肉を並べ、両面をこんがりと焼きます',
        '中まで火が通ったら完成です',
        'ブロッコリーを添えます'
      ]
    }],
    夕食: [{
      name: 'サバの塩焼き＆アーモンド',
      pfc: { protein: 24, fat: 24, carbs: 6 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1切(80g)' },
        { name: 'オリーブオイル', amount: '10g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '塩', amount: '少々' }
      ],
      instructions: [
        'サバに塩を振る',
        '両面を焼く',
        'アーモンドを添える'
      ],
      detailedInstructions: [
        'サバは両面に塩を振り、10分ほど置きます',
        'フライパンを中火で熱し、オイルを入れます',
        'サバを皮目から焼きます',
        '両面に焼き色がついたら取り出します',
        'アーモンドを添えて完成です'
      ]
    }]
  }
];