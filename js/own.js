/*
*Calling the functions
*/
$(document).ready(function () {
    //Top-Button
    //Make visible
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    //Scroll
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //Tooltip
    $('#back-to-top').tooltip('show');

    //Eventhandler: Kommentar senden
    $('#sendcomment').click(kommentarSenden);

});

/*
*Implementation of the functions
*/
//Kommentar senden
function kommentarSenden() {
    var kommentartext = document.getElementById('commentinput').value;
    document.getElementById('commentoutput').innerHTML = kommentartext;
}
