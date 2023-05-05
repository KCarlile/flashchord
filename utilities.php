<?php
    function print_list_from_json_file($file, $ordered_list = false) {
        // get JSON data array of supports from file
        $data_arr = json_decode(file_get_contents(__DIR__ . "/" . $file));
        
        // loop over supporters and print list
        if (($data_arr) && (count($data_arr) > 0)) {
            // determine list type
            $list_type = $ordered_list ? "ol" : "ul";

            print("\t\t<$list_type>\n");
            foreach ($data_arr as $element) {
                print("\t\t\t" . '<li>' . $element . '</li>' . "\n");
            }
            print("\t\t</$list_type>\n");
        }
    }
