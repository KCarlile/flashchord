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
