var $intervalId;
var $DELAY = 1000 * 4; // 1000ms * SECONDS
var $chord;
var $next_chord;

$(document).ready(function() {
  // make sure we're on the home page
  if(document.getElementById("chord_name") !== null)
  {
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

    // chord change
    var changeChord = function() {
      $chord = $next_chord ? $next_chord : getChord();
      $next_chord = getChord();

      $("#chord_name").html($chord);
      $("#next_chord_name").html($next_chord);
    }

    // do the delayed chord change thing :)
    function chordTimer() {
        changeChord();
        $intervalId = setTimeout(function() {
            chordTimer();
        }, $DELAY);
    }
  }
});

// get a random value from an array
function getRandom ($array) {
    return $array[Math.floor(Math.random() * $array.length)];
}

// get the available notes based on the selected key
function getKey() {
  var $key = $("#keys").val();
  var $key_notes;

  if (!$key) {
    $key_notes = $chromatic;
  }
  else {
    $key_notes = $keys[$key];
  }
  console.log($key_notes);

  return $key_notes;
}

// build up a chord based on the selected options
function getChord() {
  var $difficulty = $('input[name="difficulty"]:checked').val();
  var $key = getKey();
  var $note = getRandom($key);

  if ($("#keys").val().indexOf("Major") >= 0) {
    // major
    $chord_quality = getHarmonicQualityMajor($key.indexOf($note));
  } else if ($("#keys").val().indexOf("Minor") >= 0) {
    // major
    $chord_quality = getHarmonicQualityMinor($key.indexOf($note));
  }
  else { $chord_quality = "None"; }

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
  }

  return $note + $quality + getExtension();
}

// if extensions are selected, return one
function getExtension() {
  var $ext = "";

  if ($('input[name="extensions"]').is(":checked")) {
    $ext = '<sup>' + getRandom($extension) + '</sup>';
  }

  return $ext;
}

// get the correct type of chord for the scale tone in a major key
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

// get the correct type of chord for the scale tone in a minor key
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
