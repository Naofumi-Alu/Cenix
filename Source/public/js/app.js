$(document).ready(function() {
    $("#submit_contact").click(function() {
        $.ajax({
            url: '../php/contact.php',
            type: 'POST',
            success: function(res) {
                console.log(res);
            }
        });
    });
})