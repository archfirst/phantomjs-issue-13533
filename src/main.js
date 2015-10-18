$(document).ready(function() {

    $('#submitButton').click(function(e) {
        e.preventDefault();
        $('#displayName').text($('#firstName').val() + ' ' + $('#lastName').val());
    });
});