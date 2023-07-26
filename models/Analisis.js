// @ts-check

export class Analisis {

    indice = 0

    /**
     * 
     * @param {Object} preguntas 
     */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /**
     * 
     * @returns {Object}
     */
    getAnalisisIndice(){
        return this.preguntas[this.indice]
    }

    finalizo(){
        return this.preguntas.length === this.indice
    }

    /**
     * 
     * @returns {string} 
     */
    sumarIndice(texto){
        if(this.preguntas[this.indice].importancia){
            this.indice++
            return texto
        }else{
            this.indice++
            return ""
        }
    }
}