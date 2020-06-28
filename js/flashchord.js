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

// build up a chord based on the selected options
function getChord() {
    return getRoot() + getChordQuality() + getExtension();
}

// get root of the chord based on selected settings
function getRoot() {
    // get selected key
    $key = getKey();

    // from key, get a random root
    $root = getRandom($key);

    // check for rare enharmonics
    if (!$('input[name="rare_enharmonics"]').is(":checked")) {
        $root = replaceRareEnharmonic($root);
    }

    return $root;
}

// get the available notes based on the selected key
function getKey() {
    var $key = $("#keys").val();
    var $key_notes;

    if (!$key || $key == "any") {
        $key_notes = $chromatic;
    }
    else {
        $key_notes = $keys[$key];
    }

    return $key_notes;
}

// get the chord quality
function getChordQuality() {
    var $quality;
    var $chord_types;

    // get selected chord types
    var $selected_chord_types = getSelectedChordTypes();

    // restrict to key
    if ($("#keys").val().indexOf("Major") >= 0) {
        // major
        $chord_types = getHarmonicQualityMajor($key.indexOf($root));;
    } else if ($("#keys").val().indexOf("Minor") >= 0) {
        // minor
        $chord_types = getHarmonicQualityMinor($key.indexOf($root));;
    }
    else {
        $chord_types = $all_chords;
    }

    // filter out chord types disabled by user
    $chord_types = $chord_types.filter(function(chord) {
        return $selected_chord_types.includes(chord);
    });

    // get chord quality
    $quality = getRandom($chord_types);

    // if the type returned is undefined because the user has eliminated the type...
    // just default to major
    if (!$quality) {
        $quality = "Δ"
    }

    return $quality;
}

// replace rare enharmonic (e.g. Fb) with a common one (e.g. E)z
function replaceRareEnharmonic($root) {
    if ($root == "C♭") {
        $root = "B";
        console.log("Replacing Cb with B");
    }
    else if ($root == "B♯") {
        $root = "C";
        console.log("Replacing B# with C");
    }
    else if ($root == "F♭") {
        $root = "E";
        console.log("Replacing Fb with E");
    }
    else if ($root == "E♯") {
        $root = "F";
        console.log("Replacing E# with F");
    }

    return $root;
}

// if extensions are selected, return one
function getExtension() {
    var $ext = "";

    if ($('input[name="extensions"]').is(":checked")) {
        $ext = '<sup>' + getRandom($extension) + '</sup>';
    }

    return $ext;
}

// get array of specified chord types
function getSelectedChordTypes() {
    var $selected_chord_types = [];

    // get the values of each selected checkbox
    $(".chord-type-selection").each(function() {
        if ($(this).is(":checked")) {
            $selected_chord_types.push($(this).attr("value"));
        }
    });

    return $selected_chord_types;
}

// get the correct type of chords for the scale tone in a major key
function getHarmonicQualityMajor($scale_tone) {
    var $chord_types;

    switch($scale_tone) {
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
function getHarmonicQualityMinor($scale_tone) {
    var $quality;
    switch($scale_tone) {
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

// get a random value from an array
function getRandom ($array) {
    return $array[Math.floor(Math.random() * $array.length)];
}
