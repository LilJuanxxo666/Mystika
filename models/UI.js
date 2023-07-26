export class UI {
    constructor(){}

    mostrarPregunta(texto){
        const tituloPregunta = document.getElementById("pregunta")
        tituloPregunta.innerText = ""
        tituloPregunta.innerText = texto
    }

    /**
     * 
     * @param {String[]} opciones 
     */
    mostrarOpciones(opciones, callback){
        const contenedorElementos = document.getElementById("opciones")
        contenedorElementos.innerText = ""

        for(let i = 0; i < opciones.length; i++){
            const boton = document.createElement('button')
            boton.innerText = opciones[i]
            boton.className = "boton"
            boton.addEventListener("click", () => callback(opciones[i]))
            contenedorElementos.appendChild(boton)
        }
    }


    mostrarProgreso(actualIndice, total){
        const element = document.getElementById("progreso")
        element.innerHTML = `Pregunta ${actualIndice} de ${total}`
    }

    mostrarResultado(nombre, imagen, precio, descripcion, callback){
        const quizEndHtml = `
            <h1>${nombre}</h1>
            <hr>
            <h2>${precio}</h2>
            <img src="${imagen}" class="imagen">
            <img src="../data/imag/Logo.png" id="logo-principal"/>
            <hr>
            <p>${descripcion}</p>
            <button class="boton" id="volver">Volver</button>
        `;
        const element = document.getElementById("quiz")
        element.innerHTML = quizEndHtml;

        const boton = document.getElementById("volver");
        boton.addEventListener('click', () => callback());
    }
    mostrarInicio(texto = ""){
        const quizStartHtml = `
        <h1>FIND YOUR SCENT</h1>
        <p>${texto}</p>
        <hr>
        <h2 id="pregunta"></h2>
        <div id="opciones"></div>
        <hr>
        <footer>
            <p id="progreso"></p>
        </footer>
        `;
        const element = document.getElementById("quiz")
        element.innerHTML = quizStartHtml;
    }
}