<!doctype html>
<html lang="en">
<head>
    <?php
        // set the current page name for conditional formatting/content used by components
        DEFINE("PAGE_NAME", "faq");

        // set the page-specific part of the page title used in components/head.php
        DEFINE("PAGE_TITLE", "FAQ - Frequently Asked Questions");

        // include the global head component
        require 'components/head.php';

        // include utilities file to load contents from JSON file
        require_once("utilities.php");
    ?>
</head>
<body>
    <div class="container">
        <?php require 'components/header.php'; ?>
        <!-- BEGIN page content -->
        <?php require 'content/faq.php'; ?>
        <!-- END page content -->
        <?php require 'components/footer.php'; ?>
    </div>
    <?php require 'components/foot.php'; ?>
</body>
</html>
