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


