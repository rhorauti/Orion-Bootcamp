"use strict";
// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada. Teste
const vogais = ['a', 'e', 'i', 'o', 'u'];
function retornarQtdVogais(palavra) {
    let qtdVogais = 0;
    const arrayPalavra = palavra.split('');
    console.log(arrayPalavra);
    if (arrayPalavra.length == 0) {
        return console.log('Nenhuma palavra foi digitada!');
    }
    else {
        vogais.forEach((v) => {
            arrayPalavra.forEach((p) => {
                if (p.normalize("NFD").replace(/\p{Diacritic}/gu, "") == v)
                    qtdVogais++;
            });
        });
        return console.log(qtdVogais);
    }
}
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
retornarQtdVogais('bootcamp');
//b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
function mostrarQtdVogais() {
    var _a;
    let qtdVogais = 0;
    let qtdVogaisPalavra = document.getElementById('qtd-vogais-palavra');
    const arrayPalavra = (_a = document.getElementById('input-palavra')) === null || _a === void 0 ? void 0 : _a.value.split('');
    if (arrayPalavra.length == 0 || arrayPalavra == null || arrayPalavra == undefined) {
        alert('Nenhuma palavra foi digitada!');
        qtdVogaisPalavra.innerHTML = '';
    }
    else {
        vogais.forEach((vogal) => {
            arrayPalavra.forEach((letra) => {
                if (letra.normalize("NFD").replace(/\p{Diacritic}/gu, "") == vogal)
                    qtdVogais++;
            });
        });
        qtdVogaisPalavra.innerHTML = `A quantidade de vogais da plavara digitada é <b>${qtdVogais}</b>`;
    }
}
function limpar() {
    var _a, _b;
    (_a = document.getElementById('input-palavra')) === null || _a === void 0 ? void 0 : _a.value = '';
    (_b = document.getElementById('qtd-vogais-palavra')) === null || _b === void 0 ? void 0 : _b.innerHTML = '';
}
