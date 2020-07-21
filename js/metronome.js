// ------------------------------------------------------------
// Metronome functionality
// ------------------------------------------------------------
const $downbeat_beep = new Audio("audio/metronome/downbeat_beep.mp3");
const $beat_beep = new Audio("audio/metronome/beat_beep.mp3");

let $beats_per_measure = 4;
let $current_beat = 0;

let $bars_per_chord = 0;
let $current_bar = 1;

// ------------------------------------------------------------
// Metronome utility functions
// ------------------------------------------------------------
// increment to the next beat
function increment_beat() {
    if ($current_beat >= $beats_per_measure) {
        $current_beat = 1;
        increment_bar();
    }
    else {
        $current_beat = $current_beat + 1;
    }

    // reset classes for beats
    $("#visual_metronome").children().removeClass();
    $("#visual_metronome").children().addClass("text-secondary");
    // set correct beat
    $("#beat" + $current_beat).removeClass("text-secondary");
    $("#beat" + $current_beat).addClass("text-primary");
}

// increment to the next bar
function increment_bar() {
    if ($current_bar >= $bars_per_chord) {
        $current_bar = 1;
    }
    else {
        $current_bar = $current_bar + 1;
    }

    update_bars_progress();
}

// updat the UI with the current status of the bar count
function update_bars_progress() {
    $("#bars_progress").progressbar({
        value: (100 / $bars_per_chord) * $current_bar
    });

    $("#current_bar_text").text($current_bar);
    $("#bar_count_text").text($bars_per_chord);
}

// get the tempo
function getTempo() {
    // factor = 1 for all x/4 time signatures
    $factor = 1;

    // factor = 3 for 6/8 time signature, makes it feel like it's in 2 (3+3)
    if ($beats_per_measure === 6) {
        $factor = 3;
    }

    return (60 / $tempo) * 1000 / $factor;
}
