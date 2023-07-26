// @ts-check
import {preguntas} from './data/preguntas.js';
import {Analisis} from "./models/Analisis.js";
import {UI} from "./models/UI.js";
import {resultados} from "./data/resultados.js";


/**
 *
 * @param {Analisis} analisis
 * @param {UI} ui
 */
const renderizador = (analisis, ui, listaImportancia) => {
    if(analisis.finalizo()){
        let indice;
        for (let i = 0; i < resultados.length; i++) {
            indice = 0;
            for (let j = 0; j < listaImportancia.length; j++){
                if(resultados[i].resultado[j] === listaImportancia[j]){
                    indice++;
                    if(indice === 3){
                        ui.mostrarResultado(resultados[i].nombre, resultados[i].imagen, resultados[i].precio, resultados[i].descipcion, () => {
                            main();
                        });
                        break;
                    }
                }
            }
        }
    }else{
        ui.mostrarPregunta(analisis.getAnalisisIndice().pregunta)
        ui.mostrarOpciones(analisis.getAnalisisIndice().opciones, (actualRespuesta) =>{
        let actual = analisis.sumarIndice(actualRespuesta)
        ui.mostrarInicio()
        if( actual === ""){
        }else{
            listaImportancia.push(actual)
        }
        renderizador(analisis, ui, listaImportancia)})
        ui.mostrarProgreso(analisis.indice + 1, preguntas.length)
    }
}

function main(){
    const analisis = new Analisis(preguntas)
    const ui = new UI()
    const listaImportancia = []
    ui.mostrarInicio("Embárcate en esta experiencia para encontrar tu aroma perfecto según la ocasión y descubre tu esencia singular.")
    renderizador(analisis, ui, listaImportancia)
}

main()
