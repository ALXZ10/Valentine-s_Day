var beardedBoo = function() {
    var body = $('body'),
        image = $("#image");
    body.removeClass("no").removeClass("maybe")
    image.removeClass("benefits").removeClass("certificate")
    let answer = prompt("¿Quieres ser mi 14 de febrero? Sí, No, Quizas").toLowerCase()
    if (answer == "si" || answer == 's' || answer == 'sí') {
        body.addClass("yes")
        image.addClass("certificate")
    } else if (answer == "quizas" || answer == 'q') {
        body.addClass("maybe")
        setTimeout(beardedBoo, 6000)
        setTimeout(function() {
            alert("Aqui tienes algunos beneficios, por si te decides")
            image.addClass("benefits")
        }, 200)
/* HEY!!! */
    } else {
        body.addClass("no")
        setTimeout(function() {
            alert("Dijiste que no, pero no te preocupes, puedes intentarlo de nuevo")
            beardedBoo()
        }, 200)
    }
}
setTimeout(beardedBoo, 300)