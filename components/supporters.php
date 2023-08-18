<?php
    /**
     * @file components/supporters.php
     * 
     * This include file prints supporter content.
     */

    define("SUPPORTERS_JSON", "data/supporters.json");

    print_list_from_json_file(SUPPORTERS_JSON, true);
