function cambiarABinario(minitermino) {
    let binario = ''
    let siguienteDiv = minitermino
    let residuo
    for (let i = 0; i < 4; i++) {
        residuo = siguienteDiv % 2
        siguienteDiv = Math.trunc(siguienteDiv / 2)
        binario = residuo.toString() + binario
    }    
    return binario
}

const miniTerminos = [1,3,4,5,7,9,10,11,15]
const tabla = new Array(5).fill(null).map(() => Array())
const miniTerminosBin = []

miniTerminos.forEach( min => {
    const numBin = cambiarABinario(min);
    let contador = 0;

    for (let i = 0; i < numBin.length; i++) {
        const letra = numBin[i];
        if (letra === '1') {
            contador++;
        }
    }

    const nivel = tabla[contador]
    nivel.push({
        minTerm: `m${min}`,
        numBin
    })
    // nivel.push(numBin)

});

const tmp = []

for (let i = 0; i < tabla.length; i++) {
    const primerNivel = tabla[i];
    const segundoNivel = tabla[i+1]
    if (segundoNivel === undefined) {
        break
    }
    // console.log(segundoNivel);
    primerNivel.forEach( minTerm => {
        segundoNivel.forEach( segMinTerm => {
            let str = ''
            let cont = 0
            for (let j = 0; j < minTerm.numBin.length; j++) {
                // Obtener la posicion de la letra de los miniterminos  
                const posMinTerm = minTerm.numBin[j];
                const posSegMinTerm = segMinTerm.numBin[j];
                if (posMinTerm === posSegMinTerm) {
                    str += posMinTerm
                } else {
                    cont++
                    str += '*'
                }
            }
            if (cont === 1) {
                tmp.push(str)
                console.log(minTerm.numBin, segMinTerm.numBin)
            }
        })
    })
}

// console.log(tabla)
console.log(tmp)