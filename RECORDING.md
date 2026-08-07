# Recording pronunciation audio

Twenty-five clips give the website full pronunciation coverage for both kana scripts.

## Why only 25

あ and ア are the same sound. The Hiragana and Katakana tracks teach the same 25 morae in two scripts, so one recording serves both characters. `getPronunciationAudio()` resolves by sound, not by character, so `a.mp3` lights up あ and ア at once.

Kanji are excluded. 日 alone has ニチ, ジツ, ひ, and か, so no single clip represents the character. The natural next phase is recording the example words (日本 = *nihon*), not the characters.

## Who should record

A native or genuinely fluent speaker. A learner will copy whatever they hear exactly, so a recording carries more authority than the written hint it replaces. If no fluent speaker is available, leave the written guidance in place — it is honest about being approximate in a way a recording is not.

## Rights

If someone else records, get it in writing — an email is fine — that you may use the recordings on the website, commercially, indefinitely. Without that, the file cannot be published here.

**Audio from another website cannot be used**, regardless of whether it downloads freely or where the file ends up on disk. Downloading is not a licence. This applies to the app repository too: bundling third-party audio into a published APK distributes it at scale.

## Setup

Record all 25 in one sitting so tone, level, and mic distance stay consistent — clips made on different days sound stitched together.

- A USB condenser mic is ideal; a phone voice recorder in a quiet room beats a laptop's built-in mic.
- Choose a room with soft furnishings. A bedroom with curtains kills reverb better than an office.
- Sit close to the mic but slightly off-axis so plosives do not thump.
- Record to WAV if the app allows. Apply no effects while recording.
- Say each sound three times with a pause between, then keep the best take.
- Speak at a natural, neutral pace. Do not over-enunciate — learners copy the exaggeration.

## Processing

Loudness normalisation is the step that matters. If one clip is louder than the next, clicking through a lesson is jarring.

Save raw takes as `raw/<sound>.wav`, then from the project root:

```bash
mkdir -p public/audio/kana && for f in raw/*.wav; do n=$(basename "$f" .wav); ffmpeg -y -i "$f" -af "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,loudnorm=I=-16:TP=-1.5:LRA=11" -ar 44100 -ac 1 -b:a 96k "public/audio/kana/$n.mp3"; done
```

ffmpeg is not currently installed on this machine. Audacity does the same job with a GUI: Effect → Loudness Normalization, then Export as MP3, mono, ~96 kbps.

Expect 10–20 KB per clip and roughly 400 KB for all 25.

## Enabling them

1. Put the files in `public/audio/kana/` named exactly as in the table below.
2. Add each finished sound to `RECORDED_SOUNDS` in `lib/learning/audio.ts`.
3. Play controls appear automatically on every character using that sound.

Sounds not listed in `RECORDED_SOUNDS` keep showing written guidance, so the list can be filled in as recording progresses. Nothing has to land all at once.

## The 25 sounds

Generated from the lesson data in `lib/learning/`.

### Vowels

| Done | File | Sound | Hiragana | Katakana | Say it as |
| --- | --- | --- | --- | --- | --- |
| [ ] | `a.mp3` | a | あ | ア | ah, like the a in father |
| [ ] | `i.mp3` | i | い | イ | ee, like the i in machine |
| [ ] | `u.mp3` | u | う | ウ | oo, like the u in flute, but with relaxed lips |
| [ ] | `e.mp3` | e | え | エ | eh, like the e in bed |
| [ ] | `o.mp3` | o | お | オ | oh, like the o in more |

### K-row

| Done | File | Sound | Hiragana | Katakana | Say it as |
| --- | --- | --- | --- | --- | --- |
| [ ] | `ka.mp3` | ka | か | カ | ka, as in car |
| [ ] | `ki.mp3` | ki | き | キ | kee, as in key |
| [ ] | `ku.mp3` | ku | く | ク | koo, as in cuckoo |
| [ ] | `ke.mp3` | ke | け | ケ | keh, as in kettle |
| [ ] | `ko.mp3` | ko | こ | コ | koh, as in coast |

### S-row

| Done | File | Sound | Hiragana | Katakana | Say it as |
| --- | --- | --- | --- | --- | --- |
| [ ] | `sa.mp3` | sa | さ | サ | sah, as in saw |
| [ ] | `shi.mp3` | shi | し | シ | she |
| [ ] | `su.mp3` | su | す | ス | soo, often shortened until it sounds close to just s |
| [ ] | `se.mp3` | se | せ | セ | seh, as in set |
| [ ] | `so.mp3` | so | そ | ソ | soh, as in sew |

### T-row

| Done | File | Sound | Hiragana | Katakana | Say it as |
| --- | --- | --- | --- | --- | --- |
| [ ] | `ta.mp3` | ta | た | タ | tah, as in taco |
| [ ] | `chi.mp3` | chi | ち | チ | chee, as in cheese |
| [ ] | `tsu.mp3` | tsu | つ | ツ | tsoo — the ts of cats, followed by u |
| [ ] | `te.mp3` | te | て | テ | teh, as in ten |
| [ ] | `to.mp3` | to | と | ト | toh, as in toe |

### N-row

| Done | File | Sound | Hiragana | Katakana | Say it as |
| --- | --- | --- | --- | --- | --- |
| [ ] | `na.mp3` | na | な | ナ | nah, as in nacho |
| [ ] | `ni.mp3` | ni | に | ニ | nee, as in need |
| [ ] | `nu.mp3` | nu | ぬ | ヌ | noo, as in noon |
| [ ] | `ne.mp3` | ne | ね | ネ | neh, as in net |
| [ ] | `no.mp3` | no | の | ノ | noh, as in note |
