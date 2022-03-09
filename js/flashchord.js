// Safari audio lag fix
// No idea why this works, but someone online said this fixed the problem and it did! :)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

let $intervalId;
let $tempo = 100;
let $bars = 1;
let $chord;
let $next_chord;
let $flash_chord_running = false;

$(document).ready(function () {
  // ------------------------------------------------------------
  // Init
  // ------------------------------------------------------------
  // first, make sure we're on the home page before doing any of the chord stuff
  if ($("#chord-name").length) {
    $chord = $next_chord ? $next_chord : getChord();

    $next_chord = getChord();

    $("#chord-name").html($chord);
    $("#next-chord-name").html($next_chord);

    setupBeatsPerMeasure();
    setupBarsPerChord();
  }
});

// ------------------------------------------------------------
// Main Flash Chord functions
// ------------------------------------------------------------
// start Flash Chord functionality
function startFlashChord () {
  if (!$flash_chord_running) {
    $flash_chord_running = true;
    setupBeatsPerMeasure();
    setupBarsPerChord();
    update_bars_progress();

    $intervalId = setInterval(function () {
      increment_beat();

      if (($current_beat === 1) && ($current_bar === 1)) {
        // change chords
        $chord = $next_chord ? $next_chord : getChord();
        $next_chord = getChord();
        $("#chord-name").html($chord);
        $("#next-chord-name").html($next_chord);
      }

      // metronome beep
      if ($('input[name="metronome_audio"]').is(":checked")) {
        if ($current_beat === 1) {
          $downbeat_beep.play();
        } else {
          $beat_beep.play();
        }
      }
    }, getTempo());
  }
}

// stop Flash Chord functionality
function stopFlashChord () {
  if ($flash_chord_running) {
    $flash_chord_running = false;
    clearInterval($intervalId);
    $current_beat = 0;
    $current_bar = 1;
  }
}

// ------------------------------------------------------------
// Flash Chord utility functions
// ------------------------------------------------------------

// build up a chord based on the selected options
function getChord () {
  logger_new();
  $new_chord = "";

  // loop to ensure we get a new chord (no repeated chords)
  do {
    $root = getRoot();
    $quality = getChordQuality();
    $extension = getExtension();
    $slash = getSlash($root, $quality);

    $new_chord = $root + $quality + $extension + $slash;
  } while ($next_chord === $new_chord);

  logger_break();
  logger("Root: " + $root);
  logger("Quality: " + $quality);
  logger("Extension: " + $extension);
  logger("Slash: " + $slash);

  return $new_chord;
}

// get slash chord (bass note, inversion) if enabled
function getSlash ($root, $quality) {
  $slash = "";
  // check for slash chords
  if ($('input[name="slash_chords"]').is(":checked")) {
    $slash_degree = getRandom($slash_degrees);
    $slash_note = $root;

    // add theoretical keys to real keys for chord tones
    $chord_keys = Object.assign({}, $keys, $theoretical_keys);

    // if not 1 (root), then determine the note and append it
    if ($slash_degree !== 0) {
      if (($quality === "m") || ($quality === "°")) {
        // use minor
        $slash_note = $chord_keys[$root + " Minor"][$slash_degree];

        // if diminished and 5 (second inversion)
        if (($quality === "°") && ($slash_degree === 4)) {
          $slash_note = flatten($slash_note);
        }
      } else if (($quality === "+") && ($slash_degree === 4)) {
        // if augmented and 5 (second inversion)
        $slash_note = $chord_keys[$root + " Major"][$slash_degree];
        $slash_note = sharpen($slash_note);
      } else {
        $slash_note = $chord_keys[$root + " Major"][$slash_degree];
      }

      $slash = "<sub>/" + $slash_note + "</sub>";
    }
  }

  return $slash;
}

// get root of the chord based on selected settings
function getRoot () {
  // get selected key
  $key = getKey();

  // from key, get a random root
  $root = getRandom($key);

  // check for rare enharmonics
  if (!$('input[name="rare_enharmonics"]').is(":checked")) {
    $root = replaceRareEnharmonic($root);
  }

  logger("Root (random): " + $root);

  return $root;
}

// get the available notes based on the selected key
function getKey () {
  let $key = $("#keys").val();
  let $key_notes;

  if (!$key || $key === "any") {
    $key_notes = $chromatic;
  } else {
    $key_notes = $keys[$key];
  }

  logger("Key: " + $key_notes);

  return $key_notes;
}

// get the chord quality
function getChordQuality () {
  let $quality;
  let $chord_types;

  // get selected chord types
  let $selected_chord_types = getSelectedChordTypes();

  // restrict to key
  if ($("#keys").val().indexOf("Major") >= 0) {
    // major
    $chord_types = getHarmonicQualityMajor($key.indexOf($root));;
  } else if ($("#keys").val().indexOf("Minor") >= 0) {
    // minor
    $chord_types = getHarmonicQualityMinor($key.indexOf($root));;
  } else {
    $chord_types = $all_chords;
  }

  // remove empty elements
  $chord_types = $chord_types.filter(String);

  logger("Chord types: " + $chord_types);

  // filter out chord types disabled by user
  $chord_types = $chord_types.filter(function (chord) {
    return $selected_chord_types.includes(chord);
  });

  logger("Filtered chord types: " + $chord_types);

  // get chord quality
  $quality = getRandom($chord_types);

  // if the type returned is undefined because the user has eliminated the type...
  // just default to major
  if (!$quality) {
    $quality = ""
  }

  logger("Quality (random): " + $quality);

  return $quality;
}

// replace rare enharmonic (e.g. Fb) with a common one (e.g. E)z
function replaceRareEnharmonic ($root) {
  if ($root === "C♭") {
    $root = "B";
    logger("Replacing Cb with B");
  } else if ($root === "B♯") {
    $root = "C";
    logger("Replacing B# with C");
  } else if ($root === "F♭") {
    $root = "E";
    logger("Replacing Fb with E");
  } else if ($root === "E♯") {
    $root = "F";
    logger("Replacing E# with F");
  }

  return $root;
}

// if extensions are selected, return one
function getExtension () {
  let $ext = "";

  if ($('input[name="extensions"]').is(":checked")) {
    $ext = getRandom($extensions);

    if ($ext.length > 0) {
      $ext = '<sup>' + $ext + '</sup>';
    }
  }

  logger("Extension (random): " + $ext);

  return $ext;
}

// get array of specified chord types
function getSelectedChordTypes () {
  let $selected_chord_types = [];

  // get the values of each selected checkbox
  $(".chord-type-selection").each(function () {
    if ($(this).is(":checked")) {
      $selected_chord_types.push($(this).attr("value"));
    }
  });

  // remove empty elements
  $selected_chord_types = $selected_chord_types.filter(String);

  logger('Selected chord types: ' + $selected_chord_types);

  return $selected_chord_types.filter(String);
}

// get the correct type of chords for the scale tone in a major key
function getHarmonicQualityMajor ($scale_tone) {
  let $chord_types;

  switch ($scale_tone) {
    case 0:
      // major
      $chord_types = $major_chords;
      break;
    case 1:
    case 5:
      // minor
      $chord_types = $minor_chords;
      break;
    case 2:
    case 5:
      // minor
      $chord_types = $minor_chords;
      break;
    case 3:
      // major
      $chord_types = $major_chords;
      break;
    case 4:
      // dominant
      $chord_types = $dominant_chords;
      break;
    case 5:
      // minor
      $chord_types = $minor_chords;
      break;
    case 6:
      // diminished
      $chord_types = $diminished_chords;
      break;
    default:
      $chord_types = [];
  }

  return $chord_types;
}

// get the correct type of chords for the scale tone in a minor key
function getHarmonicQualityMinor ($scale_tone) {
  let $quality;
  switch ($scale_tone) {
    case 0:
      // minor
      $chord_types = $minor_chords;
      break;
    case 1:
      // diminished
      $chord_types = $diminished_chords;
      break;
    case 2:
      // minor
      $chord_types = $augmented_chords;
      break;
    case 3:
      // minor
      $chord_types = $minor_chords;
      break;
    case 4:
      // minor
      $chord_types = $dominant_chords;
      break;
    case 5:
      // major
      $chord_types = $major_chords;
      break;
    case 6:
      // major
      $chord_types = $major_chords;
      break;
    default:
      $chord_types = [];
  }

  return $chord_types;
}
