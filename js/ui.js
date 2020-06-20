// ------------------------------------------------------------
// UI setup functions
// ------------------------------------------------------------
$(document).ready(function() {
    // setup keys dropdown
    var option = '';
    for (var $key in $keys) {
        option += '<option value="'+ $key + '">' + $key + '</option>';
    }
    $("#keys").append(option);

    // FAQ accordion
    $("#accordion").accordion({
        active: false,
        collapsible: true
    });

    // tempo slider setup
    $(function() {
        $("#tempo").slider({
            value: $tempo,
            min: 60,
            max: 220,
            step: 2,
            slide: function(event, ui) {
                $("#bpm").val(ui.value);
                $tempo = ui.value;
            }
        });
        $("#bpm").val($("#tempo").slider("value"));
    });

    // bars per chord slider setup
    $(function() {
        $("#bars").slider({
            value: $bars,
            min: 1,
            max: 16,
            step: 1,
            slide: function(event, ui) {
                $("#bars_per_chord").val(ui.value);
                $bars = ui.value;
            }
        });
        $("#bars_per_chord").val($("#bars").slider("value"));
    });

    // bars progress
    $(function() {
        $("#bars_progress").progressbar({
            value: (100 / $bars_per_chord) * $current_bar
        });
    });

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

    // time signature radio button change
    $('input[type=radio][name=time_signature]').change(function() {
        if ($flash_chord_running) {
            stopFlashChord();
            startFlashChord();
        }

        setupBeatsPerMeasure();
    });

    // tempo slider change
    $("#tempo").slider({
        change: function(event, ui) {
            if ($flash_chord_running) {
                stopFlashChord();
                startFlashChord();
            }
        }
    });

    // bars slider change
    $("#bars").slider({
        change: function(event, ui) {
            if ($flash_chord_running) {
                stopFlashChord();
                startFlashChord();
            }

            if(ui.value == 1) {
                $("#bars_progress").hide();
            }
            else {
                $("#bars_progress").show();
            }
        }
    });

    // hide/show next chord
    $('input[name="hide_next_chord"]').click(function(){
        $("#next_chord").toggle();
    });

    // hide/show visual metronome
    $('input[name="metronome_visual"]').click(function(){
        $("#visual_metronome").toggle();
    });
});

// ------------------------------------------------------------
// UI functions
// ------------------------------------------------------------
// converts dropdown setting to beats per measure for time signature
function setupBeatsPerMeasure() {
    $time_signature = $('input[name="time_signature"]:checked').val();

    // restore all visual beats
    $("#visual_metronome").children().show();

    if ($time_signature == "time_44") {
        $beats_per_measure = 4;
        $("#beat5").hide();
        $("#beat6").hide();
    }
    else if ($time_signature == "time_34") {
        $beats_per_measure = 3;
        $("#beat4").hide();
        $("#beat5").hide();
        $("#beat6").hide();
    }
    else if ($time_signature == "time_24") {
        $beats_per_measure = 2;
        $("#beat3").hide();
        $("#beat4").hide();
        $("#beat5").hide();
        $("#beat6").hide();
    }
    else if ($time_signature == "time_68") {
        $beats_per_measure = 6;
    }
    else {
        $beats_per_measure = 4;
        $("#beat5").hide();
        $("#beat6").hide();
    }
}

function setupBarsPerChord() {
    $bars_per_chord = $("#bars").slider("value");
    $("#bars_progress").progressbar({
        value: (100 / $bars_per_chord) * $current_bar
    });
}
