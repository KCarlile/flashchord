var $notes = ["A", "B", "C", "D", "E", "F", "G"];
var $accidentals = ["", "#", "b"];
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


var $intervalId;
var $DELAY = 1000 * 4; // 1000ms * SECONDS

$(document).ready(function(){
    // slider setup
    $(function() {
        $("#slider").slider({
          value: 2,
          min: 2,
          max: 60,
          step: 2,
          slide: function(event, ui) {
            clearInterval($intervalId);
            $("#seconds").val(ui.value + " seconds");
            $DELAY = ui.value * 1000;
            chordTimer(); // start new
          }
        });
        $("#seconds").val($("#slider").slider("value") + " seconds");
        chordTimer();
      });

    // setup keys dropdown
    var option = '';
    for (var $key in $keys) {
       option += '<option value="'+ $key + '">' + $key + '</option>';
    }
    $("#keys").append(option);

    // chord change
    var changeChord = function() {
      var $difficulty = $('input[name="difficulty"]:checked').val();
      var $quality;
      var $ext;

      if ($difficulty == "beginner") {
        $quality = getRandom($quality_beginner);
        $ext = "";
      } else if ($difficulty == "intermediate") {
        $quality = getRandom($quality_intermediate);
        $ext = "";
      } else if ($difficulty == "advanced") {
        $quality = getRandom($quality_advanced);
        $ext = getRandom($extension)
      }
      $("#chord_name").text(getRandom($notes) + getRandom($accidentals) + $quality + $ext);
    }

    function chordTimer() {
        changeChord();
        $intervalId = setTimeout(function() {
            chordTimer();
        }, $DELAY);
    }
});

/*
function getDelay() {
    $DELAY = $("#slider").slider("value") * 1000;
    return $DELAY;
}
*/

function getRandom ($array) {
    return $array[Math.floor(Math.random() * $array.length)];
}
