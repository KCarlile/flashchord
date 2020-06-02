var $intervalId;
var $DELAY = 1000 * 4; // 1000ms * SECONDS

$(document).ready(function(){
    // slider setup
    $(function() {
        $("#slider").slider({
          value: 4,
          min: 2,
          max: 60,
          step: 2,
          slide: function(event, ui) {
            clearInterval($intervalId);
            $("#seconds").val(ui.value + " seconds");
            $DELAY = ui.value * 1000;
            chordTimer(); // start new
          }
        });
        $("#seconds").val($("#slider").slider("value") + " seconds");
        chordTimer();
      });

    // setup keys dropdown
    var option = '';
    for (var $key in $keys) {
       option += '<option value="'+ $key + '">' + $key + '</option>';
    }
    $("#keys").append(option);

    // chord change
    var changeChord = function() {
      var $difficulty = $('input[name="difficulty"]:checked').val();
      var $notes = getKey();
      console.log($notes);
      var $quality;
      var $ext;

      if ($difficulty == "beginner") {
        $quality = getRandom($quality_beginner);
        $ext = "";
      } else if ($difficulty == "intermediate") {
        $quality = getRandom($quality_intermediate);
        $ext = "";
      } else if ($difficulty == "advanced") {
        $quality = getRandom($quality_advanced);
        $ext = getRandom($extension)
      }
      $("#chord_name").text(getRandom($notes) + $quality + $ext);
    }

    function chordTimer() {
        changeChord();
        $intervalId = setTimeout(function() {
            chordTimer();
        }, $DELAY);
    }
});

/*
function getDelay() {
    $DELAY = $("#slider").slider("value") * 1000;
    return $DELAY;
}
*/

function getRandom ($array) {
    return $array[Math.floor(Math.random() * $array.length)];
}

function getKey() {
  var $key = $("#keys").val();
  var $key_notes;
  console.log("Selected: " + $key);

  if (!$key) {
    $key_notes = $chromatic;
    console.log("Any key");
  }
  else {
    $key_notes = $keys[$key];
  }
  console.log($key_notes);

  return $key_notes;
}
