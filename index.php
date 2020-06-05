<!doctype html>
<html lang="en">
  <head>
    <?php require 'components/head.php'; ?>
    <title>Practice chords, scales, or arpeggios against and endless stream of randomized chords | Flash Chord</title>
  </head>
  <body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <p class="lead">Practice chords, scales, or arpeggios against and endless stream of randomized chords!</p>
    </div>
    <div class="container">
        <h2 id="chord_name">Chord</h2>
        <div id="next_chord">
          <h3 class="text-center">Up next...</h3>
          <h2 id="next_chord_name">Next Chord</h2>
        </div>
    </div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="container">
            <div class="row">
              <div class="col-md">
                <h4>Speed</h4>
                <div id="slider"></div>
                <label for="seconds">Delay:</label>
                <input type="text" id="seconds" readonly style="border:0; font-weight:bold;">
              </div>
              <div class="col-md">
                <h4>Key</h4>
                <label for="keys">Select a key:</label>
                <select id="keys">
                    <option value="">Any</option>
                </select>
              </div>
              <div class="col-md">
                <h4>Difficulty</h4>
                <input type="radio" id="beginner" name="difficulty" value="beginner" checked>
                <label for="beginner">Beginner <small>(major, minor, 7, minor 7)</small></label><br>
                <input type="radio" id="intermediate" name="difficulty" value="intermediate">
                <label for="intermediate">Intermediate <small>(maj7, 6, m6, sus2, sus4, 9, m9)</small></label><br>
                <input type="radio" id="advanced" name="difficulty" value="advanced">
                <label for="advanced">Advanced <small>(+, °, m7♭5, 7alt, 6/9, 11, 13)</small></label>
                <p>
                    <input type="checkbox" name="extensions" />
                    <label for="extensions">Add extensions <small>(♯5, ♭5, ♯9, ♭9, ♯11, ♯13, ♭13)</small></label>
                </p>
                <p>
                    <input type="checkbox" name="hide_next_chord" />
                    <label for="hide_next_chord">Hide next chord</label>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md">
                <?php require 'components/copyright.php'; ?>
              </div>
            </div>
        </div>
    </footer>
    <?php require 'components/footer.php'; ?>
  </body>
</html>
