<?php
    /**
     * @file content/home.php
     * 
     * This include file prints content for the home page (index.php).
     */
?>
<div>
    <p class="lead text-muted">Practice chords, scales, or arpeggios with an endless stream of randomized chords!</p>
    <button class="btn btn-secondary btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#flash-chord-settings" aria-controls="flash-chord-settings"><i class="bi bi-gear me-2"></i>Settings</button>
</div>
<?php require 'content/flash-chord-player.php'; ?>
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" data-bs-scroll="true" tabindex="-1" id="flash-chord-settings" aria-labelledby="flash-chord-settings-label">
    <div class="offcanvas-header mb-3">
        <div class="container">
            <div class="row mx-0">
                <div class="col-11 p-0">
                    <h3 class="offcanvas-title" id="flash-chord-settings-label"><i class="bi bi-gear me-2"></i>Settings</h3>
                </div>
                <div class="col-1 text-end me-0 mt-0">
                    <button type="button" class="btn-close m-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas-body">
        <div class="container">
            <?php require 'content/flash-chord-configuration.php'; ?>
        </div>
    </div>
</div>
