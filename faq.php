<!doctype html>
<html lang="en">
<head>
    <?php require 'components/head.php'; ?>
    <title>About | Flash Chord</title>
</head>
<body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <h2>Frequently Asked Questions (FAQ)</h2>
    </div>
    <div class="container">
        <div id="accordion">
            <h3>Why doesn't Flash Chord work for me?</h3>
            <div>
                <p>Flash Chord requires a modern JavaScript-enabled browser, so make sure that your browser is updated and that you have JavaScript enabled.</p>
            </div>
            <h3>Why doesn't Flash Chord provide a chord shape or the notes?</h3>
            <div>
                <p>Flash Chord is intended to be used by all instruments, so it wouldn't make sense to provide a guitar or piano chord shape to trumpet players or saxophone players. Also, Flash Chord is a practicing tool, not a teaching tool.</p>
            </div>
            <h3>Why isn't there a backing track?</h3>
            <div>
                <p>We have plans to try to develop some backing chords, but it may not be supported by all browsers.</p>
                <p>If you'd like to help us develop this functionality, check out how you can contribute on the <a href="/about">About</a> page.</p>
            </div>
            <h3>I saw a weird chord that no one would ever play in real life. Why is that in Flash Chord?</h3>
            <div>
                <p>If you see an invalid chord, please report it on the <a href="https://github.com/KCarlile/flashchord/issues">issues page of the GitHub project</a>.</p>
            </div>
            <h3>Why does specifying a key restrict the difficulty options?</h3>
            <div>
                <p>It's a temporary limitation until we figure out how to enable key restriction along with more complex chords. It's a tricky problem. :)</p>
            </div>
            <h3>The metronome hangs for a split second when I start it on iOS (any browesr) or Safari on Mac. What's up with that?</h3>
            <div>
                <p>I think it's related to resource caching for the audio file. I've added some tweaks to make it better, but I haven't yet figured out how to make it work perfectly.</p>
            </div>
            <h3>How can I report a bug?</h3>
            <div>
                <p>If you see something strange, please report it on the <a href="https://github.com/KCarlile/flashchord/issues">issues page of the GitHub project</a>.</p>
            </div>
            <h3>How can I included secondary dominants and tritone substitutions (or other similar) to the chord selection?</h3>
            <div>
                <p>Currently, you can't, but we'd love your help developing that functionality! Check out how you can contribute on the <a href="/about">About</a> page.</p>
            </div>
            <h3>I'm not a programmer, but I'd like to help. How can I do so?</h3>
            <div>
                <p>Don't be afraid. :) We can always use help, even if you're not a coder. There are lots of ways to help make open source software better. Check out how you can contribute on the <a href="/about">About</a> page. You can also <a href="/donate">make a donation to support Flash Chord</a>.</p>
            </div>
        </div>
    </div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="container">
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
