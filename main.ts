let rendom_nummer = 0
input.onButtonPressed(Button.A, function () {
    rendom_nummer = randint(0, 6)
    if (rendom_nummer == 1) {
        basic.showString("OMTER EERST EEN GLAS WATER LEEG DRINKEN")
    } else if (rendom_nummer == 2) {
        basic.showString("PINPONG, EERSTE TOT 3")
    } else if (rendom_nummer == 3) {
        basic.showString("IN DE BULL GOOIEN")
    } else if (rendom_nummer == 4) {
        basic.showString("OMTERT EERST 6 GOOIEN MRET EEN DOBELLSTEEN")
    } else if (rendom_nummer == 5) {
        basic.showString("EEN VOORWERP VERSTOPEN / ZOEKEN ")
    } else if (rendom_nummer == 6) {
        basic.showString("EEN SLOKJE AIR UP")
    }
})
basic.forever(function () {
	
})
