<!doctype html>
<html lang="en">
  <head>
    <?php require 'components/head.php'; ?>
    <title>Practice chords, scales, or arpeggios against an endless stream of randomized chords | Flash Chord</title>
  </head>
  <body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <p class="lead">Practice chords, scales, or arpeggios against an endless stream of randomized chords!</p>
    </div>
    <div class="container">
        <h2 id="chord_name">Chord</h2>
        <div id="next_chord">
          <h3 class="text-center">Up next...</h3>
          <h2 id="next_chord_name">Next Chord</h2>
        </div>
    </div>
    <div class="container border-top mt-5">
        <div class="row">
          <div class="col-md mt-5">
            <h4>Speed</h4>
            <div id="slider"></div>
            <label for="seconds">Delay:</label>
            <input type="text" id="seconds" readonly style="border:0; font-weight:bold;">

            <h4 class="mt-5">Key</h4>
            <label for="keys">Select a key:</label>
            <select id="keys" class="custom-select w-25">
                <option value="">Any</option>
            </select>
          </div>
          <div class="col-md mt-5">
            <h4>Difficulty</h4>
            <div class="custom-control custom-radio">
              <input type="radio" id="beginner" class="custom-control-input" name="difficulty" value="beginner" checked>
              <label for="beginner" class="custom-control-label">Beginner <small>(major, minor, 7, minor 7)</small></label>
            </div>
            <div class="custom-control custom-radio mt-1">
            <input type="radio" id="intermediate" class="custom-control-input" name="difficulty" value="intermediate">
            <label for="intermediate" class="custom-control-label">Intermediate <small>(maj7, 6, m6, sus2, sus4, 9, m9)</small></label>
            </div>
            <div class="custom-control custom-radio mt-1">
            <input type="radio" id="advanced" class="custom-control-input" name="difficulty" value="advanced">
            <label for="advanced" class="custom-control-label">Advanced <small>(+, °, m7♭5, 7alt, 6/9, 11, 13)</small></label>
            </div>

            <div class="custom-control custom-checkbox mt-3">
                <input type="checkbox" class="custom-control-input" id="extensions" name="extensions" />
                <label for="extensions" class="custom-control-label">Add extensions <small>(♯5, ♭5, ♯9, ♭9, ♯11, ♯13, ♭13)</small></label>
            </div>
            <div class="custom-control custom-checkbox mt-3">
                <input type="checkbox" class="custom-control-input" id="hide_next_chord" name="hide_next_chord" />
                <label for="hide_next_chord" class="custom-control-label">Hide next chord</label>
            </div>
          </div>
        </div>
        <div class="row border-top mt-5 pt-5">
          <div class="col-md">
            <p><strong>Flash Chord</strong> was created to help musicians take practicing chords, scales, and arpeggios to the next level by removing predictability and repetition. Flash Chord generates chords in a random sequence and with random qualities (major, minor, 7, etc.) so musicians have to learn the full range of their instrument without getting locked into patterns and memorization.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <h4>Which instruments can use Flash Chord?</h4>
            <ul>
              <li>Guitar</li>
              <li>Piano</li>
              <li>Bass</li>
              <li>Trumpet</li>
              <li>Saxophone</li>
              <li>Any woodwind, brass, or stringed instrument</li>
              <li>Pitched percussion instruments, such as vibraphone</li>
              <li>Maybe some crazy-talented vocalist with perfect pitch ;)</li>
              <li>Any instrument capable of playing chords or pitched notes</li>
            </ul>
          </div>
          <div class="col-md">
            <h4>How do I use Flash Chord?</h4>
            <ol>
              <li><strong>Set a speed:</strong> longer delay means slower speed, so slow it down if you're just starting out</li>
              <li><strong>Select a key:</strong> restrict the chords to a specific key or leave it on <em>Any</em> to challenge yourself even more</li>
              <li><strong>Set a difficulty:</strong> pick a level that matches your abilities including beginner, intermediate, or advanced; if advanced is still too easy for you, you can also add chord extensions or hide the upcoming chord for the ultimate challenge!</li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>Once you've configured Flash Chord for your desired settings, grab your axe (instrument) and get busy comping chords, improvizing around scales, or running arpeggios against the chords being presented. Think of Flash Chord like a backing track or chord progression that is never the same! That randomized pattern is what is going to help make you a better musician by challenging you with the unexpected and taking you out of those same old, tired patterns.</p>
            <p>Check out the <a href="faq.php">Frequently Asked Questions (FAQ)</a> and <a href="about.php">About</a> pages for more information about Flash Chord and find out how you can help contribute!</p>
          </div>
        </div>
    </div>
    <?php require 'components/footer.php'; ?>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="container">
            <div class="row">
              <?php require 'components/ad_footer.php'; ?>
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
