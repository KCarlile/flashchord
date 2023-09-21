/* global $keys, $tempo:true, $bars:true, $bars_per_chord:true, $flash_chord_running, $current_bar, $time_signature:true, $beats_per_measure:true, startFlashChord, stopFlashChord, update_bars_progress */

var $beginner_preset = true;
var $intermediate_preset = false;
var $advanced_preset = false;

// ------------------------------------------------------------
// UI setup functions
// ------------------------------------------------------------
$(document).ready(function() {
    // setup keys dropdown
    var option = "";
    for (var $key in $keys) {
        option += "<option value=\"" + $key + "\">" + $key + "</option>";
    }
    $("#keys").append(option);
    $("#keys").val("C Major"); // set C Major as the default

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
                $("#bars-per-chord").val(ui.value);
                $bars = ui.value;
            }
        });
        $("#bars-per-chord").val($("#bars").slider("value"));
    });

    // bars progress
    $(function() {
        $("#bars-progress").progressbar({
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
    $("input[type=radio][name=time-signature]").change(function() {
        if ($flash_chord_running) {
            stopFlashChord();
            startFlashChord();
        }

        setupBeatsPerMeasure();
    });

    // tempo slider change
    $("#tempo").slider({
        change: function(event, ui) { // eslint-disable-line no-unused-vars
            if ($flash_chord_running) {
                stopFlashChord();
                startFlashChord();
            }
        }
    });

    // bars slider change
    $("#bars").slider({
        change: function(event, ui) {
            $bars_per_chord = ui.value;

            if ($flash_chord_running) {
                stopFlashChord();
                startFlashChord();
            }
            else {
                update_bars_progress();
            }

            if(ui.value == 1) {
                $("#bars-progress").hide();
                $("#bars-progress-text").hide();
            }
            else {
                $("#bars-progress").show();
                $("#bars-progress-text").show();
            }
        }
    });

    // difficulty:beginner preset button
    $("#beginner-preset").click(function() {
        $(".difficulty-beginner").each(function() {
            if($beginner_preset) {
                $(this).prop("checked", false);
                $("#beginner-preset").removeClass("btn-success");
                $("#beginner-preset").addClass("btn-outline-success");
            }
            else {
                $(this).prop("checked", true);
                $("#beginner-preset").removeClass("btn-outline-success");
                $("#beginner-preset").addClass("btn-success");
            }
        });

        $beginner_preset = !$beginner_preset;
    });

    // difficulty:intermediate preset button
    $("#intermediate-preset").click(function() {
        $(".difficulty-intermediate").each(function() {
            if($intermediate_preset) {
                $(this).prop("checked", false);
                $("#intermediate-preset").removeClass("btn-warning");
                $("#intermediate-preset").addClass("btn-outline-warning");
            }
            else {
                $(this).prop("checked", true);
                $("#intermediate-preset").removeClass("btn-outline-warning");
                $("#intermediate-preset").addClass("btn-warning");
            }
        });

        $intermediate_preset = !$intermediate_preset;
    });

    // difficulty:advanced preset button
    $("#advanced-preset").click(function() {
        $(".difficulty-advanced").each(function() {
            if($advanced_preset) {
                $(this).prop("checked", false);
                $("#advanced-preset").removeClass("btn-danger");
                $("#advanced-preset").addClass("btn-outline-danger");
            }
            else {
                $(this).prop("checked", true);
                $("#advanced-preset").removeClass("btn-outline-danger");
                $("#advanced-preset").addClass("btn-danger");
            }
        });

        $advanced_preset = !$advanced_preset;
    });

    // chord type change
    $(".chord-type-selection").click(function() {
        if ($flash_chord_running) {
            stopFlashChord();
            startFlashChord();
        }
    });

    // chord type change
    $(".chord-type-preset").click(function() {
        if ($flash_chord_running) {
            stopFlashChord();
            startFlashChord();
        }
    });

    // hide/show next chord
    $("input[name=show-next-chord]").click(function(){
        $("#next-chord").toggle();
    });

    // hide/show visual metronome
    $("input[name=metronome-visual]").click(function(){
        $("#visual-metronome").toggle();
    });
});

// ------------------------------------------------------------
// UI functions
// ------------------------------------------------------------
// converts dropdown setting to beats per measure for time signature
function setupBeatsPerMeasure() {
    $time_signature = $("input[name=time-signature]:checked").val();

    // restore all visual beats
    $("#visual-metronome").children().show();

    if ($time_signature == "time-44") {
        $beats_per_measure = 4;
        $("#beat5").hide();
        $("#beat6").hide();
    }
    else if ($time_signature == "time-34") {
        $beats_per_measure = 3;
        $("#beat4").hide();
        $("#beat5").hide();
        $("#beat6").hide();
    }
    else if ($time_signature == "time-24") {
        $beats_per_measure = 2;
        $("#beat3").hide();
        $("#beat4").hide();
        $("#beat5").hide();
        $("#beat6").hide();
    }
    else if ($time_signature == "time-68") {
        $beats_per_measure = 6;
    }
    else {
        $beats_per_measure = 4;
        $("#beat5").hide();
        $("#beat6").hide();
    }
}

// prepares UI elements for bars per chord
function setupBarsPerChord() {
    $bars_per_chord = $("#bars").slider("value");
    $("#bars-progress").progressbar({
        value: (100 / $bars_per_chord) * $current_bar
    });
}
