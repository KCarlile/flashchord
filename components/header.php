<?php
    /**
     * @file components/header.php
     * 
     * This include file prints header content in the top of the page.
     */
?>
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="me-2" width="256" height="40"><use xlink:href="/images/svg/flash-chord-logo.svg#Flash_Chord_Logo"/></svg>
        <span class="fs-4 visually-hidden">Flash Chord</span>
    </a>
    <?php require 'components/navigation.php'; ?>
</header>
