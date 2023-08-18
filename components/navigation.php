<?php
    /**
     * @file components/navigation.php
     * 
     * This include file prints navigation content in the top of the page.
     */

    // page name is set at the page level
    global $page_name;
?>
<nav>
    <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link <?php print($page_name == 'home' ? 'active' : ''); ?>" aria-current="page">Flash Chord</a></li>
        <li class="nav-item"><a href="/donate" class="nav-link <?php print($page_name == 'donate' ? 'active' : ''); ?>">Donate</a></li>
        <li class="nav-item"><a href="/faq" class="nav-link <?php print($page_name == 'faq' ? 'active' : ''); ?>">FAQ</a></li>
        <li class="nav-item"><a href="/about" class="nav-link <?php print($page_name == 'about' ? 'active' : ''); ?>">About</a></li>
    </ul>
</nav>
