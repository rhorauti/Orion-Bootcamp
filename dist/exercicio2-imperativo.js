"use strict";
// 2 - Dado o array:
let lista1 = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
const pessoasImperativo = lista;
// a) Crie uma função que retorne a bio do id passado
function retornarBioImperativo(idx) {
    let isIdxValido = false;
    const tamanhoArray = pessoasImperativo.length;
    for (let i = 0; i < tamanhoArray; i++) {
        if (pessoasImperativo[i].id == idx) {
            isIdxValido = true;
            const bioSelecionada = pessoasImperativo[i].bio;
            return bioSelecionada;
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
retornarBioImperativo(5);
// b) Crie uma função que retorne o name do id passado
function retornarNameImperativo(idx) {
    let isIdxValido = false;
    const tamanhoArray = pessoasImperativo.length;
    for (let i = 0; i < tamanhoArray; i++) {
        if (pessoasImperativo[i].id == idx) {
            isIdxValido = true;
            const nameSelecionado = pessoasImperativo[i].name;
            return nameSelecionado;
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
retornarNameImperativo(5);
// c) Crie uma função que apague um item da lista a partir de um id passado
function apagarItemImperativo(idx) {
    let isIdxValido = false;
    const tamanhoArray = pessoasImperativo.length;
    for (let i = 0; i < tamanhoArray; i++) {
        if (pessoasImperativo[i].id == idx) {
            const itemExcluir = lista[i].id - 1;
            pessoasImperativo.splice(itemExcluir, 1);
            isIdxValido = true;
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
apagarItemImperativo(4);
// d) Crie uma função que altere a bio ou o name a partir de um id passado
function alterarBioOuNameImperativo(idx, bio = '', name = '') {
    let isIdxValido = false;
    const tamanhoArray = pessoasImperativo.length;
    for (let i = 0; i < tamanhoArray; i++) {
        if (pessoasImperativo[i].id == idx) {
            let bioSelecionada = pessoasImperativo[i].bio;
            let nameSelecionado = pessoasImperativo[i].name;
            if (bio != '' && name != '') {
                bioSelecionada = bio;
                nameSelecionado = name;
            }
            else if (bio != '') {
                bioSelecionada = bio;
            }
            else if (name != '') {
                nameSelecionado = name;
            }
            isIdxValido = true;
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
alterarBioOuNameImperativo(2, "", "horauti");
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// funções descritas acima estão no paradigma funcional.
