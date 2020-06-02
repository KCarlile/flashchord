var $chromatic = ["A", "Ab", "A#", "B", "Bb", "B#", "C", "Cb", "C#", "D", "Db", "D#", "E", "Eb", "E#", "F", "Fb", "F#", "G", "Gb", "G#"];
var $quality_beginner = ["", "m", "m7", "7"];
var $quality_intermediate = $quality_beginner.concat(["+", "dim", "maj7", "m7b5", "6", "m6", "sus2", "sus4", "9", "m9", "11", "13", "6/9"]);
var $quality_advanced = $quality_intermediate.concat(["7alt"]);
var $extension = ["", "(#9)", "(b9)", "(#5)", "(b5)"];

var $keys = {
  "Gb Major":   ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  "Db Major":   ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  "Ab Major":   ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  "Eb Major":   ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  "Bb Major":   ["Bb", "C", "D", "Eb", "F", "G", "A"],
  "F Major":    ["F", "G", "A", "Bb", "C", "D", "E"],
  "C Major":    ["C", "D", "E", "F", "G", "A", "B"],
  "G Major":    ["G", "A", "B", "C", "D", "E", "F#"],
  "D Major":    ["D", "E", "F#", "G", "A", "B", "C#"],
  "A Major":    ["A", "B", "C#", "D", "E", "F#", "G#"],
  "E Major":    ["E", "F#", "G#", "A", "B", "C#", "D#"],
  "B Major":    ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  "F# Major":   ["F#", "G#", "A#", "B", "C#", "D#", "E#"],

  "Eb Minor":   ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
  "Bb Minor":   ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
  "F Minor":    ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
  "C Minor":    ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
  "G Minor":    ["G", "A", "Bb", "C", "D", "Eb", "F"],
  "D Minor":    ["D", "E", "F", "G", "A", "Bb", "C"],
  "A Minor":    ["A", "B", "C", "D", "E", "F", "G"],
  "E Minor":    ["E", "F#", "G", "A", "B", "C", "D"],
  "B Minor":    ["B", "C#", "D", "E", "F#", "G", "A"],
  "F# Minor":   ["F#", "G#", "A", "B", "C#", "D", "E"],
  "C# Minor":   ["C#", "D#", "E", "F#", "G#", "A", "B"],
  "G# Minor":   ["G#", "A#", "B", "C#", "D#", "E", "F#"],
  "D# Minor":   ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
};
