<?php
    /**
     * @file content/flash-chord-configuration.php
     * 
     * This include file prints Flash Chord configuration form content for the home page (index.php).
     */
?>
<div class="bg-light mb-2 border-top border-bottom">
    <h4 class="text-secondary mt-1 mb-2">Settings</h4>
</div>
<div class="row mb-5">
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
            <label for="bars_per_chord">Bars:</label>
            <input type="text" id="bars_per_chord" readonly style="border:0; font-weight:bold;">
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
        <div class="mb-5">
            <h4 class="mt-5">Cues</h4>
            <div class="custom-control custom-checkbox mt-3">
                <input type="checkbox" name="metronome_audio" checked />
                <label for="metronome_audio">Metronome audio</label>
            </div>
            <div class="custom-control custom-checkbox mt-3">
                <input type="checkbox" name="metronome_visual" checked />
                <label for="metronome_visual">Metronome visuals</label>
            </div>
            <div class="custom-control custom-checkbox mt-3">
                <input type="checkbox" class="custom-control-input" id="hide_next_chord" name="hide_next_chord" />
                <label for="hide_next_chord" class="custom-control-label">Hide next chord</label>
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
                <button type="button" id="beginner_preset" class="btn btn-success chord-type-preset btn-sm mb-3">Beginner</button>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_beginner chord-type-selection" id="chord_type_major" name="chord_type_major" value="M" checked />
                    <label for="chord_type_major" class="custom-control-label">Major</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_beginner chord-type-selection" id="chord_type_minor" name="chord_type_minor" value="m" checked />
                    <label for="chord_type_minor" class="custom-control-label">minor</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_beginner chord-type-selection" id="chord_type_7" name="chord_type_7" value="7" checked />
                    <label for="chord_type_7" class="custom-control-label">7</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_beginner chord-type-selection" id="chord_type_m7" name="chord_type_m7" value="m7" checked />
                    <label for="chord_type_m7" class="custom-control-label">m7</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_beginner chord-type-selection" id="chord_type_dim" name="chord_type_dim" value="°" checked />
                    <label for="chord_type_dim" class="custom-control-label">° (dim)</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_beginner chord-type-selection" id="chord_type_aug" name="chord_type_aug" value="+" checked />
                    <label for="chord_type_aug" class="custom-control-label">+ (aug)</label>
                </div>
            </div>
            <div class="col">
                <button type="button" id="intermediate_preset" class="btn btn-outline-warning chord-type-preset btn-sm mb-3">Intermediate</button>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_intermediate chord-type-selection" id="chord_type_maj7" name="chord_type_maj7" value="maj7" />
                    <label for="chord_type_maj7" class="custom-control-label">Maj7</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_intermediate chord-type-selection" id="chord_type_6" name="chord_type_6" value="6" />
                    <label for="chord_type_6" class="custom-control-label">6</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_intermediate chord-type-selection" id="chord_type_sus2" name="chord_type_sus2" value="sus2" />
                    <label for="chord_type_sus2" class="custom-control-label">sus2</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_intermediate chord-type-selection" id="chord_type_sus4" name="chord_type_sus4" value="sus4" />
                    <label for="chord_type_sus4" class="custom-control-label">sus4</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_intermediate chord-type-selection" id="chord_type_9" name="chord_type_9" value="9" />
                    <label for="chord_type_9" class="custom-control-label">9</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_intermediate chord-type-selection" id="chord_type_m9" name="chord_type_m9" value="m9" />
                    <label for="chord_type_m9" class="custom-control-label">m9</label>
                </div>
            </div>
            <div class="col">
                <button type="button" id="advanced_preset" class="btn btn-outline-danger chord-type-preset btn-sm mb-3">Advanced</button>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_7alt" name="chord_type_7alt" value="7alt" />
                    <label for="chord_type_7alt" class="custom-control-label">7alt (7♯5)</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_dim7" name="chord_type_dim7" value="°7" />
                    <label for="chord_type_dim7" class="custom-control-label">°7 (dim 7)</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_m7b5" name="chord_type_m7b5" value="m7♭5" />
                    <label for="chord_type_m7b5" class="custom-control-label">m7♭5 (ø, half-dim)</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_11" name="chord_type_11" value="11" />
                    <label for="chord_type_11" class="custom-control-label">11</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_m11" name="chord_type_m11" value="m11" />
                    <label for="chord_type_m11" class="custom-control-label">m11</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_13" name="chord_type_13" value="13" />
                    <label for="chord_type_13" class="custom-control-label">13</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input difficulty_advanced chord-type-selection" id="chord_type_69" name="chord_type_69" value="6/9" />
                    <label for="chord_type_69" class="custom-control-label">6/9</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="extensions" name="extensions" />
                    <label for="extensions" class="custom-control-label">Add extensions<br /><small>(♯5, ♭5, ♯9, ♭9, ♯11, ♭13)</small></label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="rare_enharmonics" name="rare_enharmonics" />
                    <label for="rare_enharmonics" class="custom-control-label">Enable rare enharmonic chords<br /><small>(C♭, B♯, F♭, E♯)</small></label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="slash_chords" name="slash_chords" />
                    <label for="slash_chords" class="custom-control-label">Enable inversions via slash chords<br /><small>(C/E, Am/C, G/B, D/F#, etc.)</small></label>
                </div>
            </div>
        </div>
    </div>
</div>
