const notas = ["A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab",];

function reproducirNota(){
    // antes de empezar apaga la nota previa
    // despliega el teclado
    let teclado = document.querySelector(".oculto");
    // Mostrar
    teclado.classList.remove("oculto");
    // toma el valor de la fecha actual, lo convierte en string, toma los ultimos 3 digitos y los asigna a la variable
    let timestamp = Date.now().toString().slice(-3);
    //console.log("Timestamp");
    //console.log(timestamp);
    //console.log(typeof(timestamp));
    // crea una variable number a partir del string timestamp
    let milesimas = Number(timestamp);
    // imprime valor y tipo
    //console.log("milesimas: ");
    //console.log(milesimas);
    //console.log("tipo de milesimas: ");
    //console.log(typeof(milesimas));
    // divide el valor en 12 y le asigna a otra variable
    let notaAlAzar = milesimas % 12;
    //console.log("milesimas: ");
    //console.log(milesimas);
    //console.log("nota al azar: ");
    //console.log(notaAlAzar);
    // De acá en adelante hay que ver como usar estos valores para definir el nombre del archivo
    let sonido = new Audio ("notas/" + notaAlAzar + ".mp3");
    //console.log("sonido: ");
    //console.log(sonido);
    sonido.play();
    // asocia el numero con la posicion del string dentro dl array
    notaAlAzar = notas[notaAlAzar];
    console.log(`nota elegida: ${notaAlAzar}`);
}

function pausarNota(){
    location.reload();
}