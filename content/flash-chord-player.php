<?php
    /**
     * @file content/flash-chord-player.php
     * 
     * This include file prints Flash Chord player content for the home page (index.php).
     */
?>
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
    <div id="bars_progress" class="mx-auto"></div>
    <div id="bars_progress_text"><span id="current_bar_text">1</span> of <span id="bar_count_text">1</span></div>
</div>
<div class="text-center alert alert-info mt-2" role="alert">
    <a href="/donate">&hearts; Click here if you love Flash Chord and want to help support it! &hearts;</a>
</div>
