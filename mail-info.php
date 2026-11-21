<?php
    define("INFO_EMAIL", "info@flashchord.com");
    header("Location: mailto:" . INFO_EMAIL);
    exit();
?>