    <?php
        require_once("utilities.php");
    ?>
    <!doctype html>
    <html lang="en">
    <head>
        <?php require 'components/head.php'; ?>
        <title>News | Flash Chord</title>
    </head>
    <body>
        <?php require 'components/header.php'; ?>
        <div class="container">
            <h2>News</h2>
        </div>
        <div class="container">
            <!-- BEGIN: News post -->
            <div>
                <div class="row bg-light mb-2">
                    <div class="col border-top border-bottom">
                        <h4 class="text-secondary mt-1 mb-2">May 25, 2025</h4>
                    </div>
                </div>
                <div>
                    <p>Flash Chord is proud to introduce the <a href="/news">News</a> page for announcing updates and
                        changes for Flash Chord!</p>
                    <p>This is where you can find announcements about the latest changes to Flash Chord, including the
                        following recent updates in the latest release:
                    </p>
                    <p>
                        <strong>Release 1.9</strong>
                        <ul>
                            <li>Fixed G# in Gb key. (Issue <a href="https://github.com/KCarlile/flashchord/issues/107">#107</a>)</li>
                            <li>Added News page and support for Bootstrap icons. (Issue <a href="https://github.com/KCarlile/flashchord/issues/110">#110</a>)</li>
                        </ul>
                    </p>
                    <p>In addition, be sure to check out the list of people who have provided generous contributions to
                        help support the hosting and development of Flash Chord. You can find the names of supporters open
                        the <a href="/donate">Donate</a> page.</p>
                </div>
            </div>
            <!-- END: News post -->
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
