<?php
    /**
     * @file content/home.php
     * 
     * This include file prints content for the home page (index.php).
     */
?>
<div>
    <p class="lead text-muted">Practice chords, scales, or arpeggios with an endless stream of randomized chords!</p>
    <button class="btn btn-secondary btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#flash-chord-settings" aria-controls="flash-chord-settings"><i class="bi bi-gear me-2"></i>Settings &amp; Instructions</button>
</div>
<?php require 'content/flash-chord-player.php'; ?>
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="flash-chord-settings" aria-labelledby="flash-chord-settings-label">
        <div class="container">
        <div class="offcanvas-header">
            <h3 class="offcanvas-title" id="flash-chord-settings-label"><i class="bi bi-gear me-2"></i>Settings &amp; Instructions</h3>
            <button type="button btn-lg" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <?php require 'content/flash-chord-configuration.php'; ?>
            <?php require 'content/flash-chord-instructions.php'; ?>
        </div>
    </div>
</div>
