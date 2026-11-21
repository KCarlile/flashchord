/* global DEBUG */

// ------------------------------------------------------------
// Logging
// ------------------------------------------------------------

// log a message to the browser console if debugging is enabled
function logger($message) {
    if ((typeof DEBUG !== "undefined") && DEBUG) {
        console.log($message);
    } // end if test
} // end logger function

// start a new block of logging with a heavy line if debugging is enabled
function logger_new() {
    if ((typeof DEBUG !== "undefined") && DEBUG) {
        console.log("==========");
    } // end if test
} // end logger_new function

// start a new sub-block of logging with a light line if debugging is enabled
function logger_break() {
    if ((typeof DEBUG !== "undefined") && DEBUG) {
        console.log("----------");
    } // end if test
} // end logger_break function

// get a random value from an array
function getRandom ($array) {
    return $array[Math.floor(Math.random() * $array.length)];
} // end getRandom function

// ------------------------------------------------------------
// Utilities
// ------------------------------------------------------------

// get info email address
function getInfoEmailAddress() {
    let address;

    address = $.get('/mail-info', function( data ) {
        address = data;
    });

    alert(address);

    $('#mailInfoLink').attr("href", "mailto://" + address).text(address);

    return address;
} // end getinfoEmailAddress function
