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

$(document).ready(() => {
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
const startFlashChord = () => {
    if (!$flash_chord_running) {
        $flash_chord_running = true;
        setupBeatsPerMeasure();
        setupBarsPerChord();
        update_bars_progress();

        $intervalId = setInterval(() => {
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
const stopFlashChord = () => {
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
const getChord = () => {
    return getRoot() + getChordQuality() + getExtension();
}

// get root of the chord based on selected settings
const getRoot = () => {
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
const getKey = () => {
    let $key = $("#keys").val();
    let $key_notes;

    if (!$key || $key == "any") {
        $key_notes = $chromatic;
    }
    else {
        $key_notes = $keys[$key];
    }

    return $key_notes;
}

// get the chord quality
const getChordQuality = () => {
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
    }
    else {
        $chord_types = $all_chords;
    }

    // filter out chord types disabled by user
    $chord_types = $chord_types.filter((chord) => {
        return $selected_chord_types.includes(chord);
    });

    // get chord quality
    $quality = getRandom($chord_types);

    // if the type returned is undefined because the user has eliminated the type...
    // just default to major
    if (!$quality) {
        $quality = ""
    }

    return $quality;
}

// replace rare enharmonic (e.g. Fb) with a common one (e.g. E)z
const replaceRareEnharmonic = ($root)=> {
    if ($root === "C♭") {
        $root = "B";
        console.log("Replacing Cb with B");
    }
    else if ($root === "B♯") {
        $root = "C";
        console.log("Replacing B# with C");
    }
    else if ($root === "F♭") {
        $root = "E";
        console.log("Replacing Fb with E");
    }
    else if ($root === "E♯") {
        $root = "F";
        console.log("Replacing E# with F");
    }
    return $root;
}

// if extensions are selected, return one
const getExtension = () => {
    let $ext = "";

    if ($('input[name="extensions"]').is(":checked")) {
        $ext = '<sup>' + getRandom($extension) + '</sup>';
    }

    return $ext;
}

// get array of specified chord types
const getSelectedChordTypes = () => {
    let $selected_chord_types = [];

    // get the values of each selected checkbox
    $(".chord-type-selection").each(()=> {
        if ($(this).is(":checked")) {
            $selected_chord_types.push($(this).attr("value"));
        }
    });

    return $selected_chord_types;
}

// get the correct type of chords for the scale tone in a major key
const getHarmonicQualityMajor = ($scale_tone) => {
    let $chord_types;

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
const getHarmonicQualityMinor = ($scale_tone) => {
   let $quality;
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
const getRandom = ($array) => {
    return $array[Math.floor(Math.random() * $array.length)];
}
