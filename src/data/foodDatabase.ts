import type { FoodItem } from '../types';

// ================================
// ① 追加する全食品データ（foodItems1 / foodItems2）
// ================================

// ①-1. 食品データ群その１
const foodItems1: FoodItem[] = [
  {
    name: "鶏むね肉",
    size: "100g",
    pfc: { protein: 23.3, fat: 1.9, carbs: 0.1, calories: 105 },
    unit: "g",
    notes: "鶏もも肉(皮付き), 鴨胸肉, ターキー"
  },
  {
    name: "豚ロース",
    size: "100g",
    pfc: { protein: 22.7, fat: 5.6, carbs: 0.3, calories: 140 },
    unit: "g",
    notes: "豚バラ肉, 牛ロース, ラムロース"
  },
  {
    name: "生鮭",
    size: "100g",
    pfc: { protein: 22.5, fat: 4.5, carbs: 0.1, calories: 127 },
    unit: "g",
    notes: "サーモン(アトランティック), ぶり, 鯖"
  },
  {
    name: "サバ",
    size: "100g",
    pfc: { protein: 20.6, fat: 16.8, carbs: 0.3, calories: 211 },
    unit: "g",
    notes: "イワシ, サンマ, 鰹(脂の多い部位)"
  },
  {
    name: "卵",
    size: "1個(約50g)",
    pfc: { protein: 6.2, fat: 5.2, carbs: 0.2, calories: 76 },
    unit: "個",
    notes: "うずらの卵, 卵白＋卵黄のバランスを変えて調節可"
  },
  {
    name: "チーズ",
    size: "100g",
    pfc: { protein: 20.6, fat: 26.0, carbs: 1.2, calories: 321 },
    unit: "g",
    notes: "チェダーチーズ, モッツァレラチーズ, ゴーダチーズ"
  },
  {
    name: "クリームチーズ",
    size: "100g",
    pfc: { protein: 8.2, fat: 33.0, carbs: 2.3, calories: 346 },
    unit: "g",
    notes: "マスカルポーネ, サワークリーム, ギリシャヨーグルト(低糖)"
  },
  {
    name: "ほうれん草",
    size: "100g",
    pfc: { protein: 2.2, fat: 0.4, carbs: 3.1, calories: 18 },
    unit: "g",
    notes: "ケール, スイスチャード, 小松菜"
  },
  {
    name: "ブロッコリー",
    size: "100g",
    pfc: { protein: 5.4, fat: 0.6, carbs: 6.6, calories: 37 },
    unit: "g",
    notes: "カリフラワー, 芽キャベツ, ロマネスコ"
  },
  {
    name: "キャベツ",
    size: "100g",
    pfc: { protein: 1.3, fat: 0.2, carbs: 5.2, calories: 23 },
    unit: "g",
    notes: "白菜, レタス, サニーレタス"
  },
  {
    name: "キノコ類",
    size: "100g",
    pfc: { protein: 2.0, fat: 0.3, carbs: 5.0, calories: 15 },
    unit: "g",
    notes: "しいたけ, しめじ, まいたけ"
  },
  {
    name: "レタス",
    size: "100g",
    pfc: { protein: 0.8, fat: 0.2, carbs: 2.9, calories: 13 },
    unit: "g",
    notes: "リーフレタス, サラダ菜, ベビーリーフ"
  },
  {
    name: "トマト",
    size: "100g",
    pfc: { protein: 0.7, fat: 0.1, carbs: 4.7, calories: 20 },
    unit: "g",
    notes: "ミニトマト, パプリカ(赤), ズッキーニ"
  },
  {
    name: "玉ねぎ",
    size: "100g",
    pfc: { protein: 1.0, fat: 0.1, carbs: 8.4, calories: 33 },
    unit: "g",
    notes: "長ねぎ, エシャロット, チャイブ"
  },
  {
    name: "キュウリ",
    size: "100g",
    pfc: { protein: 1.0, fat: 0.1, carbs: 3.0, calories: 13 },
    unit: "g",
    notes: "ズッキーニ, セロリ, ピーマン"
  },
  {
    name: "オリーブオイル",
    size: "100g",
    pfc: { protein: 0.0, fat: 100.0, carbs: 0.0, calories: 884 },
    unit: "g",
    notes: "MCTオイル, ココナッツオイル, アボカドオイル"
  },
  {
    name: "バター",
    size: "100g",
    pfc: { protein: 0.6, fat: 81.0, carbs: 0.2, calories: 700 },
    unit: "g",
    notes: "ギー, 無塩バター, ラード"
  },
  {
    name: "醤油",
    size: "100g",
    pfc: { protein: 7.7, fat: 0.0, carbs: 7.9, calories: 76 },
    unit: "g",
    notes: "薄口醤油, グルテンフリー醤油, ココナッツアミノ"
  },
  {
    name: "味噌",
    size: "100g",
    pfc: { protein: 12.5, fat: 6.0, carbs: 21.9, calories: 182 },
    unit: "g",
    notes: "塩こうじ, 豆板醤(辛味あり), ココナッツアミノ"
  },
  {
    name: "にんにく",
    size: "100g",
    pfc: { protein: 6.4, fat: 0.9, carbs: 27.5, calories: 129 },
    unit: "g",
    notes: "ガーリックパウダー, オニオンパウダー(風味付けに少量), 香味野菜ミックス"
  },
  {
    name: "生姜",
    size: "100g",
    pfc: { protein: 0.9, fat: 0.3, carbs: 6.6, calories: 30 },
    unit: "g",
    notes: "乾燥生姜パウダー, ウコン(ターメリック), ガランガー"
  },
  {
    name: "レモン",
    size: "100g",
    pfc: { protein: 0.4, fat: 0.2, carbs: 8.6, calories: 26 },
    unit: "g",
    notes: "ライム, 酢(米酢・リンゴ酢), 白ワインビネガー"
  },
  {
    name: "ハーブミックス",
    size: "100g",
    pfc: { protein: 9.2, fat: 4.8, carbs: 70.9, calories: 364 },
    unit: "g",
    notes: "バジル, オレガノ, タイム"
  },
  {
    name: "アボカド",
    size: "100g",
    pfc: { protein: 2.1, fat: 17.5, carbs: 7.9, calories: 176 },
    unit: "g",
    notes: "オリーブ(果肉), ナッツバター(ペースト), ココナッツミルク"
  },
  {
    name: "アーモンド",
    size: "100g",
    pfc: { protein: 19.6, fat: 51.8, carbs: 20.9, calories: 609 },
    unit: "g",
    notes: "ピーナッツ, ピーカンナッツ, マカダミアナッツ"
  },
  {
    name: "クルミ",
    size: "100g",
    pfc: { protein: 14.6, fat: 68.8, carbs: 11.7, calories: 713 },
    unit: "g",
    notes: "ピーカンナッツ, ヘーゼルナッツ, ブラジルナッツ"
  }
];

// ①-2. 食品データ群その２
const foodItems2: FoodItem[] = [
  {
    name: "ゆで卵",
    size: "2個(120g)",
    pfc: { calories: 154, protein: 12.4, fat: 10.4, carbs: 0.6 },
    unit: "個",
    notes: "温泉卵, 半熟卵, 味付き玉子"
  },
  {
    name: "素焼きミックスナッツ",
    size: "30g",
    pfc: { calories: 180, protein: 6.0, fat: 15.0, carbs: 6.0 },
    unit: "g",
    notes: "アーモンド, くるみ, 無塩ピーナッツ"
  },
  {
    name: "サラダチキン",
    size: "1パック(110g)",
    pfc: { calories: 114, protein: 25.0, fat: 1.0, carbs: 0.3 },
    unit: "パック",
    notes: "スモークチキン, ハーブチキン, ツナ缶(油漬け)"
  },
  {
    name: "ゆで卵",
    size: "1個(60g)",
    pfc: { calories: 77, protein: 6.2, fat: 5.2, carbs: 0.3 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "ブロッコリー",
    size: "50g",
    pfc: { calories: 15, protein: 1.5, fat: 0.3, carbs: 2.8 },
    unit: "g",
    notes: "ほうれん草, アボカド, カリフラワー"
  },
  {
    name: "ほっけの塩焼き",
    size: "1切(100g)",
    pfc: { calories: 190, protein: 23.0, fat: 10.0, carbs: 0.3 },
    unit: "切",
    notes: "サバ塩焼き, 鮭切り身, アジ塩焼き"
  },
  {
    name: "とうふそうめん風",
    size: "1パック(200g)",
    pfc: { calories: 110, protein: 10.0, fat: 6.0, carbs: 3.0 },
    unit: "パック",
    notes: "こんにゃく麺, しらたき麺, 糖質0g麺"
  },
  {
    name: "即席みそ汁",
    size: "1食分(12g粉末)",
    pfc: { calories: 30, protein: 2.0, fat: 0.7, carbs: 3.0 },
    unit: "食分",
    notes: "インスタントコンソメスープ, わかめスープ"
  },
  {
    name: "プレーンヨーグルト(無糖)",
    size: "100g",
    pfc: { calories: 62, protein: 3.6, fat: 3.4, carbs: 4.7 },
    unit: "g",
    notes: "無糖ギリシャヨーグルト, カスピ海ヨーグルト"
  },
  {
    name: "ゆで卵",
    size: "1個(60g)",
    pfc: { calories: 77, protein: 6.2, fat: 5.2, carbs: 0.3 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "ミックスナッツ",
    size: "30g",
    pfc: { calories: 180, protein: 6.0, fat: 15.0, carbs: 6.0 },
    unit: "g",
    notes: "アーモンド, くるみ, 無塩ピーナッツ"
  },
  {
    name: "パストラミビーフ",
    size: "1パック(50g)",
    pfc: { calories: 60, protein: 9.0, fat: 1.5, carbs: 1.0 },
    unit: "パック",
    notes: "ローストビーフ, ビーフジャーキー, サラミ"
  },
  {
    name: "キャンディチーズ",
    size: "2個(40g)",
    pfc: { calories: 120, protein: 6.0, fat: 9.0, carbs: 1.0 },
    unit: "個",
    notes: "ベビーチーズ, 6Pチーズ, モッツァレラチーズ"
  },
  {
    name: "レタスミックス",
    size: "1袋(100g)",
    pfc: { calories: 14, protein: 1.3, fat: 0.2, carbs: 2.5 },
    unit: "袋",
    notes: "サンチュ, ベビーリーフ, キャベツ千切り"
  },
  {
    name: "ゆで卵",
    size: "1個(60g)",
    pfc: { calories: 77, protein: 6.2, fat: 5.2, carbs: 0.3 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "冷奴(絹ごし豆腐)",
    size: "150g",
    pfc: { calories: 84, protein: 5.0, fat: 4.5, carbs: 4.0 },
    unit: "g",
    notes: "木綿豆腐, 枝豆豆腐, 高野豆腐(戻し)"
  },
  {
    name: "スモークサーモン",
    size: "1パック(50g)",
    pfc: { calories: 70, protein: 9.0, fat: 3.0, carbs: 0.5 },
    unit: "パック",
    notes: "刺身用サーモン, サラダチキン(魚系), しめサバ"
  },
  {
    name: "ブロッコリーサラダ",
    size: "1食(50g)",
    pfc: { calories: 15, protein: 1.5, fat: 0.3, carbs: 2.8 },
    unit: "食",
    notes: "ほうれん草サラダ, キャベツサラダ, カリフラワー"
  },
  {
    name: "納豆",
    size: "1パック(40g)",
    pfc: { calories: 80, protein: 6.6, fat: 4.0, carbs: 3.0 },
    unit: "パック",
    notes: "オクラ, メカブ, 豆腐+味付け"
  },
  {
    name: "冷奴(絹ごし豆腐)",
    size: "100g",
    pfc: { calories: 56, protein: 3.3, fat: 3.0, carbs: 2.7 },
    unit: "g",
    notes: "木綿豆腐, 枝豆豆腐, 高野豆腐(戻し)"
  },
  {
    name: "ゆで卵",
    size: "1個(60g)",
    pfc: { calories: 77, protein: 6.2, fat: 5.2, carbs: 0.3 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "焼き鮭(塩鮭)",
    size: "1切(80g)",
    pfc: { calories: 130, protein: 16.0, fat: 7.0, carbs: 0.1 },
    unit: "切",
    notes: "サバ塩焼き, アジ干物, 焼き鯖フィレ"
  },
  {
    name: "葉野菜サラダ",
    size: "1食(100g)",
    pfc: { calories: 14, protein: 1.3, fat: 0.2, carbs: 2.5 },
    unit: "食",
    notes: "サンチュ, ベビーリーフ, レタスミックス"
  },
  {
    name: "チーズ(プロセス)",
    size: "1枚(20g)",
    pfc: { calories: 60, protein: 4.0, fat: 4.0, carbs: 0.5 },
    unit: "枚",
    notes: "6Pチーズ, スライスチーズ, キャンディチーズ"
  },
  {
    name: "焼き鳥(塩)",
    size: "2本(100g)",
    pfc: { calories: 160, protein: 13.0, fat: 10.0, carbs: 1.0 },
    unit: "本",
    notes: "炙り焼き豚, サラダチキン(カット), 焼き魚系総菜"
  },
  {
    name: "チョレギサラダ",
    size: "1食(100g)",
    pfc: { calories: 60, protein: 3.0, fat: 3.5, carbs: 5.0 },
    unit: "食",
    notes: "わかめサラダ, ゴマドレッサラダ, 海藻ミックスサラダ"
  },
  {
    name: "ゆで卵",
    size: "2個(120g)",
    pfc: { calories: 154, protein: 12.4, fat: 10.4, carbs: 0.6 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "さけるチーズ",
    size: "1本(25g)",
    pfc: { calories: 76, protein: 6.0, fat: 5.0, carbs: 1.0 },
    unit: "本",
    notes: "ベビーチーズ, 6Pチーズ, スティックチーズ"
  },
  {
    name: "豆腐そうめん(胡麻だれ)",
    size: "1パック(200g)",
    pfc: { calories: 120, protein: 10.0, fat: 6.0, carbs: 4.0 },
    unit: "パック",
    notes: "こんにゃく麺, しらたき麺, 糖質0g麺"
  },
  {
    name: "サラダチキン(ほぐし)",
    size: "1パック(100g)",
    pfc: { calories: 105, protein: 22.0, fat: 1.0, carbs: 0.5 },
    unit: "パック",
    notes: "ツナ缶(油漬け), スモークサーモンフレーク, カット焼き豚"
  },
  {
    name: "半熟卵",
    size: "1個(60g)",
    pfc: { calories: 90, protein: 6.5, fat: 6.0, carbs: 0.5 },
    unit: "個",
    notes: "味付き玉子, ゆで卵"
  },
  {
    name: "サラダチキン",
    size: "1パック(110g)",
    pfc: { calories: 114, protein: 25.0, fat: 1.0, carbs: 0.3 },
    unit: "パック",
    notes: "ハーブチキン, スモークチキン, ささみプロテインバー"
  },
  {
    name: "野菜サラダ",
    size: "1食(100g)",
    pfc: { calories: 14, protein: 1.3, fat: 0.2, carbs: 2.5 },
    unit: "食",
    notes: "葉野菜ミックス, ベビーリーフ, キャベツ千切り"
  },
  {
    name: "具だくさん豚汁",
    size: "1杯(200g)",
    pfc: { calories: 100, protein: 6.0, fat: 5.0, carbs: 6.0 },
    unit: "杯",
    notes: "けんちん汁(低糖質野菜中心), インスタントみそ汁+豚肉追加"
  },
  {
    name: "プロテインドリンク(ザバス等)",
    size: "1本(200ml)",
    pfc: { calories: 100, protein: 15.0, fat: 0.2, carbs: 9.0 },
    unit: "本",
    notes: "豆乳プロテイン, ギリシャヨーグルト+プロテインパウダー"
  },
  {
    name: "素焼きナッツ",
    size: "30g",
    pfc: { calories: 180, protein: 6.0, fat: 15.0, carbs: 6.0 },
    unit: "g",
    notes: "アーモンド, くるみ, 無塩ピーナッツ"
  },
  {
    name: "豚しゃぶサラダ(ごまだれ)",
    size: "1食(200g)",
    pfc: { calories: 250, protein: 18.0, fat: 15.0, carbs: 7.0 },
    unit: "食",
    notes: "蒸し鶏サラダ, 焼肉サラダ, 生ハムサラダ"
  },
  {
    name: "サバ缶(水煮)",
    size: "1缶(190g)",
    pfc: { calories: 210, protein: 27.0, fat: 12.0, carbs: 0.0 },
    unit: "缶",
    notes: "サバ缶(味噌煮/醤油煮), ツナ缶(油漬け), いわし缶"
  },
  {
    name: "マヨネーズ",
    size: "大さじ1(15g)",
    pfc: { calories: 100, protein: 0.3, fat: 11.0, carbs: 0.2 },
    unit: "大さじ",
    notes: "オリーブオイル+塩, ごまドレッシング, アボカドペースト"
  },
  {
    name: "葉野菜サラダ",
    size: "1食(100g)",
    pfc: { calories: 14, protein: 1.3, fat: 0.2, carbs: 2.5 },
    unit: "食",
    notes: "ベビーリーフ, サンチュ, キャベツ千切り"
  },
  {
    name: "即席みそ汁",
    size: "1食分(12g粉末)",
    pfc: { calories: 30, protein: 2.0, fat: 0.7, carbs: 3.0 },
    unit: "食分",
    notes: "インスタントコンソメスープ, わかめスープ"
  },
  {
    name: "ロースハム",
    size: "3枚(60g)",
    pfc: { calories: 70, protein: 8.0, fat: 3.0, carbs: 1.0 },
    unit: "枚",
    notes: "パストラミポーク, 生ハム(塩分注意), サラダチキンスライス"
  },
  {
    name: "スライスチーズ",
    size: "2枚(40g)",
    pfc: { calories: 130, protein: 8.0, fat: 9.0, carbs: 1.0 },
    unit: "枚",
    notes: "ベビーチーズ, さけるチーズ, カマンベール"
  },
  {
    name: "アーモンド",
    size: "20g",
    pfc: { calories: 120, protein: 4.0, fat: 10.0, carbs: 4.0 },
    unit: "g",
    notes: "くるみ, ミックスナッツ, ピスタチオ(無塩)"
  },
  {
    name: "炙り焼きチャーシュー",
    size: "1パック(80g)",
    pfc: { calories: 180, protein: 14.0, fat: 12.0, carbs: 3.0 },
    unit: "パック",
    notes: "焼豚スライス, チャーシュー切り落とし, ローストポーク"
  },
  {
    name: "ゆで卵",
    size: "2個(120g)",
    pfc: { calories: 154, protein: 12.4, fat: 10.4, carbs: 0.6 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "千切りキャベツ",
    size: "1食(100g)",
    pfc: { calories: 23, protein: 1.2, fat: 0.1, carbs: 5.0 },
    unit: "食",
    notes: "レタスミックス, ベビーリーフ, 白菜千切り"
  },
  {
    name: "マヨネーズ",
    size: "大さじ1(15g)",
    pfc: { calories: 100, protein: 0.3, fat: 11.0, carbs: 0.2 },
    unit: "大さじ",
    notes: "オリーブオイル+塩, クリームチーズ, サワークリーム"
  },
  {
    name: "塩サバフィレ",
    size: "1切(100g)",
    pfc: { calories: 210, protein: 20.0, fat: 14.0, carbs: 0.0 },
    unit: "切",
    notes: "鯖の塩焼き(別メーカー), 焼き鮭, 焼きホッケ"
  },
  {
    name: "冷奴(絹ごし豆腐)",
    size: "100g",
    pfc: { calories: 56, protein: 3.3, fat: 3.0, carbs: 2.7 },
    unit: "g",
    notes: "木綿豆腐, 枝豆豆腐, 高野豆腐(戻し)"
  },
  {
    name: "わかめスープ",
    size: "1食分(12g粉末)",
    pfc: { calories: 25, protein: 2.0, fat: 0.4, carbs: 3.0 },
    unit: "食分",
    notes: "インスタントコンソメ, インスタント中華スープ"
  },
  {
    name: "スモークサーモン",
    size: "1パック(50g)",
    pfc: { calories: 70, protein: 9.0, fat: 3.0, carbs: 0.5 },
    unit: "パック",
    notes: "刺身サーモン, ローストサーモン, しめサバ"
  },
  {
    name: "クリームチーズ",
    size: "2個(40g)",
    pfc: { calories: 140, protein: 3.0, fat: 14.0, carbs: 2.0 },
    unit: "個",
    notes: "カマンベールチーズ, ブリーチーズ, 水切りヨーグルト"
  },
  {
    name: "ゆで卵(オプション)",
    size: "1個(60g)",
    pfc: { calories: 77, protein: 6.2, fat: 5.2, carbs: 0.3 },
    unit: "個",
    notes: "味付き玉子, 温泉卵"
  },
  {
    name: "海老とブロッコリーのサラダ",
    size: "1パック(110g)",
    pfc: { calories: 140, protein: 10.0, fat: 8.0, carbs: 5.0 },
    unit: "パック",
    notes: "イカとブロッコリーのサラダ, シーフードミックスサラダ, チキンブロッコリーサラダ"
  },
  {
    name: "おでん(ゆで卵)",
    size: "1個",
    pfc: { calories: 77, protein: 6.2, fat: 5.2, carbs: 0.3 },
    unit: "個",
    notes: "味付き玉子, ゆで卵(自作)"
  },
  {
    name: "おでん(白滝)",
    size: "1袋(50g)",
    pfc: { calories: 6, protein: 0.0, fat: 0.0, carbs: 2.4 },
    unit: "袋",
    notes: "しらたき麺, 糖質0g麺(細麺)"
  },
  {
    name: "おでん(厚揚げ豆腐)",
    size: "1枚(50g)",
    pfc: { calories: 70, protein: 5.0, fat: 4.0, carbs: 3.0 },
    unit: "枚",
    notes: "がんもどき, 高野豆腐(戻し), 焼き豆腐"
  },
  {
    name: "おでん(牛すじ)",
    size: "1本(30g)",
    pfc: { calories: 40, protein: 5.0, fat: 2.0, carbs: 0.3 },
    unit: "本",
    notes: "鶏軟骨串, 焼き鳥(塩), ビーフジャーキー"
  }
];

// ①-3. 両方を統合
const additionalFoods: FoodItem[] = [...foodItems1, ...foodItems2];


// ================================
// ② 既存のデータと追加データを統合したデータベース
// ================================
export const FOOD_DATABASE: FoodItem[] = [
  // 既存のデータ（コンビニ商品など）
  {
    name: "サラダチキン",
    size: "1パック(115g)",
    pfc: { protein: 26.5, fat: 1.5, carbs: 0.5, calories: 115 },
    unit: "パック",
    notes: "グリルチキン, スモークチキン, ささみ"
  },
  {
    name: "ゆで卵",
    size: "2個(120g)",
    pfc: { protein: 20.6, fat: 17.4, carbs: 1.0, calories: 256 },
    unit: "個",
    notes: "温泉卵, 半熟卵"
  },
  {
    name: "キャンディチーズ",
    size: "2個(40g)",
    pfc: { protein: 10.0, fat: 13.2, carbs: 0.5, calories: 160 },
    unit: "個",
    notes: "プロセスチーズ, スライスチーズ"
  },
  {
    name: "パストラミビーフ",
    size: "1パック(50g)",
    pfc: { protein: 15.0, fat: 8.0, carbs: 1.0, calories: 135 },
    unit: "パック",
    notes: "ビーフパストラミ, スモークビーフ"
  },
  {
    name: "とうふそうめん",
    size: "1パック(200g)",
    pfc: { protein: 12.0, fat: 8.0, carbs: 2.0, calories: 128 },
    unit: "パック",
    notes: "豆腐麺, しらたき"
  },
  {
    name: "豚しゃぶサラダ",
    size: "1食(200g)",
    pfc: { protein: 18.0, fat: 15.0, carbs: 7.0, calories: 235 },
    unit: "食",
    notes: "豚しゃぶ, サラダ"
  },
  {
    name: "海老サラダ",
    size: "1パック(110g)",
    pfc: { protein: 10.0, fat: 8.0, carbs: 5.0, calories: 131 },
    unit: "パック",
    notes: "シーフードサラダ, エビサラダ"
  },
  {
    name: "おでん",
    size: "1パック(300g)",
    pfc: { protein: 16.2, fat: 11.2, carbs: 6.0, calories: 188 },
    unit: "パック",
    notes: "おでん盛り合わせ"
  },
  {
    name: "即席みそ汁",
    size: "1食(12g)",
    pfc: { protein: 2.0, fat: 0.5, carbs: 3.0, calories: 25 },
    unit: "食",
    notes: "インスタント味噌汁, カップみそ汁"
  },
  {
    name: "わかめスープ",
    size: "1食(12g)",
    pfc: { protein: 1.5, fat: 0.3, carbs: 2.5, calories: 20 },
    unit: "食",
    notes: "インスタントスープ, 中華スープ"
  },
  {
    name: "豚汁",
    size: "1食(200g)",
    pfc: { protein: 8.0, fat: 5.0, carbs: 10.0, calories: 120 },
    unit: "食",
    notes: "豚汁, みそ汁"
  },
  // ================================
  // 追加の全食品データ（foodItems1 + foodItems2）
  ...additionalFoods
];
