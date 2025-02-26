let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estas estudiando?"); 


function bienvenida () {
    document.getElementById("bienvenida").innerHTML = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}.`
    return
}
bienvenida()


function aliento () {
    console.log("antes de la funcion", document.getElementById("mensajeAliento"))
    let pregunta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`) 
    console.log(pregunta)
    if (pregunta == 1){
        document.getElementById("mensajeAliento").innerHTML = `¡Muy bien! Sigue estudiando ${lenguaje} y tendrás mucho éxito.`;
        console.log("despues de la funcion", document.getElementById("mensajeAliento"))
        } else if (pregunta == 2){
        let otrosLenguajes = prompt ("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes? (1 para SÍ o 2 para NO).");
        if (otrosLenguajes == 1){
            document.getElementById("mensajeAliento").innerHTML ="¡Genial! Seguro que con ese nuevo lenguaje te irá mejor.";
        }
        else if (otrosLenguajes == 2){
            document.getElementById("mensajeAliento").innerHTML = `¡No te preocupes si no te gusta ${lenguaje}! Siempre puedes intentar con otras cosas.`;
        }else {
            alert ("Respuesta no válida. Por favor, intenta de nuevo.");
        }
    } else {
        alert ("Respuesta no válida. Por favor, intenta de nuevo.");
     } 
}

aliento()