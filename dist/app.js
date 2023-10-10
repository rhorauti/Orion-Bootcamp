"use strict";
// 2 - Dado o array:
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
const pessoas = lista;
// a) Crie uma função que retorne a bio do id passado
function retornarBio(idx) {
    let isIdxValido = false;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == idx) {
            isIdxValido = true;
            return console.log(pessoas[i].bio);
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
// b) Crie uma função que retorne o name do id passado
function retornarName(idx) {
    let isIdxValido = false;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == idx) {
            isIdxValido = true;
            return console.log(pessoas[i].name);
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
// c) Crie uma função que apague um item da lista a partir de um id passado
function apagarItem(idx) {
    let isIdxValido = false;
    for (let i = 0; i < lista.length; i++) {
        if (pessoas[i].id == idx) {
            lista.splice(pessoas[i].id - 1, 1);
            isIdxValido = true;
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
    console.log(lista);
}
// d) Crie uma função que altere a bio ou o name a partir de um id passado
function alterarBioOuName(idx, bio, name) {
    let isIdxValido = false;
    for (let i = 0; i < lista.length; i++) {
        if (pessoas[i].id == idx) {
            if (bio != undefined) {
                pessoas[i].bio = bio;
            }
            if (name != undefined) {
                pessoas[i].name = name;
            }
            isIdxValido = true;
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
    console.log(lista);
}
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// O paradigma funcional 
retornarBio(7);
retornarName(7);
apagarItem(7);
alterarBioOuName(7, "Horauti", "Rafael");
// Paradigma imperativo
