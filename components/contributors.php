<?php
    /**
     * @file components/contributors.php
     * 
     * This include file prints contributor content.
     */

    define("CONTRIBUTORS_JSON", "data/contributors.json");

    print_list_from_json_file(CONTRIBUTORS_JSON);
