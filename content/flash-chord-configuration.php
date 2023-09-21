<?php
    /**
     * @file content/flash-chord-configuration.php
     * 
     * This include file prints Flash Chord configuration form content for the home page (index.php).
     */
?>
<div class="mb-3">
    <h3><i class="bi bi-gear-fill me-3 text-bg-secondary p-2 fs-5"></i>Settings</h3>
</div>
<div class="alert alert-primary" role="alert">
    <p class="my-0">See the <a href="/help">Help</a> page for instructions.</p>
    <p class="my-0 small">Also see the <a href="/faq">Frequently Asked Questions
        (FAQ)</a> and <a href="/about">About</a> pages for more information and
        to learn about how you can help support Flash Chord.</p>
</div>
<div class="row">
    <div class="col-md">
        <div class="mb-5">
            <h4>Tempo</h4>
            <div id="tempo"></div>
            <label for="bpm">Beats per minute:</label>
            <input type="text" id="bpm" readonly style="border:0; font-weight:bold;">
        </div>
        <div class="mb-5">
            <h4>Bars per chord</h4>
            <div id="bars"></div>
            <label for="bars-per-chord">Bars:</label>
            <input type="text" id="bars-per-chord" readonly style="border:0; font-weight:bold;">
        </div>
        <div class="mb-5">
            <h4 class="mt-5">Time Signature</h4>
            <input type="radio" id="time-44" name="time-signature" value="time-44" checked>
            <label for="time-44">4/4</label><br>
            <input type="radio" id="time-34" name="time-signature" value="time-34">
            <label for="time-34">3/4</label><br>
            <input type="radio" id="time-24" name="time-signature" value="time-24">
            <label for="time-24">2/4</label><br>
            <input type="radio" id="time-68" name="time-signature" value="time-68">
            <label for="time-68">6/8</label><br>
        </div>
        <div class="mb-5">
            <h4 class="mt-5">Cues</h4>
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" name="metronome-audio" id="metronome-audio" checked />
                <label class="form-check-label" for="metronome-audio">Metronome audio</label>
            </div>
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" name="metronome-visual" id="metronome-visual" checked />
                <label class="form-check-label" for="metronome-visual">Metronome visuals</label>
            </div>
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" class="form-check-input" id="show-next-chord" name="show-next-chord" checked />
                <label class="form-check-label" for="show-next-chord" class="form-check-label">Show next chord</label>
            </div>
        </div>
    </div>
    <div class="col-md">
        <div class="mb-5">
            <h4>Key</h4>
            <label for="keys">Select a key:</label>
            <select id="keys" class="custom-select w-50">
                <option value="any">Any (random key)</option>
            </select>
            <p class="small mt-1"><em>Currently, specifying a key will override the Difficulty settings below.</em></p>
        </div>
        <h4 class="mt-5">Difficulty</h4>
        <div class="row">
            <div class="col">
                <button type="button" id="beginner-preset" class="btn btn-success chord-type-preset btn-sm mb-3">Beginner</button>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-beginner chord-type-selection" id="chord-type-major" name="chord-type-major" value="M" checked />
                    <label for="chord-type-major" class="form-check-label">Major</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-beginner chord-type-selection" id="chord-type-minor" name="chord-type-minor" value="m" checked />
                    <label for="chord-type-minor" class="form-check-label">minor</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-beginner chord-type-selection" id="chord-type-7" name="chord-type-7" value="7" checked />
                    <label for="chord-type-7" class="form-check-label">7</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-beginner chord-type-selection" id="chord-type-m7" name="chord-type-m7" value="m7" checked />
                    <label for="chord-type-m7" class="form-check-label">m7</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-beginner chord-type-selection" id="chord-type-dim" name="chord-type-dim" value="°" checked />
                    <label for="chord-type-dim" class="form-check-label">° (dim)</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-beginner chord-type-selection" id="chord-type-aug" name="chord-type-aug" value="+" checked />
                    <label for="chord-type-aug" class="form-check-label">+ (aug)</label>
                </div>
            </div>
            <div class="col">
                <button type="button" id="intermediate-preset" class="btn btn-outline-warning chord-type-preset btn-sm mb-3">Intermediate</button>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-intermediate chord-type-selection" id="chord-type-maj7" name="chord-type-maj7" value="maj7" />
                    <label for="chord-type-maj7" class="form-check-label">Maj7</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-intermediate chord-type-selection" id="chord-type-6" name="chord-type-6" value="6" />
                    <label for="chord-type-6" class="form-check-label">6</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-intermediate chord-type-selection" id="chord-type-sus2" name="chord-type-sus2" value="sus2" />
                    <label for="chord-type-sus2" class="form-check-label">sus2</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-intermediate chord-type-selection" id="chord-type-sus4" name="chord-type-sus4" value="sus4" />
                    <label for="chord-type-sus4" class="form-check-label">sus4</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-intermediate chord-type-selection" id="chord-type-9" name="chord-type-9" value="9" />
                    <label for="chord-type-9" class="form-check-label">9</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-intermediate chord-type-selection" id="chord-type-m9" name="chord-type-m9" value="m9" />
                    <label for="chord-type-m9" class="form-check-label">m9</label>
                </div>
            </div>
            <div class="col">
                <button type="button" id="advanced-preset" class="btn btn-outline-danger chord-type-preset btn-sm mb-3">Advanced</button>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-7alt" name="chord-type-7alt" value="7alt" />
                    <label for="chord-type-7alt" class="form-check-label">7alt (7♯5)</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-dim7" name="chord-type-dim7" value="°7" />
                    <label for="chord-type-dim7" class="form-check-label">°7 (dim 7)</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-m7b5" name="chord-type-m7b5" value="m7♭5" />
                    <label for="chord-type-m7b5" class="form-check-label">m7♭5 (ø, half-dim)</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-11" name="chord-type-11" value="11" />
                    <label for="chord-type-11" class="form-check-label">11</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-m11" name="chord-type-m11" value="m11" />
                    <label for="chord-type-m11" class="form-check-label">m11</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-13" name="chord-type-13" value="13" />
                    <label for="chord-type-13" class="form-check-label">13</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input difficulty-advanced chord-type-selection" id="chord-type-69" name="chord-type-69" value="6/9" />
                    <label for="chord-type-69" class="form-check-label">6/9</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="extensions" name="extensions" />
                    <label for="extensions" class="form-check-label">Add extensions<br /><span class="small fst-italic">♯5, ♭5, ♯9, ♭9, ♯11, ♭13</span></label>
                </div>
                <div class="form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="rare-enharmonics" name="rare-enharmonics" />
                    <label for="rare-enharmonics" class="form-check-label">Enable rare enharmonic chords<br /><span class="small fst-italic">C♭, B♯, F♭, E♯</span></label>
                </div>
                <div class="form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="slash-chords" name="slash-chords" />
                    <label for="slash-chords" class="form-check-label">Enable inversions via slash chords<br /><span class="small fst-italic">C/E, Am/C, G/B, D/F#, etc.</span></label>
                </div>
            </div>
        </div>
    </div>
</div>
