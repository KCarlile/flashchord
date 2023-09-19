<?php
    /**
     * @file components/footer-navigation.php
     * 
     * This include file prints navigation content in the bottom of the page.
     */

    $page_name = "";

    if (defined('PAGE_NAME')) {
        $page_name = PAGE_NAME;
    } // end if test
?>
<nav class="mb-2">
    <ul class="nav">
        <li class="nav-item small"><a href="/" class="nav-link ps-0 <?php print($page_name == 'home' ? 'link-secondary' : ''); ?>" aria-current="page">Practice</a></li>
        <li class="nav-item small"><a href="/donate" class="nav-link <?php print($page_name == 'donate' ? 'link-secondary' : ''); ?>">Donate</a></li>
        <li class="nav-item small"><a href="/help" class="nav-link <?php print($page_name == 'help' ? 'link-secondary' : ''); ?>">Help</a></li>
        <li class="nav-item small"><a href="/faq" class="nav-link <?php print($page_name == 'faq' ? 'link-secondary' : ''); ?>">FAQ</a></li>
        <li class="nav-item small"><a href="/about" class="nav-link <?php print($page_name == 'about' ? 'link-secondary' : ''); ?>">About</a></li>
    </ul>
</nav>
