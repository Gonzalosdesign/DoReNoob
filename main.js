const notas = ["A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab",];
let indiceNotaAlAzar;
let nombreNotaAlAzar;
let sonido;
let teclado = document.querySelector(".oculto");
let aciertos = 0;
let fallos = 0;

function reproducirNota(){
    // antes de empezar apaga la nota previa si ya estaba sonando
    if (sonido !== undefined){
        sonido.pause();
    }

    // Mostrar un nuevo teclado
    teclado.classList.remove("oculto");

    // toma el valor de la fecha actual, lo convierte en string, toma los ultimos 3 digitos y los asigna a la variable
    let timestamp = Date.now().toString().slice(-3);
    // crea una variable number a partir del string timestamp
    let milesimas = Number(timestamp);
    // divide el valor en 12 (tipo number)
    indiceNotaAlAzar = milesimas % 12;
    
    // segun el valor de la varibale indice define el archivo y lo reproduce
    sonido = new Audio ("notas/" + indiceNotaAlAzar + ".mp3");
    sonido.play();
    // asocia el numero con la posicion del string dentro del array
    nombreNotaAlAzar = notas[indiceNotaAlAzar];
    console.log(`nota al azar: ${nombreNotaAlAzar}`);
    console.log("Aciertos: " + aciertos);
    console.log("Fallos: " + fallos);
}

function pausarNota(){
    //al presionar el botòn se recarga la página
    location.reload();
}

// acá te deja elegir nota, la compara con la que eligió el sistema y te devuelve un mensaje con el resultado
function elegirNota(notaElegida){
    console.log("Nota Elegida: " + notas[notaElegida]);
    console.log("Nota al azar era: " + notas[indiceNotaAlAzar]);
    if (notaElegida === indiceNotaAlAzar) {
        aciertos++;
        let mensaje = "¡Tenés razón!\n";
        mensaje += "Elegiste " + notas[notaElegida] + " y era un " + notas[indiceNotaAlAzar] + "\n";
        mensaje +=   "Aciertos: " + aciertos + "\nFallos: " + fallos;
        window.alert(mensaje);
        sonido.pause();
    }
    else {
        fallos++;
        let mensaje = "Te equivocaste sordo!\n";
        mensaje += "Elegiste " + notas[notaElegida] + " y era un " + notas[indiceNotaAlAzar] + " de manual!\n";
        mensaje +=   "Aciertos: " + aciertos + "\nFallos: " + fallos;
        window.alert(mensaje);
        sonido.pause();
    }
}