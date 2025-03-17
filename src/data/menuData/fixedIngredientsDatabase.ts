import type { FoodItem } from '../../types';

// 食材固定版用の食材データベース
export const FIXED_INGREDIENTS_DATABASE: FoodItem[] = [
  // 肉類
  {
    name: "鶏むね肉",
    size: "100g",
    pfc: {
      protein: 31.0,
      fat: 3.6,
      carbs: 0.0,
      calories: 165
    },
    unit: "g",
    notes: "胸肉, 鶏肉 (皮なし)"
  },
  {
    name: "豚ロース",
    size: "100g",
    pfc: {
      protein: 20.0,
      fat: 12.0,
      carbs: 0.0,
      calories: 210
    },
    unit: "g",
    notes: "豚肉, ロース肉"
  },

  // 魚介類
  {
    name: "生鮭",
    size: "1切(80g)",
    pfc: {
      protein: 20.0,
      fat: 13.0,
      carbs: 0.0,
      calories: 200
    },
    unit: "切",
    notes: "鮭, 生鮭切り身"
  },
  {
    name: "サバ",
    size: "1切(80g)",
    pfc: {
      protein: 20.0,
      fat: 13.0,
      carbs: 0.0,
      calories: 230
    },
    unit: "切",
    notes: "鯖, サバ切り身"
  },

  // 卵・乳製品
  {
    name: "卵",
    size: "1個(60g)",
    pfc: {
      protein: 10.3,
      fat: 8.7,
      carbs: 0.5,
      calories: 128
    },
    unit: "個",
    notes: "全卵"
  },
  {
    name: "チーズ",
    size: "30g",
    pfc: {
      protein: 25.0,
      fat: 33.0,
      carbs: 1.3,
      calories: 400
    },
    unit: "g",
    notes: "チェダーチーズ, カマンベール, モッツァレラ"
  },

  // 野菜類
  {
    name: "ほうれん草",
    size: "100g",
    pfc: {
      protein: 2.9,
      fat: 0.4,
      carbs: 3.6,
      calories: 23
    },
    unit: "g",
    notes: "小松菜, 水菜, チンゲン菜"
  },
  {
    name: "ブロッコリー",
    size: "100g",
    pfc: {
      protein: 2.8,
      fat: 0.4,
      carbs: 6.6,
      calories: 34
    },
    unit: "g",
    notes: "ブロッコリー, キャベツ代替可"
  },
  {
    name: "キャベツ",
    size: "150g",
    pfc: {
      protein: 1.3,
      fat: 0.1,
      carbs: 5.8,
      calories: 25
    },
    unit: "g",
    notes: "白菜, サンチュ"
  },
  {
    name: "キノコ類",
    size: "100g",
    pfc: {
      protein: 3.1,
      fat: 0.3,
      carbs: 3.3,
      calories: 22
    },
    unit: "g",
    notes: "マッシュルーム, シイタケ, エノキ"
  },
  {
    name: "レタス",
    size: "100g",
    pfc: {
      protein: 1.4,
      fat: 0.2,
      carbs: 2.9,
      calories: 15
    },
    unit: "g",
    notes: "サンチュ, ベビーリーフ"
  },
  {
    name: "トマト",
    size: "1個",
    pfc: {
      protein: 0.9,
      fat: 0.2,
      carbs: 3.9,
      calories: 18
    },
    unit: "個",
    notes: "プチトマト, ミディアムサイズも可"
  },
  {
    name: "キュウリ",
    size: "1本",
    pfc: {
      protein: 0.7,
      fat: 0.1,
      carbs: 3.6,
      calories: 16
    },
    unit: "本",
    notes: "きゅうり"
  },

  // 調味料・油
  {
    name: "オリーブオイル",
    size: "大さじ1(15g)",
    pfc: {
      protein: 0.0,
      fat: 100.0,
      carbs: 0.0,
      calories: 884
    },
    unit: "大さじ",
    notes: "エキストラバージンオリーブオイル"
  },
  {
    name: "バター",
    size: "大さじ1(15g)",
    pfc: {
      protein: 0.9,
      fat: 81.0,
      carbs: 0.1,
      calories: 717
    },
    unit: "大さじ",
    notes: "無塩バター"
  },

  // その他
  {
    name: "アボカド",
    size: "1/2個(約100g)",
    pfc: {
      protein: 2.0,
      fat: 15.0,
      carbs: 9.0,
      calories: 160
    },
    unit: "個",
    notes: "牛油果"
  },
  {
    name: "醤油",
    size: "大さじ1(15ml)",
    pfc: {
      protein: 8.0,
      fat: 0.0,
      carbs: 5.0,
      calories: 53
    },
    unit: "大さじ",
    notes: "しょうゆ, 醤油(低塩)も可"
  },
  {
    name: "にんにく",
    size: "1片(5g)",
    pfc: {
      protein: 6.4,
      fat: 0.5,
      carbs: 33.0,
      calories: 149
    },
    unit: "片",
    notes: "ガーリック"
  },
  {
    name: "生姜",
    size: "1かけ(10g)",
    pfc: {
      protein: 1.8,
      fat: 0.8,
      carbs: 17.8,
      calories: 80
    },
    unit: "かけ",
    notes: "しょうが, ジンジャー"
  },
  {
    name: "アーモンド",
    size: "30g",
    pfc: {
      protein: 21.2,
      fat: 49.9,
      carbs: 21.6,
      calories: 579
    },
    unit: "g",
    notes: "アーモンド, アーモンド類"
  },
  {
    name: "クルミ",
    size: "15g",
    pfc: {
      protein: 15,
      fat: 65,
      carbs: 14,
      calories: 654
    },
    unit: "g",
    notes: "クルミ, ウォルナッツ"
  }
];