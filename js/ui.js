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

    // hide/show next chord
    $('input[name="hide_next_chord"]').click(function(){
        $("#next_chord").toggle();
    });

    // hide/show visual metronome
    $('input[name="disable_visual_metronome"]').click(function(){
        $("#visual_metronome").toggle();
    });

    // FAQ accordion
    $("#accordion").accordion({
      collapsible: true
    });

    // slider setup
    $(function() {
        $("#tempo").slider({
          value: $tempo,
          min: 60,
          max: 220,
          step: 2,
          slide: function(event, ui) {
            //clearInterval($intervalId);
            $("#bpm").val(ui.value);
            $tempo = ui.value;
          }
        });
        $("#bpm").val($("#tempo").slider("value"));
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
