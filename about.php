<?php
    require __DIR__ . '/vendor/autoload.php';
?>
<!doctype html>
<html lang="en">
<head>
    <?php require 'components/head.php'; ?>
    <title>About | Flash Chord</title>
</head>
<body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <h2>About</h2>
    </div>
    <div class="container">
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Overview</h4>
            </div>
        </div>
        <p>Flash Chord is a free online tool for musicians who want to practice chords, scales, or arpeggios with an endless stream of randomized chords. Learning a song or practicing to a backing track is great, but if you really want to learn your instrument, you need to be ready for the unexpected. With Flash Chord, you can specify the speed and complexity of the chords being presented and you'll never know more than one chord in advance.</p>
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Details</h4>
            </div>
        </div>
        <p>Now that you've got the idea, let's setup your Flash Chord practice session for success!</p>
        <ol>
            <li><strong>Tempo</strong> - Use the slider to adjust the speed of the incoming chords. Slower tempos mean slower chord changes.</li>
            <li><strong>Time Signature</strong> - Set the time signature to specify the beats per measure.</li>
            <li><strong>Key</strong> - Select the key in which you'd like to practice your chords or, for a real challenge, leave the key set to <em>Any</em> to see chords from <em>any key</em>.</li>
            <li><strong>Difficulty</strong> - Select the complexity of the chords being generated:
                <ol>
                    <li>Beginner: major, minor, 7, minor 7</li>
                    <li>Intermediate: maj7, 6, m6, sus2, sus4, 9, m9</li>
                    <li>Advanced: +, °, m7♭5, 7alt, 6/9, 11, 13</li>
                </ol>
                You can also specify if you want additional extensions (♯5, ♭5, ♯9, ♭9, ♯11, ♭13) added to the chords by checking the <em>Add extensions</em> checkbox.<br />If you really want to kick it up a notch, check the <em>Hide next chord</em> checkbox to get the next chord without any warning!
            </li>
        </ol>
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">How you can help</h4>
            </div>
        </div>
        <p>So you like Flash Chord, but you want to help make it even better? Great! Flash Chord is an <a href="https://github.com/KCarlile/flashchord">open source project hosted on GitHub</a>. If you'd like to help contribute, please reach out to the maintainer through the GitHub project page.</p>
        <h5>Technical</h5>
        <p>Flash Chord uses the following technologies:</p>
        <ul>
            <li><a href="https://html.spec.whatwg.org/multipage/">HTML5</a></li>
            <li><a href="https://www.php.net/">PHP</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="https://www.w3.org/Style/CSS/">CSS</a></li>
            <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
            <li><a href="https://parsedown.org/">Parsedown</a></li>
            <li><a href="https://getcomposer.org/">Composer</a></li>
            <li><a href="https://git-scm.com/">Git</a></li>
            <li><a href="https://github.com/">GitHub</a></li>
        </ul>
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Donate</h4>
            </div>
        </div>
        <p>If helping with code or testing isn't your thing, that's okay. You can always show your appreciate and support Flash Chord by making a donation to offset hosting and domain costs or fuel further development for bug fixes and enhancements. To learn more about making a <a href="donate.php">donation in support Flash Chord, check out the Donate page</a>.</p>
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Changelog</h4>
            </div>
        </div>
        <p>To see the changes for each version of FlashChord, you can <a href="https://github.com/KCarlile/flashchord/blob/master/CHANGELOG.md">view the changelog on GitHub</a> or you can click the "Show Changelog" button below to view the changelog on this page.</p>
        <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Show Changelog
            </button>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <?php
                    $changelog = file_get_contents('CHANGELOG.md');
                    $Parsedown = new Parsedown();
                    print($Parsedown->text($changelog));
                ?>
            </div>
        </div>
    </div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="container">
            <div class="row">
                <div class="col-md">
                </div>
                <div class="col-md">
                </div>
                <div class="col-md">
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
