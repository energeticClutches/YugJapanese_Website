import type { ScriptTrack } from "@/types/learning";

export const katakana: ScriptTrack = {
  id: "katakana",
  title: "Katakana",
  japaneseTitle: "カタカナ",
  subtitle: "Learn second",
  description:
    "The same sounds written a different way. Katakana spells foreign words, names, and brands, so it turns a surprising amount of everyday Japanese readable.",
  intro:
    "Katakana covers exactly the same sounds as Hiragana — カ is ka, just as か is. What changes is the job: Katakana writes words borrowed from other languages, foreign names, and product names. Because so many of those words came from English, you can often guess the meaning once you can read the characters. Learn Hiragana first, then this row order will feel familiar.",
  order: 2,
  lessons: [
    {
      slug: "vowels",
      title: "Vowels",
      subtitle: "ア イ ウ エ オ",
      summary:
        "The same five sounds you learned in Hiragana, in sharper, straighter shapes.",
      characters: [
        {
          kind: "kana",
          character: "ア",
          romaji: "a",
          pronunciation: "ah, like the a in father",
          strokes: {},
          examples: [
            { word: "アメリカ", reading: "アメリカ", romaji: "amerika", meaning: "America" },
            { word: "アイス", reading: "アイス", romaji: "aisu", meaning: "ice cream" },
          ],
        },
        {
          kind: "kana",
          character: "イ",
          romaji: "i",
          pronunciation: "ee, like the i in machine",
          strokes: {},
          examples: [
            { word: "イタリア", reading: "イタリア", romaji: "itaria", meaning: "Italy" },
            { word: "イメージ", reading: "イメージ", romaji: "imēji", meaning: "image" },
          ],
        },
        {
          kind: "kana",
          character: "ウ",
          romaji: "u",
          pronunciation: "oo, like the u in flute, but with relaxed lips",
          strokes: {},
          examples: [
            { word: "ウール", reading: "ウール", romaji: "ūru", meaning: "wool" },
            { word: "ウイスキー", reading: "ウイスキー", romaji: "uisukī", meaning: "whisky" },
          ],
        },
        {
          kind: "kana",
          character: "エ",
          romaji: "e",
          pronunciation: "eh, like the e in bed",
          strokes: {},
          examples: [
            { word: "エアコン", reading: "エアコン", romaji: "eakon", meaning: "air conditioner" },
            { word: "エネルギー", reading: "エネルギー", romaji: "enerugī", meaning: "energy" },
          ],
        },
        {
          kind: "kana",
          character: "オ",
          romaji: "o",
          pronunciation: "oh, like the o in more",
          strokes: {},
          examples: [
            { word: "オレンジ", reading: "オレンジ", romaji: "orenji", meaning: "orange" },
            { word: "オフィス", reading: "オフィス", romaji: "ofisu", meaning: "office" },
          ],
        },
      ],
    },
    {
      slug: "k-row",
      title: "K-row",
      subtitle: "カ キ ク ケ コ",
      summary:
        "The k sounds again. Note the long vowel mark ー, which appears constantly in borrowed words.",
      characters: [
        {
          kind: "kana",
          character: "カ",
          romaji: "ka",
          pronunciation: "ka, as in car",
          strokes: {},
          examples: [
            { word: "カメラ", reading: "カメラ", romaji: "kamera", meaning: "camera" },
            { word: "カード", reading: "カード", romaji: "kādo", meaning: "card" },
          ],
        },
        {
          kind: "kana",
          character: "キ",
          romaji: "ki",
          pronunciation: "kee, as in key",
          strokes: {},
          examples: [
            { word: "キロ", reading: "キロ", romaji: "kiro", meaning: "kilo" },
            { word: "キッチン", reading: "キッチン", romaji: "kicchin", meaning: "kitchen" },
          ],
        },
        {
          kind: "kana",
          character: "ク",
          romaji: "ku",
          pronunciation: "koo, as in cuckoo",
          strokes: {},
          examples: [
            { word: "クラス", reading: "クラス", romaji: "kurasu", meaning: "class" },
            { word: "クリスマス", reading: "クリスマス", romaji: "kurisumasu", meaning: "Christmas" },
          ],
        },
        {
          kind: "kana",
          character: "ケ",
          romaji: "ke",
          pronunciation: "keh, as in kettle",
          strokes: {},
          examples: [
            { word: "ケーキ", reading: "ケーキ", romaji: "kēki", meaning: "cake" },
            { word: "ケース", reading: "ケース", romaji: "kēsu", meaning: "case" },
          ],
        },
        {
          kind: "kana",
          character: "コ",
          romaji: "ko",
          pronunciation: "koh, as in coast",
          strokes: {},
          examples: [
            { word: "コーヒー", reading: "コーヒー", romaji: "kōhī", meaning: "coffee" },
            { word: "コピー", reading: "コピー", romaji: "kopī", meaning: "copy" },
          ],
        },
      ],
    },
    {
      slug: "s-row",
      title: "S-row",
      subtitle: "サ シ ス セ ソ",
      summary:
        "シ is shi, matching Hiragana. Watch シ against ツ — the stroke angle is the only difference.",
      characters: [
        {
          kind: "kana",
          character: "サ",
          romaji: "sa",
          pronunciation: "sah, as in saw",
          strokes: {},
          examples: [
            { word: "サラダ", reading: "サラダ", romaji: "sarada", meaning: "salad" },
            { word: "サッカー", reading: "サッカー", romaji: "sakkā", meaning: "soccer" },
          ],
        },
        {
          kind: "kana",
          character: "シ",
          romaji: "shi",
          pronunciation: "she",
          watchOut: "Often confused with ツ. シ's strokes come in from the left, nearly flat.",
          strokes: {},
          examples: [
            { word: "シャツ", reading: "シャツ", romaji: "shatsu", meaning: "shirt" },
            { word: "シャワー", reading: "シャワー", romaji: "shawā", meaning: "shower" },
          ],
        },
        {
          kind: "kana",
          character: "ス",
          romaji: "su",
          pronunciation: "soo, often shortened until it sounds close to just s",
          strokes: {},
          examples: [
            { word: "スープ", reading: "スープ", romaji: "sūpu", meaning: "soup" },
            { word: "スポーツ", reading: "スポーツ", romaji: "supōtsu", meaning: "sport" },
          ],
        },
        {
          kind: "kana",
          character: "セ",
          romaji: "se",
          pronunciation: "seh, as in set",
          strokes: {},
          examples: [
            { word: "セーター", reading: "セーター", romaji: "sētā", meaning: "sweater" },
            { word: "セット", reading: "セット", romaji: "setto", meaning: "set" },
          ],
        },
        {
          kind: "kana",
          character: "ソ",
          romaji: "so",
          pronunciation: "soh, as in sew",
          watchOut: "Often confused with ン (n). ソ's strokes run more steeply downward.",
          strokes: {},
          examples: [
            { word: "ソファ", reading: "ソファ", romaji: "sofa", meaning: "sofa" },
            { word: "ソース", reading: "ソース", romaji: "sōsu", meaning: "sauce" },
          ],
        },
      ],
    },
    {
      slug: "t-row",
      title: "T-row",
      subtitle: "タ チ ツ テ ト",
      summary:
        "チ is chi and ツ is tsu, exactly as in Hiragana. ツ is the one most often misread as シ.",
      characters: [
        {
          kind: "kana",
          character: "タ",
          romaji: "ta",
          pronunciation: "tah, as in taco",
          strokes: {},
          examples: [
            { word: "タクシー", reading: "タクシー", romaji: "takushī", meaning: "taxi" },
            { word: "タオル", reading: "タオル", romaji: "taoru", meaning: "towel" },
          ],
        },
        {
          kind: "kana",
          character: "チ",
          romaji: "chi",
          pronunciation: "chee, as in cheese",
          watchOut: "Not ti — always chi.",
          strokes: {},
          examples: [
            { word: "チーズ", reading: "チーズ", romaji: "chīzu", meaning: "cheese" },
            { word: "チケット", reading: "チケット", romaji: "chiketto", meaning: "ticket" },
          ],
        },
        {
          kind: "kana",
          character: "ツ",
          romaji: "tsu",
          pronunciation: "tsoo — the ts of cats, followed by u",
          watchOut: "Often confused with シ. ツ's strokes come down from the top.",
          strokes: {},
          examples: [
            { word: "ツアー", reading: "ツアー", romaji: "tsuā", meaning: "tour" },
            { word: "スーツ", reading: "スーツ", romaji: "sūtsu", meaning: "suit" },
          ],
        },
        {
          kind: "kana",
          character: "テ",
          romaji: "te",
          pronunciation: "teh, as in ten",
          strokes: {},
          examples: [
            { word: "テレビ", reading: "テレビ", romaji: "terebi", meaning: "television" },
            { word: "テスト", reading: "テスト", romaji: "tesuto", meaning: "test" },
          ],
        },
        {
          kind: "kana",
          character: "ト",
          romaji: "to",
          pronunciation: "toh, as in toe",
          strokes: {},
          examples: [
            { word: "トマト", reading: "トマト", romaji: "tomato", meaning: "tomato" },
            { word: "ノート", reading: "ノート", romaji: "nōto", meaning: "notebook" },
          ],
        },
      ],
    },
    {
      slug: "n-row",
      title: "N-row",
      subtitle: "ナ ニ ヌ ネ ノ",
      summary:
        "A regular row, and the simplest shapes in Katakana. ノ is a single stroke.",
      characters: [
        {
          kind: "kana",
          character: "ナ",
          romaji: "na",
          pronunciation: "nah, as in nacho",
          strokes: {},
          examples: [
            { word: "ナイフ", reading: "ナイフ", romaji: "naifu", meaning: "knife" },
            { word: "バナナ", reading: "バナナ", romaji: "banana", meaning: "banana" },
          ],
        },
        {
          kind: "kana",
          character: "ニ",
          romaji: "ni",
          pronunciation: "nee, as in need",
          strokes: {},
          examples: [
            { word: "ニュース", reading: "ニュース", romaji: "nyūsu", meaning: "news" },
            { word: "テニス", reading: "テニス", romaji: "tenisu", meaning: "tennis" },
          ],
        },
        {
          kind: "kana",
          character: "ヌ",
          romaji: "nu",
          pronunciation: "noo, as in noon",
          strokes: {},
          examples: [
            { word: "ヌードル", reading: "ヌードル", romaji: "nūdoru", meaning: "noodle" },
            { word: "カヌー", reading: "カヌー", romaji: "kanū", meaning: "canoe" },
          ],
        },
        {
          kind: "kana",
          character: "ネ",
          romaji: "ne",
          pronunciation: "neh, as in net",
          strokes: {},
          examples: [
            { word: "ネクタイ", reading: "ネクタイ", romaji: "nekutai", meaning: "necktie" },
            { word: "ネット", reading: "ネット", romaji: "netto", meaning: "net" },
          ],
        },
        {
          kind: "kana",
          character: "ノ",
          romaji: "no",
          pronunciation: "noh, as in note",
          strokes: {},
          examples: [
            { word: "ノート", reading: "ノート", romaji: "nōto", meaning: "notebook" },
            { word: "ピアノ", reading: "ピアノ", romaji: "piano", meaning: "piano" },
          ],
        },
      ],
    },
  ],
};
