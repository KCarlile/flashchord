// ------------------------------------------------------------
// Metronome functionality
// ------------------------------------------------------------
var $downbeat_beep = new Audio("https://www.freesound.org/data/previews/243/243748_1038806-lq.mp3");
var $beat_beep = new Audio("https://www.freesound.org/data/previews/243/243749_1038806-lq.mp3");

var $beats_per_measure = 4;
var $current_beat = 0;
var $tempo_delay;

$(document).ready(function() {
    // setup chords
    $chord = $next_chord ? $next_chord : getChord();
    $next_chord = getChord();
    $("#chord_name").html($chord);
    $("#next_chord_name").html($next_chord);

    // ------------------------------------------------------------
    // Event handling
    // ------------------------------------------------------------
    // handle start click
    $("#start").click(function() {
        startFlashChord();
    });

    // handle stop click
    $("#stop").click(function() {
        stopFlashChord();
    });
});

// ------------------------------------------------------------
// Metronome utility functions
// ------------------------------------------------------------
// increment to the next beat
function increment_beat() {
    if ($current_beat >= $beats_per_measure) {
        $current_beat = 1;
    }
    else {
        $current_beat = $current_beat + 1;
    }
}

// get the tempo
function getTempo() {
    $factor = 1;

    if ($beats_per_measure == 6) {
        $factor = 3;
    }

    return (60 / $tempo) * 1000 / $factor;
}

// set beats per measure based on time signature
function setupBeatsPerMeasure() {
    $time_signature = $('input[name="time_signature"]:checked').val();

    if ($time_signature == "time_44") {
        $beats_per_measure = 4;
    }
    else if ($time_signature == "time_34") {
        $beats_per_measure = 3;
    }
    else if ($time_signature == "time_24") {
        $beats_per_measure = 2;
    }
    else if ($time_signature == "time_68") {
        $beats_per_measure = 6;
    }
    else {
        $beats_per_measure = 4;
    }
}
