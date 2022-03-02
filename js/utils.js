function logger($message) {
    if (DEBUG) {
        console.log($message);
    }
}

function logger_new() {
    if (DEBUG) {
        console.log("------");
    }
}