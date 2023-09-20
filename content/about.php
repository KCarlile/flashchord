<?php
    /**
     * @file content/about.php
     * 
     * This include file prints content for the About page (about.php).
     */
?>
<h2 class="mb-4">About</h2>
<div class="mb-3">
    <h3><i class="bi bi-easel me-3 text-bg-secondary p-2 fs-5"></i>Overview</h3>
</div>
<div>
    <p>Flash Chord is a free online tool for musicians who want to
        practice chords, scales, or arpeggios with an endless stream
        of randomized chords. Learning a song or practicing to a
        backing track is great, but if you really want to learn your
        instrument, you need to be ready for the unexpected. With
        Flash Chord, you can specify the speed and complexity of the
        chords being presented and you'll never know more than one
        chord in advance.</p>
    <p>See the <a href="/help">Help</a> and <a href="/faq">FAQ</a>
        pages for more information about using Flash Chord.</p>
</div>
<div class="mb-3 mt-5">
    <h3><i class="bi bi-chat-heart-fill me-3 text-bg-secondary p-2 fs-5"></i>How <em>You</em> Can Help</h3>
</div>
<div>
    <p>So you like Flash Chord, but you want to help make it even better?
        Great! Flash Chord is an
        <a href="https://github.com/KCarlile/flashchord">open source
            project hosted on GitHub</a>. If you want to help contribute,
            please reach out to the maintainer through the GitHub project
            page.</p>
    <h4>Technical</h4>
    <p>Flash Chord uses the following technologies:</p>
    <?php
        // include content for technical details
        require_once("content/about-technical.php");
    ?>
    <h4>Contributors</h4>
    <?php
        // include content for contributors
        require_once("components/contributors.php");
    ?>
</div>
<div class="mb-3 mt-5">
    <h3><i class="bi bi-paypal me-3 text-bg-secondary p-2 fs-5"></i>Donate</h3>
</div>
<div>
    <p>If helping with code or testing isn't your thing, that's
        okay. You can always show your appreciate and support
        Flash Chord by making a donation to offset hosting and
        domain costs or fuel further development for bug fixes
        and enhancements. To learn more about making a
        <a href="donate">donation in support Flash Chord,
            check out the Donate page</a>.</p>
</div>
