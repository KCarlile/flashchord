<!doctype html>
<html lang="en">
  <head>
    <?php require 'components/head.php'; ?>
    <title>About | Flash Chord</title>
  </head>
  <body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <p class="lead">About</p>
    </div>
    <div class="container">
        <h2>Let's Dance</h2>
        <p>Flash Chord is a free online tool for musicians who want to practice chords, scales, or arpeggios against an endless stream of randomized chords being presented. Learning a song or practicing to a backing track is great, but if you really want to learn your instrument, you need to be ready for the unexpected. With Flash Chord, you can specify the speed and complexity of the chords being presented and you'll never know more than one chord in advance.</p>
        <h2>Ch-ch-ch-changes</h2>
        <p>Now that you've got the idea, let's setup your Flash Chord practice session for success!</p>
        <ol>
          <li>Speed - Use the slider to adjust the speed of the incoming chords. Slower time delays between chords means faster chord changes.</li>
          <li>Key - Select the key in which you'd like to practice your chords or, for a real challenge, leave the key set to <em>Any</em> to see chords from <em>any key</em>.</li>
          <li>Difficulty - Select the complexity of the chords being generated:
            <ol>
              <li>Beginner: major, minor, 7, minor 7</li>
              <li>Intermediate: maj7, 6, m6, sus2, sus4, 9, m9</li>
              <li>Advanced: +, °, m7♭5, 7alt, 6/9, 11, 13</li>
            </ol>
            You can also specify if you want additional extensions (♯5, ♭5, ♯9, ♭9, ♯11, ♯13, ♭13) added to the chords by checking the <em>Add extensions</em> checkbox.<br />If you really want to kick it up a notch, check the <em>Hide next chord</em> checkbox to get the next chord without any warning!
          </li>
        </ol>
        <h2>Heroes</h2>
        <p>So you like Flash Chord, but you wanna help make it even better? Great! Flash Chord is an <a href="https://github.com/KCarlile/flashchord">open source project hosted on GitHub</a>. If you want to help contribute, please reach out to the maintainer through the GitHub project page.</p>
        <h3>Technical</h3>
        <p>Flash Chord uses the following technologies:</p>
        <ul>
          <li><a href="https://html.spec.whatwg.org/multipage/">HTML5</a></li>
          <li><a href="https://www.php.net/">PHP</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
          <li><a href="https://jquery.com/">jQuery</a></li>
          <li><a href="https://www.w3.org/Style/CSS/">CSS</a></li>
          <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
          <li><a href="https://git-scm.com/">Git</a></li>
          <li><a href="https://github.com/">GitHub</a></li>
        </ul>
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
