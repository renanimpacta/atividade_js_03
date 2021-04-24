/**
 * Recebe um vetor de números e retorna o menor elemento do vetor. 
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array} vetor 
 * @return {Number} o menor valor.
 */
function acharMenor(vetor) {
    vetor.sort()
    return vetor[0]
}

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array} vetor com números inteiros.
 * @returns {Array} vetor contendo apenas números pares do original (ou vazio se não houver nenhum)
 */
function acharPares(vetor) {
    var numerosPares = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            numerosPares.push(vetor[i])
        }
    }
    return numerosPares
}
