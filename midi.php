<!doctype html>
<html lang="en">
  <head>
    <script src="js/metronome.js"></script>
    <?php require 'components/head.php'; ?>
    <title>MIDI Test | Flash Chord</title>
  </head>
  <body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <p class="lead">MIDI Test</p>
<div class="container">
  <section class="metronome-container">
    <div class="counter"></div>
      <div id="beat"></div>
      <input type="text" id="beats" placeholder="Number of Beats" />
      <input type="text" id="sub" placeholder="Beats per Beat" />
      <input type="text" id="bps" placeholder="Beats Per Second (bps)" />
      <button id="start" onclick="metronome.set(document.getElementById('beats').value, document.getElementById('sub').value, document.getElementById('bps').value)">Start</button>
      <button onclick="metronome.stop()">Stop</button>
      <button onclick="metronome.tap()">Tap</button>
    </div>
    <div class="container">
    </div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="container">
        </div>
    </footer>
    <?php require 'components/footer.php'; ?>
  </body>
</html>
