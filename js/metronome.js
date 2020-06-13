// ------------------------------------------------------------
// Metronome functionality
// ------------------------------------------------------------
var $downbeat_beep = new Audio("https://www.freesound.org/data/previews/243/243748_1038806-lq.mp3");
var $beat_beep = new Audio("https://www.freesound.org/data/previews/243/243749_1038806-lq.mp3");

var $beats_per_measure = 4;
var $current_beat = 0;

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
    // factor = 1 for all x/4 time signatures
    $factor = 1;

    // factor = 3 for 6/8 time signature, makes it feel like it's in 2 (3+3)
    if ($beats_per_measure == 6) {
        $factor = 3;
    }

    return (60 / $tempo) * 1000 / $factor;
}
