/* let stepIndex = 1;  // Controla el paso actual
function nextStep() {
    let currentStep = document.getElementById(`step${stepIndex}`);
    let nextStep = document.getElementById(`step${stepIndex + 1}`);

    if (currentStep) currentStep.classList.add("is-hidden");
    if (nextStep) nextStep.classList.remove("is-hidden");

    stepIndex++;  // Avanza al siguiente paso
} */

document.getElementById("nombreExplorador").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nombre = document.getElementById("name").value;
    document.getElementById("nombre").textContent = nombre; 
    document.getElementById("step1").classList.add("is-hidden")
    document.getElementById("step2").classList.remove("is-hidden")
});


function elegirArea(Area) {
    document.getElementById("step2").classList.add("is-hidden")
    document.getElementById("step3").classList.remove("is-hidden")

    if (Area === "front") {
        document.getElementById("frontEnd").classList.remove("is-hidden"); 
    } else {
        document.getElementById("backEnd").classList.remove("is-hidden"); 
    }
}

function elegirFrontLenguaje(FrontLenguaje) {
    document.getElementById("step3").classList.add("is-hidden")
    document.getElementById("step4Front").classList.remove("is-hidden")

    if (FrontLenguaje === "react") {
        document.getElementById("react").classList.remove("is-hidden"); 
    } else {
        document.getElementById("vue").classList.remove("is-hidden"); 
    }
}

function elegirBackLenguaje(BackLenguaje) {
    document.getElementById("step3").classList.add("is-hidden")
    document.getElementById("step4Back").classList.remove("is-hidden")

    if (BackLenguaje === "c#") {
        document.getElementById("c#").classList.remove("is-hidden"); 
    } else {
        document.getElementById("java").classList.remove("is-hidden"); 
    }
}

function toStep5() {
    document.getElementById("step4Front").classList.add("is-hidden");
    document.getElementById("step4Back").classList.add("is-hidden");
    document.getElementById("step5").classList.remove("is-hidden");
}

function continuarEstudio(postEstudio) {
    document.getElementById("step5").classList.add("is-hidden")
    document.getElementById("step6").classList.remove("is-hidden")

    if (postEstudio === "especializacion") {
        document.getElementById("especializacion").classList.remove("is-hidden"); 
    } else {
        document.getElementById("fullStack").classList.remove("is-hidden"); 
    }
}

function continuarEstudio(postEstudio) {
    document.getElementById("step5").classList.add("is-hidden")
    document.getElementById("step6").classList.remove("is-hidden")

    if (postEstudio === "especializacion") {
        document.getElementById("especializacion").classList.remove("is-hidden"); 
    } else {
        document.getElementById("fullStack").classList.remove("is-hidden"); 
    }
}
function toStep7() {
    document.getElementById("step6").classList.add("is-hidden")
    document.getElementById("step7").classList.remove("is-hidden")
}


let tecnologiasEscritas = [];
let otrasTecnologias;
document.getElementById("eligiendoTecnologias").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nuevasTecnologias = document.getElementById("nuevasTecnologias");
    
    if (nuevasTecnologias.value.trim() !== "") { 
        tecnologiasEscritas.push(nuevasTecnologias.value);
    }
    nuevasTecnologias.value = ""
    nuevasTecnologias.focus()
console.log(tecnologiasEscritas)
});

function finalizarTravesia (){
    document.getElementById("step7").classList.add("is-hidden");
    document.getElementById("step8").classList.remove("is-hidden");

    if (tecnologiasEscritas.length == 0){
        console.log("No hay tecnologías, mostrando caminoDefinido");
        document.getElementById("caminoDefinido").classList.remove("is-hidden");
    } else {
        console.log("Hay tecnologías, mostrando agregandoNuevasTecnologias");
        document.getElementById("agregandoNuevasTecnologias").classList.remove("is-hidden");
        document.getElementById("tecnologiasElegidas").innerHTML=tecnologiasEscritas.join(", ");
    }
}

function theEnd() {
    document.getElementById("step8").classList.add("is-hidden")
    document.getElementById("step9").classList.remove("is-hidden")
}
