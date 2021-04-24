/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas) 
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado, não faça nada.
 * Exemplos:
 *  - Yuri Dirickson -> Yuri D.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 * 
 * @param {String} nomeCompleto nome completo da pessoa.
 * @return string com o segundo nome abreviado
 */

function abreviadorNomes(nomeCompleto) {
    let nome = nomeCompleto.split(" ");
    if (nome.length == 1) {
        return nomeCompleto
    }
    return nome[0] + " " + nome[1].substring(0, 1) + ".";

}

/**
 * Escreva uma função que recebe uma String com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Mês Extenso de Ano'. 
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 * OBS: Note a letra maiúscula do mês.
 * OBS2: Se a data estiver sem conteúdo deve devolver null
 * 
 * @param {String} data 
 * @returns {String} data no formato 
 */
function converteDataParaFormaCompleta(data) {
    let dtNumero = data.split("/")

    if (dtNumero[1] == "01") {
        dtNumero[1] = "Janeiro"
    } else if (dtNumero[1] == "02") {
        dtNumero[1] = "Fevereiro"
    } else if (dtNumero[1] == "03") {
        dtNumero[1] = "Março"
    } else if (dtNumero[1] == "04") {
        dtNumero[1] = "Abril"
    } else if (dtNumero[1] == "05") {
        dtNumero[1] = "Maio"
    } else if (dtNumero[1] == "06") {
        dtNumero[1] = "Junho"
    } else if (dtNumero[1] == "07") {
        dtNumero[1] = "Julho"
    } else if (dtNumero[1] == "08") {
        dtNumero[1] = "Agosto"
    } else if (dtNumero[1] == "09") {
        dtNumero[1] = "Setembro"
    } else if (dtNumero[1] == "10") {
        dtNumero[1] = "Outubro"
    } else if (dtNumero[1] == "11") {
        dtNumero[1] = "Novembro"
    } else if (dtNumero[1] == "12") {
        dtNumero[1] = "Dezembro"
    } else {
        return null
    }

    return dtNumero[0] + " de " + dtNumero[1] + " de " + dtNumero[2]
}

