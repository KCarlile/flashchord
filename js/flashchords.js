var $intervalId;
var $DELAY = 1000 * 4; // 1000ms * SECONDS
var $chord;
var $next_chord;

$(document).ready(function(){
    // slider setup
    $(function() {
        $("#slider").slider({
          value: 4,
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
      $chord = $next_chord ? $next_chord : getChord();
      $next_chord = getChord();

      $("#chord_name").text($chord);
      $("#next_chord_name").text($next_chord);
    }

    function chordTimer() {
        changeChord();
        $intervalId = setTimeout(function() {
            chordTimer();
        }, $DELAY);
    }
});

function getRandom ($array) {
    return $array[Math.floor(Math.random() * $array.length)];
}

function getKey() {
  var $key = $("#keys").val();
  var $key_notes;
  console.log("Selected: " + $key);

  if (!$key) {
    $key_notes = $chromatic;
    console.log("Any key");
  }
  else {
    $key_notes = $keys[$key];
  }
  console.log($key_notes);

  return $key_notes;
}

function getChord() {
  var $difficulty = $('input[name="difficulty"]:checked').val();
  var $key = getKey();
  var $note = getRandom($key);

  console.log($key + " :: " + $note + " (" + $key.indexOf($note) + ")");

  if ($("#keys").val().indexOf("Major") >= 0) {
    // major
    $chord_quality = getHarmonicQualityMajor($key.indexOf($note));
  } else if ($("#keys").val().indexOf("Minor") >= 0) {
    // major
    $chord_quality = getHarmonicQualityMinor($key.indexOf($note));
  }
  else { $chord_quality = "BLEH!"; }

  console.log("Harmonic Quality: " + $chord_quality);

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

  return $note + $quality + $ext;
}

function getHarmonicQualityMajor($scale_tone) {
  var $quality;
  switch($scale_tone) {
    case 0:
    case 3:
    case 4:
      // major
      $quality = "";
      break;
    case 1:
    case 2:
    case 5:
      // minor
      $quality = "m";
      break;
    case 6:
      // diminished
      $quality = "dim";
      break;
    default:
      $quality = "";
  }

  return $quality;
}

function getHarmonicQualityMinor($scale_tone) {
  var $quality;
  switch($scale_tone) {
    case 2:
    case 5:
    case 6:
      // major
      $quality = "";
      break;
    case 0:
    case 3:
    case 4:
      // minor
      $quality = "m";
      break;
    case 1:
      // diminished
      $quality = "dim";
      break;
    default:
      $quality = "";
  }

  return $quality;
}
