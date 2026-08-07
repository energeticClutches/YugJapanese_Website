import type { ScriptTrack } from "@/types/learning";

export const hiragana: ScriptTrack = {
  id: "hiragana",
  title: "Hiragana",
  japaneseTitle: "ひらがな",
  subtitle: "Start here",
  description:
    "The first alphabet every learner needs. Forty-six characters cover every sound in Japanese, and once you know them you can read and write words on your own.",
  intro:
    "Hiragana is the foundation of written Japanese. Each character stands for one sound, and the sounds never change from word to word — so unlike English spelling, once you know a character you can always read it. Learn these five rows and you can already sound out real Japanese words.",
  order: 1,
  lessons: [
    {
      slug: "vowels",
      title: "Vowels",
      subtitle: "あ い う え お",
      summary:
        "Every other character in Hiragana is built from these five sounds, so this is the row to know cold.",
      characters: [
        {
          kind: "kana",
          character: "あ",
          romaji: "a",
          pronunciation: "ah, like the a in father",
          strokes: {},
          examples: [
            { word: "あめ", reading: "あめ", romaji: "ame", meaning: "rain" },
            { word: "あか", reading: "あか", romaji: "aka", meaning: "red" },
          ],
        },
        {
          kind: "kana",
          character: "い",
          romaji: "i",
          pronunciation: "ee, like the i in machine",
          strokes: {},
          examples: [
            { word: "いぬ", reading: "いぬ", romaji: "inu", meaning: "dog" },
            { word: "いえ", reading: "いえ", romaji: "ie", meaning: "house" },
          ],
        },
        {
          kind: "kana",
          character: "う",
          romaji: "u",
          pronunciation: "oo, like the u in flute, but with relaxed lips",
          strokes: {},
          examples: [
            { word: "うみ", reading: "うみ", romaji: "umi", meaning: "sea" },
            { word: "うし", reading: "うし", romaji: "ushi", meaning: "cow" },
          ],
        },
        {
          kind: "kana",
          character: "え",
          romaji: "e",
          pronunciation: "eh, like the e in bed",
          strokes: {},
          examples: [
            { word: "えき", reading: "えき", romaji: "eki", meaning: "station" },
            { word: "え", reading: "え", romaji: "e", meaning: "picture" },
          ],
        },
        {
          kind: "kana",
          character: "お",
          romaji: "o",
          pronunciation: "oh, like the o in more",
          strokes: {},
          examples: [
            { word: "おと", reading: "おと", romaji: "oto", meaning: "sound" },
            { word: "おかね", reading: "おかね", romaji: "okane", meaning: "money" },
          ],
        },
      ],
    },
    {
      slug: "k-row",
      title: "K-row",
      subtitle: "か き く け こ",
      summary:
        "Add a k sound in front of each vowel. From here the pattern repeats for every row.",
      characters: [
        {
          kind: "kana",
          character: "か",
          romaji: "ka",
          pronunciation: "ka, as in car",
          strokes: {},
          examples: [
            { word: "かさ", reading: "かさ", romaji: "kasa", meaning: "umbrella" },
            { word: "あかい", reading: "あかい", romaji: "akai", meaning: "red" },
          ],
        },
        {
          kind: "kana",
          character: "き",
          romaji: "ki",
          pronunciation: "kee, as in key",
          strokes: {},
          examples: [
            { word: "き", reading: "き", romaji: "ki", meaning: "tree" },
            { word: "えき", reading: "えき", romaji: "eki", meaning: "station" },
          ],
        },
        {
          kind: "kana",
          character: "く",
          romaji: "ku",
          pronunciation: "koo, as in cuckoo",
          strokes: {},
          examples: [
            { word: "くつ", reading: "くつ", romaji: "kutsu", meaning: "shoes" },
            { word: "きく", reading: "きく", romaji: "kiku", meaning: "to listen" },
          ],
        },
        {
          kind: "kana",
          character: "け",
          romaji: "ke",
          pronunciation: "keh, as in kettle",
          strokes: {},
          examples: [
            { word: "たけ", reading: "たけ", romaji: "take", meaning: "bamboo" },
            { word: "いけ", reading: "いけ", romaji: "ike", meaning: "pond" },
          ],
        },
        {
          kind: "kana",
          character: "こ",
          romaji: "ko",
          pronunciation: "koh, as in coast",
          strokes: {},
          examples: [
            { word: "ねこ", reading: "ねこ", romaji: "neko", meaning: "cat" },
            { word: "こども", reading: "こども", romaji: "kodomo", meaning: "child" },
          ],
        },
      ],
    },
    {
      slug: "s-row",
      title: "S-row",
      subtitle: "さ し す せ そ",
      summary:
        "Mostly regular, with one exception: し is shi, not si. That irregularity is worth memorising now.",
      characters: [
        {
          kind: "kana",
          character: "さ",
          romaji: "sa",
          pronunciation: "sah, as in saw",
          strokes: {},
          examples: [
            { word: "さかな", reading: "さかな", romaji: "sakana", meaning: "fish" },
            { word: "かさ", reading: "かさ", romaji: "kasa", meaning: "umbrella" },
          ],
        },
        {
          kind: "kana",
          character: "し",
          romaji: "shi",
          pronunciation: "she",
          watchOut: "This one breaks the pattern — it is shi, never si.",
          strokes: {},
          examples: [
            { word: "しま", reading: "しま", romaji: "shima", meaning: "island" },
            { word: "すし", reading: "すし", romaji: "sushi", meaning: "sushi" },
          ],
        },
        {
          kind: "kana",
          character: "す",
          romaji: "su",
          pronunciation: "soo, often shortened until it sounds close to just s",
          strokes: {},
          examples: [
            { word: "すいか", reading: "すいか", romaji: "suika", meaning: "watermelon" },
            { word: "いす", reading: "いす", romaji: "isu", meaning: "chair" },
          ],
        },
        {
          kind: "kana",
          character: "せ",
          romaji: "se",
          pronunciation: "seh, as in set",
          strokes: {},
          examples: [
            { word: "せかい", reading: "せかい", romaji: "sekai", meaning: "world" },
            { word: "みせ", reading: "みせ", romaji: "mise", meaning: "shop" },
          ],
        },
        {
          kind: "kana",
          character: "そ",
          romaji: "so",
          pronunciation: "soh, as in sew",
          strokes: {},
          examples: [
            { word: "そら", reading: "そら", romaji: "sora", meaning: "sky" },
            { word: "うそ", reading: "うそ", romaji: "uso", meaning: "a lie" },
          ],
        },
      ],
    },
    {
      slug: "t-row",
      title: "T-row",
      subtitle: "た ち つ て と",
      summary:
        "Two exceptions live here: ち is chi and つ is tsu. Everything else behaves normally.",
      characters: [
        {
          kind: "kana",
          character: "た",
          romaji: "ta",
          pronunciation: "tah, as in taco",
          strokes: {},
          examples: [
            { word: "たまご", reading: "たまご", romaji: "tamago", meaning: "egg" },
            { word: "うた", reading: "うた", romaji: "uta", meaning: "song" },
          ],
        },
        {
          kind: "kana",
          character: "ち",
          romaji: "chi",
          pronunciation: "chee, as in cheese",
          watchOut: "Not ti — this row's second character is always chi.",
          strokes: {},
          examples: [
            { word: "ちず", reading: "ちず", romaji: "chizu", meaning: "map" },
            { word: "くち", reading: "くち", romaji: "kuchi", meaning: "mouth" },
          ],
        },
        {
          kind: "kana",
          character: "つ",
          romaji: "tsu",
          pronunciation: "tsoo — the ts of cats, followed by u",
          watchOut: "Not tu. The ts sound at the start of a syllable takes practice.",
          strokes: {},
          examples: [
            { word: "つき", reading: "つき", romaji: "tsuki", meaning: "moon" },
            { word: "くつ", reading: "くつ", romaji: "kutsu", meaning: "shoes" },
          ],
        },
        {
          kind: "kana",
          character: "て",
          romaji: "te",
          pronunciation: "teh, as in ten",
          strokes: {},
          examples: [
            { word: "て", reading: "て", romaji: "te", meaning: "hand" },
            { word: "てがみ", reading: "てがみ", romaji: "tegami", meaning: "letter" },
          ],
        },
        {
          kind: "kana",
          character: "と",
          romaji: "to",
          pronunciation: "toh, as in toe",
          strokes: {},
          examples: [
            { word: "とり", reading: "とり", romaji: "tori", meaning: "bird" },
            { word: "おと", reading: "おと", romaji: "oto", meaning: "sound" },
          ],
        },
      ],
    },
    {
      slug: "n-row",
      title: "N-row",
      subtitle: "な に ぬ ね の",
      summary:
        "A fully regular row. Take care with ぬ and ね, which look similar until you notice the loop.",
      characters: [
        {
          kind: "kana",
          character: "な",
          romaji: "na",
          pronunciation: "nah, as in nacho",
          strokes: {},
          examples: [
            { word: "なつ", reading: "なつ", romaji: "natsu", meaning: "summer" },
            { word: "さかな", reading: "さかな", romaji: "sakana", meaning: "fish" },
          ],
        },
        {
          kind: "kana",
          character: "に",
          romaji: "ni",
          pronunciation: "nee, as in need",
          strokes: {},
          examples: [
            { word: "にく", reading: "にく", romaji: "niku", meaning: "meat" },
            { word: "にし", reading: "にし", romaji: "nishi", meaning: "west" },
          ],
        },
        {
          kind: "kana",
          character: "ぬ",
          romaji: "nu",
          pronunciation: "noo, as in noon",
          watchOut: "Easy to confuse with ね. ぬ finishes with a closed loop.",
          strokes: {},
          examples: [
            { word: "いぬ", reading: "いぬ", romaji: "inu", meaning: "dog" },
            { word: "ぬの", reading: "ぬの", romaji: "nuno", meaning: "cloth" },
          ],
        },
        {
          kind: "kana",
          character: "ね",
          romaji: "ne",
          pronunciation: "neh, as in net",
          watchOut: "Easy to confuse with ぬ. ね has a straight vertical stroke first.",
          strokes: {},
          examples: [
            { word: "ねこ", reading: "ねこ", romaji: "neko", meaning: "cat" },
            { word: "おかね", reading: "おかね", romaji: "okane", meaning: "money" },
          ],
        },
        {
          kind: "kana",
          character: "の",
          romaji: "no",
          pronunciation: "noh, as in note",
          strokes: {},
          examples: [
            { word: "のり", reading: "のり", romaji: "nori", meaning: "seaweed" },
            { word: "つの", reading: "つの", romaji: "tsuno", meaning: "horn" },
          ],
        },
      ],
    },
  ],
};
