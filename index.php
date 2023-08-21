<!doctype html>
<html lang="en">
<head>
    <?php
        // set the current page name for conditional formatting/content used by components
        DEFINE("PAGE_NAME", "home");

        // set the page-specific part of the page title used in components/head.php
        DEFINE("PAGE_TITLE", "Practice chords, scales, or arpeggios with an endless stream of randomized chords");

        // include the global head component
        require 'components/head.php';
    ?>
</head>
<body>
    <div class="container">
        <?php require 'components/header.php'; ?>
        <!-- BEGIN page content -->
        <?php require 'content/home.php'; ?>
        <!-- END page content -->
        <?php require 'components/footer.php'; ?>
    </div>
    <?php require 'components/foot.php'; ?>
</body>
</html>
