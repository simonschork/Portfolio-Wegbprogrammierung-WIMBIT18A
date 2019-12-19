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
async function kommentarSenden() {
    var kommentartext = document.getElementById('commentinput').value;
    var kommentar = Array(kommentartext);

    /*
    *Toxicity detection
    */
    //Minimale Vorhersagesicherheit
    const grenzwert = 0.9;
    //Objekt für Klassifizierung deklarieren
    var classification = new Object();

    //Model laden
    classification = await toxicity.load(grenzwert).then(async model => {
        //Kommentar als modelinput
        var saetze = kommentar;
        var modeloutput = new Object();

        //Vorhersage
        modeloutput = await model.classify(saetze);
        //Vorhersage übergeben
        return modeloutput;
    });

    //Ouput auf konsole ausgeben
    console.log(classification);

    //Toxicity prüfen
    if (classification[0].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else if (classification[1].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else if (classification[2].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else if (classification[3].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else if (classification[4].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else if (classification[5].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else if (classification[6].results[0].match == true) {
        alert('Entschuldigung, Ihr Kommentar wird nicht veröffentlicht, da er als Beleidigung interpretiert werden könnte!')
    } else {
        //Kommentar veröffentlichen
        document.getElementById('commentoutput').innerHTML = kommentar;
    }
}
