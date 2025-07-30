const notas = ["A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab",];
let indiceNotaAlAzar;
let nombreNotaAlAzar;

function reproducirNota(){
    // antes de empezar apaga la nota previa
    let teclado = document.querySelector(".oculto");
    // Mostrar un nuevo teclado
    teclado.classList.remove("oculto");

    // toma el valor de la fecha actual, lo convierte en string, toma los ultimos 3 digitos y los asigna a la variable
    let timestamp = Date.now().toString().slice(-3);
    // crea una variable number a partir del string timestamp
    let milesimas = Number(timestamp);
    // divide el valor en 12 (tipo number)
    indiceNotaAlAzar = milesimas % 12;
    
    // segun el valor de la varibale indice define el archivo y lo reproduce
    let sonido = new Audio ("notas/" + indiceNotaAlAzar + ".mp3");
    sonido.play();
    // asocia el numero con la posicion del string dentro del array
    nombreNotaAlAzar = notas[indiceNotaAlAzar];
    console.log(`nota al azar: ${nombreNotaAlAzar}`);
}

function pausarNota(){
    //al presionar el botòn se recarga la página
    location.reload();
}

// acá te deja elegir nota y la compara con la que eligió el sistema
// pero hay un problema porque nota al azar sale como undefined, creo que es problema de scope
function elegirNota(notaElegida){
    console.log("Nota Elegida: " + notas[notaElegida]);
    console.log("Nota al azar era: " + notas[indiceNotaAlAzar]);
    if (notaElegida === indiceNotaAlAzar) {
        console.log("¡Tenés razón!")
    }
    else {
        console.log("Te equivocaste sordo! era un " + notas[indiceNotaAlAzar] + " de manual!");
    }
}