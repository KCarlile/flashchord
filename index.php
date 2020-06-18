<!doctype html>
<html lang="en">
<head>
    <?php require 'components/head.php'; ?>
    <title>Practice chords, scales, or arpeggios against an endless stream of randomized chords | Flash Chord</title>
</head>
<body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <p class="lead text-muted">Practice chords, scales, or arpeggios against an endless stream of randomized chords!</p>
    </div>
    <div class="container">
        <h2 id="chord_name">Chord</h2>
        <div id="next_chord">
            <h3 class="text-center">Up next...</h3>
            <h2 id="next_chord_name">Next Chord</h2>
        </div>
        <div class="btn-group-lg text-center mt-4" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success" id="start">Start</button>
            <button type="button" class="btn btn-danger" id="stop">Stop</button>
        </div>
        <div class="text-center mt-3">
            <div id="visual_metronome">
                <span id="beat1" class="text-primary">&bull;</span>
                <span id="beat2" class="text-secondary">&bull;</span>
                <span id="beat3" class="text-secondary">&bull;</span>
                <span id="beat4" class="text-secondary">&bull;</span>
                <span id="beat5" class="text-secondary">&bull;</span>
                <span id="beat6" class="text-secondary">&bull;</span>
            </div>
        </div>
        <div class="text-center">
            <div class="d-inline-block text-left">
                <input type="checkbox" name="metronome_audio" checked />
                <label for="metronome_audio">Metronome audio</label>
                <br />
                <input type="checkbox" name="metronome_visual" checked />
                <label for="metronome_visual">Metronome visuals</label>
            </div>
        </div>
        <div class="text-center alert alert-info mt-2" role="alert">
            <a href="donate.php">&hearts; Click here if you love Flash Chord and want to know how you can help support it? &hearts;</a>
        </div>
    </div>
    <div class="container mt-3 pb-5">
        <div class="row bg-light mb-2 text-center">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Settings</h4>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md">
                <div class="mb-5">
                    <h4>Tempo</h4>
                    <div id="tempo"></div>
                    <label for="bpm">Beats per minute:</label>
                    <input type="text" id="bpm" readonly style="border:0; font-weight:bold;">
                </div>
                <div class="mb-5">
                    <h4 class="mt-5">Time Signature</h4>
                    <input type="radio" id="time_44" name="time_signature" value="time_44" checked>
                    <label for="time_44">4/4</label><br>
                    <input type="radio" id="time_34" name="time_signature" value="time_34">
                    <label for="time_34">3/4</label><br>
                    <input type="radio" id="time_24" name="time_signature" value="time_24">
                    <label for="time_24">2/4</label><br>
                    <input type="radio" id="time_68" name="time_signature" value="time_68">
                    <label for="time_68">6/8</label><br>
                </div>
            </div>
            <div class="col-md">
                <div class="mb-5">
                    <h4>Key</h4>
                    <label for="keys">Select a key:</label>
                    <select id="keys" class="custom-select w-25">
                        <option value="">Any</option>
                    </select>
                    <p class="small mt-1"><em>Currently, specifying a key will override the Difficulty settings below.</em></p>
                </div>
                <div>
                    <h4 class="mt-5">Difficulty</h4>
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
        </div>
    </div>
    <div class="container">
        <div class="row bg-light mb-2 text-center">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Instructions</h4>
            </div>
        </div>
        <div class="row mt-3">
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
                    <li><strong>Set a tempo:</strong> set the speed of chord changes; start slow if you're a beginner</li>
                    <li><strong>Set the time signature:</strong> choose the time signature for your the metronome</li>
                    <li><strong>Select a key:</strong> restrict the chords to a specific key or leave it on <em>Any</em> to challenge yourself even more<br /><span class="small">Note: in the current version, specifying a key will override the difficulty settings.</span></li>
                    <li><strong>Set a difficulty:</strong> pick a level that matches your abilities including beginner, intermediate, or advanced; if advanced is still too easy for you, you can also add chord extensions or hide the upcoming chord for the ultimate challenge!</li>
                    <li><strong>Click Start:</strong> click Start when you're ready to begin
                        <ul>
                            <li><strong>Silent practice:</strong> if you'd like to practice silently with out the audio cues, click Disable metronome</li>
                        </ul>
                    </li>
                    <li><strong>Click Stop:</strong> click Stop when you're done</li>
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
                <div class="col">
                    <?php require 'components/ad_footer.php'; ?>
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
