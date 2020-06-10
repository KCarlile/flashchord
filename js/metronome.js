// WORKING: http://jsfiddle.net/shawn31313/07L43jkf/
 var main, beats = 4,
     subdivision = 1,
     bps = 120 * subdivision;
 var Off_Beep = new Audio("https://www.freesound.org/data/previews/250/250551_4570971-lq.mp3");
 var On_Beep = new Audio("https://www.freesound.org/data/previews/243/243749_1038806-lq.mp3");
 var first_Beep = new Audio("https://www.freesound.org/data/previews/243/243748_1038806-lq.mp3");
 var metronome = {
     timer: false,
     tapsTime: false,
     tapBPS: false,
     set: function (number_of_beats, sub_divison, beats_per_sec) {
         beats = parseFloat(number_of_beats, 10) || beats;
         subdivision = parseFloat(sub_divison, 10) || subdivision;
         bps = beats_per_sec != undefined ? parseFloat(beats_per_sec, 10) * subdivision : bps;
         metronome.start()
     },
     start: function () {
         var main = $("#beat");

         if (bps > 350) {
            bps = 350;
            $("#bps").val(bps);
         }

         first_Beep.play();
         clearInterval(metronome.timer);
         main.empty();
         for (var i = 0; i < beats; i++) {
             main.append('<div class="b' + (i + 1) + ' beat main ' + (i == 0 ? "on" : false) + '"></div>');
             for (var ii = 1; ii < subdivision; ii++) {
                 main.append('<div data-id="' + (i + 1) + '-' + ii + '" class="sub beat" ' + (ii == 1 ? "style='margin: 0px -9px 10px -13px'" : false) + '></div>');
             }
         }

         metronome.timer = setInterval(function () {
             var currentBeat = main.children(".on");
             var nextBeat = currentBeat.removeClass("on").next();
             if (nextBeat.length !== 0) {
                 nextBeat.addClass("on");
                 if (nextBeat.hasClass("sub")) {
                     Off_Beep.play();
                 } else {
                     On_Beep.play();
                 }
             } else {
                 main.children().first().addClass("on");
                 first_Beep.play();
             };
         }, (60 / bps) * 1000);
     },
     stop: function () {
         clearInterval(metronome.timer);
         $("#beat .on").removeClass("on")
     },
     tap: function () {
         if (!metronome.tapBPS) {
             metronome.tapBPS = new Date().getTime();
             return false;
         }
         var current = new Date().getTime();
         var diff = current - metronome.tapBPS;

         document.getElementById('bps').value = Math.round((1000 / diff) * 60);
         document.getElementById('start').click()
         metronome.tapBPS = current;
     }
 };
 $(document).ready(function () {
       //metronome.set(4, 1, 100)
 });
