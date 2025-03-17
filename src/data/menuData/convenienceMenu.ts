import type { DailyMenu } from '../../types';

// コンビニ版（時短重視）のメニュー
export const CONVENIENCE_MENU: DailyMenu[] = [
  // 月曜日
  {
    朝食: [{
      name: "ゆで卵＆素焼きミックスナッツ",
      pfc: { protein: 18.4, fat: 25.4, carbs: 6.6 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "ゆで卵", amount: "2個(120g)" },
        { name: "素焼きミックスナッツ", amount: "30g" }
      ],
      instructions: [
        "ゆで卵を用意（既に調理済みの場合はカットする）",
        "素焼きミックスナッツを皿に盛る",
        "両者を合わせて完成"
      ]
    }],
    昼食: [{
      name: "サラダチキン・ゆで卵＆ブロッコリーサラダ",
      pfc: { protein: 32.7, fat: 6.5, carbs: 3.4 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "サラダチキン", amount: "1パック(110g)" },
        { name: "ゆで卵", amount: "1個(60g)" },
        { name: "ブロッコリー", amount: "50g" }
      ],
      instructions: [
        "ブロッコリーを軽く蒸すか茹でる",
        "ゆで卵をスライスし、サラダチキンは一口大にカットする",
        "全ての食材を器に盛り付ける"
      ]
    }],
    夕食: [{
      name: "ほっけ・とうふそうめん＆即席みそ汁セット",
      pfc: { protein: 35.0, fat: 16.7, carbs: 6.3 },
      difficulty: "easy",
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: "ほっけの塩焼き", amount: "1切(100g)" },
        { name: "とうふそうめん", amount: "1パック(200g)" },
        { name: "即席みそ汁", amount: "1食分(12g)" }
      ],
      instructions: [
        "ほっけをグリルまたはフライパンで焼く",
        "とうふそうめん風はパッケージ通りに用意する",
        "即席みそ汁をお湯で溶かして作る",
        "各品を皿に盛り合わせる"
      ]
    }]
  },

  // 火曜日
  {
    朝食: [{
      name: "プレーンヨーグルト・ゆで卵＆ミックスナッツ",
      pfc: { protein: 15.8, fat: 23.6, carbs: 11.0 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "プレーンヨーグルト", amount: "100g" },
        { name: "ゆで卵", amount: "1個(60g)" },
        { name: "ミックスナッツ", amount: "30g" }
      ],
      instructions: [
        "ヨーグルトを器に盛る",
        "ゆで卵をスライスしてヨーグルトにトッピングする",
        "ミックスナッツを散らして完成"
      ]
    }],
    昼食: [{
      name: "パストラミビーフ・キャンディチーズ＆レタスミックスサラダ",
      pfc: { protein: 22.5, fat: 15.9, carbs: 4.8 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "パストラミビーフ", amount: "1パック(50g)" },
        { name: "キャンディチーズ", amount: "2個(40g)" },
        { name: "レタスミックス", amount: "1袋(100g)" },
        { name: "ゆで卵", amount: "1個(60g)" }
      ],
      instructions: [
        "レタスミックスを洗い、適当な大きさにちぎる",
        "パストラミビーフとキャンディチーズをスライスする",
        "ゆで卵をスライスし、全体を混ぜ合わせる"
      ]
    }],
    夕食: [{
      name: "冷奴・スモークサーモン＆ブロッコリーサラダ",
      pfc: { protein: 15.5, fat: 7.8, carbs: 7.3 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "絹ごし豆腐", amount: "150g" },
        { name: "スモークサーモン", amount: "1パック(50g)" },
        { name: "ブロッコリーサラダ", amount: "1食(50g)" }
      ],
      instructions: [
        "冷奴を器に盛る",
        "スモークサーモンを食べやすい大きさにカットする",
        "ブロッコリーサラダを添えて完成"
      ]
    }]
  },

  // 水曜日
  {
    朝食: [{
      name: "納豆・冷奴＆ゆで卵プレート",
      pfc: { protein: 16.1, fat: 12.2, carbs: 6.0 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "納豆", amount: "1パック(40g)" },
        { name: "絹ごし豆腐", amount: "100g" },
        { name: "ゆで卵", amount: "1個(60g)" }
      ],
      instructions: [
        "納豆をよく混ぜる",
        "冷奴を一口大にカットする",
        "ゆで卵をスライスして盛り付ける"
      ]
    }],
    昼食: [{
      name: "焼き鮭・葉野菜サラダ＆プロセスチーズ",
      pfc: { protein: 21.3, fat: 11.2, carbs: 3.1 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "焼き鮭", amount: "1切(80g)" },
        { name: "レタスミックス", amount: "1食(100g)" },
        { name: "キャンディチーズ", amount: "1枚(20g)" }
      ],
      instructions: [
        "焼き鮭を温めるまたは軽くカットする",
        "葉野菜サラダを用意する",
        "プロセスチーズを添えて完成"
      ]
    }],
    夕食: [{
      name: "焼き鳥＆チョレギサラダ",
      pfc: { protein: 16.0, fat: 13.5, carbs: 6.0 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "焼き鳥", amount: "2本(100g)" },
        { name: "チョレギサラダ", amount: "1食(100g)" }
      ],
      instructions: [
        "焼き鳥をグリルで温める",
        "チョレギサラダを器に盛り合わせる",
        "全体を和えて完成"
      ]
    }]
  },

  // 木曜日
  {
    朝食: [{
      name: "ゆで卵＆さけるチーズ",
      pfc: { protein: 18.4, fat: 15.4, carbs: 1.6 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "ゆで卵", amount: "2個(120g)" },
        { name: "キャンディチーズ", amount: "1本(25g)" }
      ],
      instructions: [
        "ゆで卵を好みの厚さにカットする",
        "さけるチーズを添えて完成"
      ]
    }],
    昼食: [{
      name: "豆腐そうめん・サラダチキン＆半熟卵サラダ",
      pfc: { protein: 38.5, fat: 13.0, carbs: 5.0 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "とうふそうめん", amount: "1パック(200g)" },
        { name: "サラダチキン", amount: "1パック(100g)" },
        { name: "ゆで卵", amount: "1個(60g)" }
      ],
      instructions: [
        "豆腐そうめんをよくほぐす",
        "サラダチキンを手でほぐし、半熟卵をトッピングする",
        "全体を和えて完成"
      ]
    }],
    夕食: [{
      name: "サラダチキン・野菜サラダ＆豚汁セット",
      pfc: { protein: 32.3, fat: 6.2, carbs: 8.8 },
      difficulty: "easy",
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: "サラダチキン", amount: "1パック(110g)" },
        { name: "レタスミックス", amount: "1食(100g)" },
        { name: "豚汁", amount: "1杯(200g)" }
      ],
      instructions: [
        "サラダチキンを薄切りにする",
        "野菜サラダを用意し、温めた豚汁をかける",
        "盛り付けて完成"
      ]
    }]
  },

  // 金曜日
  {
    朝食: [{
      name: "プロテインドリンク＆素焼きナッツ",
      pfc: { protein: 21.0, fat: 15.2, carbs: 15.0 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "プロテインドリンク", amount: "1本(200ml)" },
        { name: "ミックスナッツ", amount: "30g" }
      ],
      instructions: [
        "プロテインドリンクをよくシェイクする",
        "ナッツを添えて完成"
      ]
    }],
    昼食: [{
      name: "豚しゃぶサラダ(ごまだれ)",
      pfc: { protein: 18.0, fat: 15.0, carbs: 7.0 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "豚しゃぶサラダ", amount: "1食(200g)" }
      ],
      instructions: [
        "付属のタレに従い盛り付ける"
      ]
    }],
    夕食: [{
      name: "サバ缶・マヨネーズ＋葉野菜サラダ＆即席みそ汁",
      pfc: { protein: 30.6, fat: 23.9, carbs: 5.7 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "サバ缶", amount: "1缶(190g)" },
        { name: "マヨネーズ", amount: "大さじ1(15g)" },
        { name: "レタスミックス", amount: "1食(100g)" },
        { name: "即席みそ汁", amount: "1食分(12g)" }
      ],
      instructions: [
        "サバ缶をほぐす",
        "マヨネーズと混ぜ合わせる",
        "葉野菜サラダと共に盛り付け、即席みそ汁を添える"
      ]
    }]
  },

  // 土曜日
  {
    朝食: [{
      name: "ロースハム・スライスチーズ＆アーモンド",
      pfc: { protein: 20.0, fat: 22.0, carbs: 6.0 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "ロースハム", amount: "3枚(60g)" },
        { name: "キャンディチーズ", amount: "2枚(40g)" },
        { name: "ミックスナッツ", amount: "20g" }
      ],
      instructions: [
        "ロースハムを食べやすくスライスする",
        "スライスチーズとアーモンドを添えて完成"
      ]
    }],
    昼食: [{
      name: "炙り焼きチャーシュー・ゆで卵＆千切りキャベツサラダ",
      pfc: { protein: 27.9, fat: 33.5, carbs: 8.8 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "炙り焼きチャーシュー", amount: "1パック(80g)" },
        { name: "ゆで卵", amount: "2個(120g)" },
        { name: "レタスミックス", amount: "1食(100g)" },
        { name: "マヨネーズ", amount: "大さじ1(15g)" }
      ],
      instructions: [
        "炙り焼きチャーシューを温める",
        "ゆで卵をスライスする",
        "千切りキャベツと和え、マヨネーズをかける",
        "盛り付けて完成"
      ]
    }],
    夕食: [{
      name: "塩サバフィレ・冷奴＆わかめスープ",
      pfc: { protein: 25.3, fat: 17.4, carbs: 5.7 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "塩サバフィレ", amount: "1切(100g)" },
        { name: "絹ごし豆腐", amount: "100g" },
        { name: "わかめスープ", amount: "1食分(12g)" }
      ],
      instructions: [
        "塩サバフィレを焼く",
        "冷奴をカットして皿に盛る",
        "わかめスープを作り、全体を盛り付ける"
      ]
    }]
  },

  // 日曜日
  {
    朝食: [{
      name: "スモークサーモン・クリームチーズ＆ゆで卵",
      pfc: { protein: 18.2, fat: 22.2, carbs: 2.8 },
      difficulty: "easy",
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: "スモークサーモン", amount: "1パック(50g)" },
        { name: "クリームチーズ", amount: "2個(40g)" },
        { name: "ゆで卵", amount: "1個(60g)" }
      ],
      instructions: [
        "スモークサーモンをカットする",
        "クリームチーズを添え、好みでゆで卵を加える",
        "器に盛り付けて完成"
      ]
    }],
    昼食: [{
      name: "海老とブロッコリーのサラダ",
      pfc: { protein: 10.0, fat: 8.0, carbs: 5.0 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "海老サラダ", amount: "1パック(110g)" }
      ],
      instructions: [
        "海老を加熱または茹でる",
        "ブロッコリーを蒸して、全体を和える",
        "器に盛り付ける"
      ]
    }],
    夕食: [{
      name: "おでん盛り合わせ",
      pfc: { protein: 16.2, fat: 11.2, carbs: 6.0 },
      difficulty: "easy",
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: "おでん", amount: "1個" },
        { name: "白滝", amount: "1袋(50g)" },
        { name: "厚揚げ", amount: "1枚(50g)" },
        { name: "牛すじ", amount: "1本(30g)" }
      ],
      instructions: [
        "各おでん具材を温める",
        "器に盛り合わせて完成"
      ]
    }]
  }
];