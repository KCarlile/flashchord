<?php
    /**
     * @file components/header.php
     * 
     * This include file prints header content in the top of the page.
     */
?>
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Flash Chord</span>
    </a>
    <?php require 'components/navigation.php'; ?>
</header>
