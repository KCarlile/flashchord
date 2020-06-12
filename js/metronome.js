var $downbeat_beep = new Audio("https://www.freesound.org/data/previews/243/243748_1038806-lq.mp3");
var $beat_beep = new Audio("https://www.freesound.org/data/previews/243/243749_1038806-lq.mp3");

var $beats_per_measure = 4;
var $current_beat = 0;
var $tempo_delay;

var interval = null;

$(document).ready(function() {
    // setup chords
    $chord = $next_chord ? $next_chord : getChord();
    $next_chord = getChord();
    $("#chord_name").html($chord);
    $("#next_chord_name").html($next_chord);

    // handle start click
    $("#start").click(function() {
        $tempo_delay = 60 / $DELAY * 1000;

        interval = setInterval(function () {
            increment_beat();

            if ($current_beat == 1) {
                // change chords
                $chord = $next_chord ? $next_chord : getChord();
                $next_chord = getChord();
                $("#chord_name").html($chord);
                $("#next_chord_name").html($next_chord);
            }

            // metronome beep
            if (!$('input[name="disable_metronome"]').is(":checked")) {
                if ($current_beat == 1) {
                    $downbeat_beep.play();
                }
                else {
                    $beat_beep.play();
                }

            }

        }, $tempo_delay);

        console.log("start.click()");
    });

    // handle stop click
    $("#stop").click(function() {
        clearInterval(interval);
        console.log("stop.click()");
    });
});

function increment_beat() {
    if ($current_beat == $beats_per_measure) {
        $current_beat = 1;
    }
    else {
        $current_beat = $current_beat + 1;
    }
}
