const libre = " "
const cruz = "X"
const circulo = "O"

function ColocarFicha(ficha, tablero) {
    console.log("Ingrese el valor x")
    let x = prompt("Ingrese la opcion (1 | 3)")
    x--
    console.log("Ingrese el valor y")
    let y = prompt("Ingrese la opcion (1 | 3)")
    y--
    while(tablero[y][x] != libre) {
        console.log("La casilla esta ocupada")
        console.log("Ingrese el valor x")
        x = prompt("Ingrese la opcion (1 | 3)")
        x--
        console.log("Ingrese el valor y")
        y = prompt("Ingrese la opcion (1 | 3)")
        y--
    }
    tablero[y][x] = ficha
}

function DibujarTablero(tablero) {
    for(let i = 0; i < 3; i++) {
        console.log(tablero[i])  
    }
}

function ChequeoDeVictoriaVertical(x, tablero) {
    if((tablero[0][x] == tablero[1][x]) && (tablero[0][x] == tablero[2][x])) {
        if(tablero[0][x] ==  cruz) {
            return "jugador 1"
        }
        else if(tablero[0][x] == circulo) {
            return "jugador 2"
        }
    }
    return ""
}

function ChequeoDeVictoriaHorizontal(y, tablero) {
    if((tablero[y][0] == tablero[y][1]) && (tablero[y][0] == tablero[y][2])) {
        if(tablero[y][0] ==  cruz) {
            return "jugador 1"
        }
        else if(tablero[y][0] == circulo) {
            return "jugador 2"
        }
    }
    return ""
}

function ChequeoDeVictoriaDiagonalDer(tablero) {
    if((tablero[0][0] == tablero[1][1]) && (tablero[0][0] == tablero[2][2])) {
        if(tablero[0][0] ==  cruz) {
            return "jugador 1"
        }
        else if(tablero[0][0] == circulo) {
            return "jugador 2"
        }
    }
    return ""
}

function ChequeoDeVictoriaDiagonalIzq(tablero) {
    if((tablero[0][2] == tablero[1][1]) && (tablero[0][2] == tablero[2][0])) {
        if(tablero[0][2] ==  cruz) {
            return "jugador 1"
        }
        else if(tablero[0][2] == circulo) {
            return "jugador 2"
        }
    }
    return ""
}


function NuevoJuego() {  

    let tablero = [
        [libre, libre, libre],
        [libre, libre, libre],
        [libre, libre, libre]
    ]
    
    DibujarTablero(tablero)

    let turno = 0
    while(turno < 9) {
        // Pedir input al player 1
        console.log("Jugador 1")
        ColocarFicha(cruz, tablero)
        DibujarTablero(tablero)

        let resultado = ""
        resultado += ChequeoDeVictoriaVertical(0, tablero)
        resultado += ChequeoDeVictoriaVertical(1, tablero)
        resultado += ChequeoDeVictoriaVertical(2, tablero)
        resultado += ChequeoDeVictoriaHorizontal(0, tablero)
        resultado += ChequeoDeVictoriaHorizontal(1, tablero)
        resultado += ChequeoDeVictoriaHorizontal(2, tablero)
        resultado += ChequeoDeVictoriaDiagonalIzq(tablero)
        resultado += ChequeoDeVictoriaDiagonalDer(tablero)
        if(resultado != "") {
            console.log("El ganador es: " + resultado)
            break
        }
        
        // Pedir input al player 2
        console.log("Jugador 2")
        ColocarFicha(circulo, tablero)
        DibujarTablero(tablero)

        resultado += ChequeoDeVictoriaVertical(0, tablero)
        resultado += ChequeoDeVictoriaVertical(1, tablero)
        resultado += ChequeoDeVictoriaVertical(2, tablero)
        resultado += ChequeoDeVictoriaHorizontal(0, tablero)
        resultado += ChequeoDeVictoriaHorizontal(1, tablero)
        resultado += ChequeoDeVictoriaHorizontal(2, tablero)
        resultado += ChequeoDeVictoriaDiagonalIzq(tablero)
        resultado += ChequeoDeVictoriaDiagonalDer(tablero)
        if(resultado != "") {
            console.log("El ganador es: " + resultado)
            break
        }

        turno++
    }
    
    if(turno == 9) {
        console.log("Empate")
    }
}


// Inicio del programa
console.log("1 - Nuevo Juego")
console.log("2 - Salir")
let opcion = prompt("Ingrese la opcion (1 | 2)")
console.log(opcion)
    
if(opcion == 1) {
    NuevoJuego()
}

