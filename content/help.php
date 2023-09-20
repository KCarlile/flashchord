<?php
    /**
     * @file content/help.php
     * 
     * This include file prints content for the Help page (help.php).
     */
?>
<h2 class="mb-4">Help</h2>
<div class="mb-3">
    <h3><i class="bi bi-gear-fill me-3 text-bg-secondary p-2 fs-5"></i>Overview</h3>
</div>
<div class="row gx-5">
    <div class="col-lg">
        <h4>Introduction</h4>
        <p><strong>Flash Chord</strong> was created to help musicians take
            practicing chords, scales, and arpeggios to the next level by removing
            predictability and repetition. Flash Chord generates chords in a
            random sequence and with random qualities (major, minor, 7, etc.) so
            musicians have to learn the full range of their instrument without
            getting locked into patterns and memorization.</p>
        <p>As an introduction, let's look at a brief overview of the configuration
            categories so you can setup your Flash Chord practice session
            for success!</p>
        <ul>
            <li><strong>Select a tempo:</strong> determines the speed of chord
                changes</li>
            <li><strong>Set the time signature:</strong> determines the time
                signature for the metronome</li>
            <li><strong>Select a key:</strong> determines the chord names
                generated</li>
            <li><strong>Select a difficulty:</strong> determines the
                difficulty of the chords generated</li>
            <li><strong>Click Start:</strong> the metronome and chord
                generation begins</li>
            <li><strong>Practice:</strong> generated chords and the metronome
                will provide a background against which you you can play
                chords, scales, or arpeggios</li>
            <li><strong>Click Stop:</strong> the metronome and chord
                generation halts</li>
        </ul>
    </div>
    <div class="col-lg">
        <h4>Which instruments can use Flash Chord?</h4>
        <ul>
            <li>Guitar</li>
            <li>Piano</li>
            <li>Bass</li>
            <li>Trumpet</li>
            <li>Saxophone</li>
            <li>Any woodwind, brass, or stringed instrument</li>
            <li>Pitched percussion instruments, such as vibraphone</li>
            <li>Maybe some crazy-talented vocalist with perfect pitch <i class="bi bi-emoji-wink"></i></li>
            <li>Any instrument capable of playing chords and/or pitched notes</li>
        </ul>
    </div>
</div>
<div class="mb-3 mt-5">
    <h3><i class="bi bi-info-square-fill me-3 text-bg-secondary p-2 fs-5"></i>Detailed Instructions</h3>
</div>
<div class="row gx-5">
    <div class="col-lg">
        <h4>How do I use Flash Chord?</h4>
        <h5><i class="bi bi-1-square-fill text-secondary"></i> Tempo</h5>
        <div class="ms-4 mb-4">
            <p>Use the slider to adjust the speed of the incoming chords. Slower
                tempos mean slower chord changes.</p>
            <p>The range for valid tempos is 60 beats per minute (BPM) to
                220 BPM.</p>
        </div>
        <h5><i class="bi bi-2-square-fill text-secondary"></i> Bars per chord</h5>
        <div class="ms-4 mb-4">
            <p>Use the slider to specify the number of measures per chord. This
                will define how many measures pass before the chord changes.</p>
            <p>The range for valid bars per chord is 1 to 16.</p>
        </div>
        <h5><i class="bi bi-3-square-fill text-secondary"></i> Time Signature</h5>
        <div class="ms-4 mb-4">
            <p>Set the time signature to specify the beats per measure and which
                beats receive the accent.</p>
            <p>Valid time signatures are: 4/4, 3/4, 2/4, 6/8</p>
        </div>
        <h5><i class="bi bi-4-square-fill text-secondary"></i> Cues</h5>
        <div class="ms-4 mb-4">
            <p>Specify the audio and visual metronome cues including:</p>
            <ul>
                <li>Metronome audio (enabled by default)</li>
                <li>Metronome visuals (enabled by default)</li>
                <li>Show next chord (enabled by default)</li>
            </ul>
            <p>Disabling any of these options will increase the difficulty by
                eliminating helpful cues.</p>
        </div>
        <h5><i class="bi bi-5-square-fill text-secondary"></i> Key</h5>
        <div class="ms-4 mb-4">
            <p>Select the key in which you'd like
                to practice your chords or, for a real challenge, leave the key
                set to <em>Any</em> to see chords from <em>any key</em>.</p>
            <p class="small">Note: In the current version of Flash Chord,
                specifying a key will override the difficulty settings.</p>
        </div>
        <h5><i class="bi bi-6-square-fill text-secondary"></i> Difficulty</h5>
        <div class="ms-4 mb-4">
            <p>Select the complexity of the chords being generated:</p>
            <ol>
                <li>Beginner: major, minor, 7, minor 7</li>
                <li>Intermediate: maj7, 6, m6, sus2, sus4, 9, m9</li>
                <li>Advanced: +, °, m7♭5, 7alt, 6/9, 11, 13</li>
            </ol>
            <p>You can also specify if you want additional extensions (♯5, ♭5,
                ♯9, ♭9, ♯11, ♭13) added to the chords by checking the <em>Add
                extensions</em> checkbox.</p>
            <p>If you really want to kick it up a notch, check the <em>Hide next
                chord</em> checkbox to get the next chord without any warning!</p>
        </div>
    </div>
    <div class="col-lg">
        <h4>So...now what?</h4>
        <p>Once you've configured Flash Chord for your desired settings, grab
            your axe (instrument) and get busy comping chords, improvising
            around scales, or running arpeggios against the chords being
            presented.</p>
        <p>Think of Flash Chord like a backing track or chord progression that
            is never the same! That randomized pattern is what is going to help
            make you a better musician by challenging you with the unexpected
            and taking you out of those same old, tired patterns.</p>        
        <div class="alert alert-primary" role="alert">
            <p class="my-0">Check out the <a href="/faq">Frequently Asked Questions
                (FAQ)</a> and <a href="/about">About</a> pages for more information and
                to learn about how you can help support Flash Chord.</p>
        </div>
    </div>
</div>
