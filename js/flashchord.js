// Safari audio lag fix
// No idea why this works, but someone online said this fixed the problem and it did! :)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

var $intervalId;
var $tempo = 100;
var $bars = 1;
var $chord;
var $next_chord;
var $flash_chord_running = false;

$(document).ready(function() {
    // ------------------------------------------------------------
    // Init
    // ------------------------------------------------------------
    // first, make sure we're on the home page before doing any of the chord stuff
    if ($("#chord_name").length) {
        $chord = $next_chord ? $next_chord : getChord();
        $next_chord = getChord();
        $("#chord_name").html($chord);
        $("#next_chord_name").html($next_chord);

        setupBeatsPerMeasure();
        setupBarsPerChord();
    }
});

// ------------------------------------------------------------
// Main Flash Chord functions
// ------------------------------------------------------------
// start Flash Chord functionality
function startFlashChord() {
    if (!$flash_chord_running) {
        $flash_chord_running = true;
        setupBeatsPerMeasure();
        setupBarsPerChord();
        update_bars_progress();

        $intervalId = setInterval(function () {
            increment_beat();

            if (($current_beat == 1) && ($current_bar == 1)) {
                // change chords
                $chord = $next_chord ? $next_chord : getChord();
                $next_chord = getChord();
                $("#chord_name").html($chord);
                $("#next_chord_name").html($next_chord);
            }

            // metronome beep
            if ($('input[name="metronome_audio"]').is(":checked")) {
                if ($current_beat == 1) {
                    $downbeat_beep.play();
                }
                else {
                    $beat_beep.play();
                }
            }
        }, getTempo());
    }
}

// stop Flash Chord functionality
function stopFlashChord() {
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
    //console.log($key_notes);

    return $key_notes;
}

// build up a chord based on the selected options
function getChord() {
    var $difficulty = $('input[name="difficulty"]:checked').val();
    var $key = getKey();
    var $note = getRandom($key);
    var $key_quality = "any";
    var $quality;
    var $ext;

    // restrict to key
    if ($("#keys").val().indexOf("Major") >= 0) {
        // major
        $key_quality = getHarmonicQualityMajor($key.indexOf($note));
    } else if ($("#keys").val().indexOf("Minor") >= 0) {
        // major
        $key_quality = getHarmonicQualityMinor($key.indexOf($note));
    }

    // get quality
    if ($difficulty == "beginner") {
        $quality = getRandom($quality_beginner);
        $ext = "";
    } else if ($difficulty == "intermediate") {
        $quality = getRandom($quality_intermediate);
        $ext = "";
    } else if ($difficulty == "advanced") {
        $quality = getRandom($quality_advanced);
    }

    // restrict to key if set
    if ($key_quality != "any") {
        $quality = $key_quality;
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
