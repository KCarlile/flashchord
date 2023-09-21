<?php
    /**
     * @file content/flash-chord-player.php
     * 
     * This include file prints Flash Chord player content for the home page (index.php).
     */
?>
<div class="text-center">
    <div class="btn-group mt-4 mb-3" role="group" aria-label="Flash Chord transport controls and settings">
        <button type="button" class="btn btn-success btn-lg p-4 fs-3" id="start"><i class="bi bi-play-fill me-2"></i>Start</button>
        <button type="button" class="btn btn-danger btn-lg p-4 fs-3" id="stop"><i class="bi bi-stop-fill me-2"></i>Stop</button>
        <button type="button" class="btn btn-outline-secondary btn-lg p-4 fs-3" data-bs-toggle="offcanvas" data-bs-target="#flash-chord-settings" aria-controls="flash-chord-settings"><i class="bi bi-gear me-2"></i>Settings</button>
    </div>
    <div id="visual-metronome" class="mb-3">
        <span id="beat1" class="text-primary me-3"><i class="bi bi-circle-fill"></i></span>
        <span id="beat2" class="text-secondary me-3"><i class="bi bi-circle-fill"></i></span>
        <span id="beat3" class="text-secondary me-3"><i class="bi bi-circle-fill"></i></span>
        <span id="beat4" class="text-secondary me-3"><i class="bi bi-circle-fill"></i></span>
        <span id="beat5" class="text-secondary me-3"><i class="bi bi-circle-fill"></i></span>
        <span id="beat6" class="text-secondary me-3"><i class="bi bi-circle-fill"></i></span>
    </div>
    <div class="mb-3">
        <div id="bars-progress" class="mx-auto"></div>
        <div id="bars-progress-text"><span id="current-bar-text">1</span> of <span id="bar-count-text">1</span></div>
    </div>
    <div>
        <h2 id="chord-name">Chord</h2>
        <div id="next-chord">
            <h3>Next chord...</h3>
            <h2 id="next-chord-name">Next Chord</h2>
        </div>
        <div class="alert alert-primary mt-2" role="alert">
            <a href="/donate">&hearts; Click here if you love Flash Chord and want to help support it! &hearts;</a>
        </div>
    </div>
</div>
