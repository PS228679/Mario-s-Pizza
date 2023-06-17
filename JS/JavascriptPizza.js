function inloggen() {
    var gebruikers = document.getElementById("GB").value;
    var wachtwoord = document.getElementById("WW").value;



    if (gebruikers == "admin" && wachtwoord == "admin") {
        location.replace("PersoneelsPagina.html")
    } else {
        alert("Wachtwoord of gebruikersnaam is klopt niet")
    }
}

function Berekening() {

    var ingredient1 = document.getElementById("ingredient1").value;
    var ingredient2 = document.getElementById("ingredient2").value;
    var ingredient3 = document.getElementById("ingredient3").value;
    var ingredient4 = document.getElementById("ingredient4").value;
    var ingredient5 = document.getElementById("ingredient5").value;
    var ingredient6 = document.getElementById("ingredient6").value;
    var ingredient7 = document.getElementById("ingredient7").value;
    var ingredient8 = document.getElementById("ingredient8").value;

    var ppk1 = document.getElementById("ppk1").value;
    var ppk2 = document.getElementById("ppk2").value;
    var ppk3 = document.getElementById("ppk3").value;
    var ppk4 = document.getElementById("ppk4").value;
    var ppk5 = document.getElementById("ppk5").value;
    var ppk6 = document.getElementById("ppk6").value;
    var ppk7 = document.getElementById("ppk7").value;
    var ppk8 = document.getElementById("ppk8").value;

    var needed1 = document.getElementById("needed1").value;
    var needed2 = document.getElementById("needed2").value;
    var needed3 = document.getElementById("needed3").value;
    var needed4 = document.getElementById("needed4").value;
    var needed5 = document.getElementById("needed5").value;
    var needed6 = document.getElementById("needed6").value;
    var needed7 = document.getElementById("needed7").value;
    var needed8 = document.getElementById("needed8").value;

    /* Kijkt of alles goed is ingevuld en rekent het uit */
    if (ingredient1 != '' && ppk1 > -1 && needed1 > 0) {
        document.getElementById("pizza25_1").value = ppk1 / 1000 * needed1
        document.getElementById("pizza35_1").value = 1.96 * pizza25_1.value
    }
    else if (ingredient1 == '' || ppk1 < 0 || needed1 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient2 != '' && ppk3 > -1 && needed2 > 0) {
        document.getElementById("pizza25_2").value = ppk2 / 1000 * needed2
        document.getElementById("pizza35_2").value = 1.96 * pizza25_2.value
    }
    else if (ingredient2 == '' || ppk2 < 0 || needed2 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient3 != '' && ppk3 > -1 && needed3 > 0) {
        document.getElementById("pizza25_3").value = ppk3 / 1000 * needed3
        document.getElementById("pizza35_3").value = 1.96 * pizza25_3.value
    }
    else if (ingredient3 == '' || ppk3 < 0 || needed3 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient4 != '' && ppk4 > -1 && needed4 > 0) {
        document.getElementById("pizza25_4").value = ppk4 / 1000 * needed4
        document.getElementById("pizza35_4").value = 1.96 * pizza25_4.value
    }
    else if (ingredient4 == '' || ppk4 < 0 || needed4 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient5 != '' && ppk5 > -1 && needed5 > 0) {
        document.getElementById("pizza25_5").value = ppk5 / 1000 * needed5
        document.getElementById("pizza35_5").value = 1.96 * pizza25_5.value
    }
    else if (ingredient5 == '' || ppk5 < 0 || needed5 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient6 != '' && ppk6 > -1 && needed6 > 0) {
        document.getElementById("pizza25_6").value = ppk6 / 1000 * needed6
        document.getElementById("pizza35_6").value = 1.96 * pizza25_6.value
    }
    else if (ingredient6 == '' || ppk6 < 0 || needed6 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient7 != '' && ppk7 > -1 && needed7 > 0) {
        document.getElementById("pizza25_7").value = ppk7 / 1000 * needed7
        document.getElementById("pizza35_7").value = 1.96 * pizza25_7.value
    }
    else if (ingredient7 == '' || ppk7 < 0 || needed7 < 0) {
        alert("Voer correcte informatie in aub.");
    }

    if (ingredient8 != '' && ppk8 > -1 && needed8 > 0) {
        document.getElementById("pizza25_8").value = ppk8 / 1000 * needed8
        document.getElementById("pizza35_8").value = 1.96 * pizza25_8.value
    }
    else if (ingredient8 == '' || ppk8 < 0 || needed8 < 0) {
        alert("Voer correcte informatie in aub.");
    }
    /* Telt alles bij elkaar op en toont het in de correcte read only input field */
    var uitkomst25 = parseFloat(pizza25_1.value) + parseFloat(pizza25_2.value) + parseFloat(pizza25_3.value) + parseFloat(pizza25_4.value) + parseFloat(pizza25_5.value) + parseFloat(pizza25_6.value) + parseFloat(pizza25_7.value) + parseFloat(pizza25_8.value);
    var uitkomst35 = parseFloat(pizza35_1.value) + parseFloat(pizza35_2.value) + parseFloat(pizza35_3.value) + parseFloat(pizza35_4.value) + parseFloat(pizza35_5.value) + parseFloat(pizza35_6.value) + parseFloat(pizza35_7.value) + parseFloat(pizza35_8.value);
    uitkomst25 = uitkomst25.toFixed(2);
    uitkomst35 = uitkomst35.toFixed(2);
    document.getElementById("uitkomst25").value = uitkomst25;
    document.getElementById("uitkomst35").value = uitkomst35;
}