/* global $major_chords, $minor_chords, $dominant_chords, $diminished_chords, $augmented_chords, logger */

// ------------------------------------------------------------
// Note altering functions
// ------------------------------------------------------------

// return the note lowered by a half-step
function flatten($note) {
    if ($note.length == 1) {
        $note = $note + "♭";
    } else if ($note.substr(1,1) == "♯") {
        $note = $note.substr(0,1);
    } else if ($note.substr(1,1) == "♭") {
        $note = $note.substr(0,1) + "𝄫";
    }

    return $note;
}

// return the note raised by a half-step
function sharpen($note) {
    if ($note.length == 1) {
        $note = $note + "♯";
    } else if ($note.substr(1,1) == "♭") {
        $note = $note.substr(0,1);
    } else if ($note.substr(1,1) == "♯") {
        $note = $note.substr(0,1) + "𝄪";
    }

    return $note;
}

// ------------------------------------------------------------
// Harmony mapping functions
// ------------------------------------------------------------

// get the correct type of chords for the scale tone in a major key
function getHarmonicQualityMajor($scale_tone) {
    let $chord_types;

    switch($scale_tone) {
    case 0:
        // major
        $chord_types = $major_chords;
        break;
    case 1:
        // minor
        $chord_types = $minor_chords;
        break;
    case 2:
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
    let $chord_types;
    
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

// replace rare enharmonic (e.g. Fb) with a common one (e.g. E)z
function replaceRareEnharmonic($root) {
    if ($root == "C♭") {
        $root = "B";
        logger("Replacing Cb with B");
    }
    else if ($root == "B♯") {
        $root = "C";
        logger("Replacing B# with C");
    }
    else if ($root == "F♭") {
        $root = "E";
        logger("Replacing Fb with E");
    }
    else if ($root == "E♯") {
        $root = "F";
        logger("Replacing E# with F");
    }

    return $root;
}
