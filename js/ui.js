$(document).ready(function() {
    // setup copyright
    $("#copyright_year").text(new Date().getFullYear());

    // setup keys dropdown
    var option = '';
    for (var $key in $keys) {
       option += '<option value="'+ $key + '">' + $key + '</option>';
    }
    $("#keys").append(option);
});
