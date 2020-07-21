let $beginner_preset = true;
let $intermediate_preset = false;
let $advanced_preset = false;

// ------------------------------------------------------------
// UI setup functions
// ------------------------------------------------------------
$(document).ready(function() {
    // setup keys dropdown
    let option = '';
    for (const $key in $keys) {
        option += '<option value="'+ $key + '">' + $key + '</option>';
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
            $bars_per_chord = ui.value;

            if ($flash_chord_running) {
                stopFlashChord();
                startFlashChord();
            }
            else {
                update_bars_progress();
            }

            if(ui.value == 1) {
                $("#bars_progress").hide();
                $("#bars_progress_text").hide();
            }
            else {
                $("#bars_progress").show();
                $("#bars_progress_text").show();
            }
        }
    });

    // difficulty:beginner preset button
    $("#beginner_preset").click(function() {
        $(".difficulty_beginner").each(function() {
            if($beginner_preset) {
                $(this).prop("checked", false);
                $("#beginner_preset").removeClass("btn-success");
                $("#beginner_preset").addClass("btn-outline-success");
            }
            else {
                $(this).prop("checked", true);
                $("#beginner_preset").removeClass("btn-outline-success");
                $("#beginner_preset").addClass("btn-success");
            }
        })

        $beginner_preset = !$beginner_preset;
    });

    // difficulty:intermediate preset button
    $("#intermediate_preset").click(function() {
        $(".difficulty_intermediate").each(function() {
            if($intermediate_preset) {
                $(this).prop("checked", false);
                $("#intermediate_preset").removeClass("btn-warning");
                $("#intermediate_preset").addClass("btn-outline-warning");
            }
            else {
                $(this).prop("checked", true);
                $("#intermediate_preset").removeClass("btn-outline-warning");
                $("#intermediate_preset").addClass("btn-warning");
            }
        })

        $intermediate_preset = !$intermediate_preset;
    });

    // difficulty:advanced preset button
    $("#advanced_preset").click(function() {
        $(".difficulty_advanced").each(function() {
            if($advanced_preset) {
                $(this).prop("checked", false);
                $("#advanced_preset").removeClass("btn-danger");
                $("#advanced_preset").addClass("btn-outline-danger");
            }
            else {
                $(this).prop("checked", true);
                $("#advanced_preset").removeClass("btn-outline-danger");
                $("#advanced_preset").addClass("btn-danger");
            }
        })

        $advanced_preset = !$advanced_preset;
    });

    // chord type change
    $('.chord-type-selection').click(function() {
        if ($flash_chord_running) {
            stopFlashChord();
            startFlashChord();
        }
    });

    // chord type change
    $('.chord-type-preset').click(function() {
        if ($flash_chord_running) {
            stopFlashChord();
            startFlashChord();
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

// prepares UI elements for bars per chord
function setupBarsPerChord() {
    $bars_per_chord = $("#bars").slider("value");
    $("#bars_progress").progressbar({
        value: (100 / $bars_per_chord) * $current_bar
    });
}
