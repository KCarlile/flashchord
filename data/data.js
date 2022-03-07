const $chromatic = ['A♭', 'A', 'A♯', 'B♭', 'B', 'B♯', 'C♭', 'C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'E♯', 'F♭', 'F', 'F♯', 'G♭', 'G', 'G♯'];

const $major_chords = ['', 'maj7', '6', 'sus2', 'sus4', '6/9'];
const $minor_chords = ['m', 'm7', 'm9', 'm11'];
const $diminished_chords = ['°', '°7', 'm7♭5'];
const $augmented_chords = ['+', '7alt'];
const $dominant_chords = ['7', '9', '11', '13'];
const $all_chords = [].concat($major_chords, $minor_chords, $diminished_chords, $augmented_chords, $dominant_chords).filter(String);

const $extensions = ['', '(♯5)', '(♭5)', '(♯9)', '(♭9)', '(♯11)', '(♭13)'];

const $keys = {
  "G♭ Major":   ['G♯', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
  "D♭ Major":   ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
  "A♭ Major":   ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
  "E♭ Major":   ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
  "B♭ Major":   ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
  "F Major":    ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
  "C Major":    ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  "G Major":    ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
  "D Major":    ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
  "A Major":    ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
  "E Major":    ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
  "B Major":    ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯'],
  "F♯ Major":   ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'E♯'],

  "E♭ Minor":   ['E♭', 'F', 'G♭', 'A♭', 'B♭', 'C♭', 'D♭'],
  "B♭ Minor":   ['B♭', 'C', 'D♭', 'E♭', 'F', 'G♭', 'A♭'],
  "F Minor":    ['F', 'G', 'A♭', 'B♭', 'C', 'D♭', 'E♭'],
  "C Minor":    ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'],
  "G Minor":    ['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F'],
  "D Minor":    ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'],
  "A Minor":    ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  "E Minor":    ['E', 'F♯', 'G', 'A', 'B', 'C', 'D'],
  "B Minor":    ['B', 'C♯', 'D', 'E', 'F♯', 'G', 'A'],
  "F♯ Minor":   ['F♯', 'G♯', 'A', 'B', 'C♯', 'D', 'E'],
  "C♯ Minor":   ['C♯', 'D♯', 'E', 'F♯', 'G♯', 'A', 'B'],
  "G♯ Minor":   ['G♯', 'A♯', 'B', 'C♯', 'D♯', 'E', 'F♯'],
  "D♯ Minor":   ['D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B', 'C♯'],
};

const $theoretical_keys = {
  "C♯ Major":   ['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B♯'],
  "G♯ Major":   ['G♯', 'A♯', 'B♯', 'C♯', 'D♯', 'E♯', 'F𝄪'],
  "D♯ Major":   ['D♯', 'E♯', 'F𝄪', 'G♯', 'A♯', 'B♯', 'C𝄪'],
  "A♯ Major":   ['A♯', 'B♯', 'C𝄪', 'D♯', 'E♯', 'F𝄪', 'G𝄪'],
  "E♯ Major":   ['E♯', 'F𝄪', 'G𝄪', 'A♯', 'B♯', 'C𝄪', 'D𝄪'],
  "B♯ Major":   ['B♯', 'C𝄪', 'D𝄪', 'E♯', 'F𝄪', 'G𝄪', 'A𝄪'],
  "C♭ Major":   ['C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B♭'],
  "F♭ Major":   ['F♭', 'G♭', 'A♭', 'B𝄫', 'C♭', 'D♭', 'E♭'],

  "A♯ Minor":    ['A♯', 'B♯', 'C♯', 'D♯', 'E♯', 'F♯', 'G♯'],
  "E♯ Minor":    ['E♯', 'F𝄪', 'G♯', 'A♯', 'B♯', 'C♯', 'D♯'],
  "B♯ Minor":    ['B♯', 'C𝄪', 'D♯', 'E♯', 'F𝄪', 'G♯', 'A♯'],
  "A♭ Minor":    ['A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F♭', 'G♭'],
  "C♭ Minor":    ['C♭', 'D♭', 'E𝄫', 'F♭', 'G♭', 'A𝄫', 'B𝄫'],
  "D♭ Minor":    ['D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B𝄫', 'C♭'],
  "F♭ Minor":    ['F♭', 'G♭', 'A𝄫', 'B𝄫', 'C♭', 'D𝄫', 'E𝄫'],
  "G♭ Minor":    ['G♭', 'A♭', 'B𝄫', 'C♭', 'D♭', 'E𝄫', 'F♭'],
};

const $slash_degrees = [0, 2, 4];

// flat: &#9837; ♭
// sharp: &#9839; ♯
// natural: &#9838; ♮
// diminished: &#176; °
// double sharp: 𝄪
// double flat: 𝄫
// major: Δ
