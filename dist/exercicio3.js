"use strict";
let listaPessoa = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// const idPessoa = document.querySelector('.id-pessoa');
// const namePessoa = document.querySelector('.name-pessoa');
// const bioPessoa = document.querySelector('.bio-pessoa');
function criarTabela() {
    const trPessoaExistente = document.querySelector('.tr-pessoa');
    if (trPessoaExistente) {
        const parentElement = trPessoaExistente.parentElement;
        if (parentElement) {
            parentElement.removeChild(trPessoaExistente);
        }
    }
    const tbodyPessoa = document.querySelector('.tbody-pessoa');
    for (let i = 0; i < listaPessoa.length; i++) {
        const trPessoa = document.createElement('tr');
        trPessoa.classList.add('tr-pessoa');
        // insere coluna id na tabela 
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');
        const tdBio = document.createElement('td');
        const tdBtn = document.createElement('td');
        const btnEditar = document.createElement('button');
        const btnExcluir = document.createElement('button');
        btnEditar.classList.add('btn-editar');
        btnEditar.innerHTML = 'Editar';
        btnExcluir.innerHTML = 'Excluir';
        btnExcluir.classList.add('btn-excluir');
        tdBtn.appendChild(btnEditar);
        tdBtn.appendChild(btnExcluir);
        tdId.innerHTML = String(listaPessoa[i].id);
        tdName.innerHTML = listaPessoa[i].name;
        tdBio.innerHTML = listaPessoa[i].bio;
        trPessoa.appendChild(tdId);
        trPessoa.appendChild(tdName);
        trPessoa.appendChild(tdBio);
        trPessoa.appendChild(tdBtn);
        if (tbodyPessoa) {
            tbodyPessoa.appendChild(trPessoa);
        }
    }
}
criarTabela();
const areaDireita = document.querySelector('#area-direita');
const inputId = document.querySelector('.input-id');
const inputName = document.querySelector('.input-name');
const inputBio = document.querySelector('.input-bio');
for (let i = 0; i < listaPessoa.length; i++) {
    const btnEditarList = document.querySelectorAll('.btn-editar');
    btnEditarList[i].addEventListener('click', () => {
        if (areaDireita) {
            areaDireita ? areaDireita.style.display = 'block' : '';
            //@ts-ignore devido ao value 
            inputId ? inputId.value = String(listaPessoa[i].id) : '';
            //@ts-ignore devido ao value
            inputName ? inputName.value = listaPessoa[i].name : '';
            //@ts-ignore devido ao value
            inputBio ? inputBio.value = listaPessoa[i].bio : '';
        }
    });
}
function executarAcaoTabela(idx, acao = '', name = '', bio = '') {
    let isIdxValido = false;
    for (let i = 0; i < listaPessoa.length; i++) {
        if (listaPessoa[i].id == idx) {
            if (acao == 'GETNAME') {
                isIdxValido = true;
                return listaPessoa[i].name;
            }
            else if (acao == 'GETBIO') {
                isIdxValido = true;
                return listaPessoa[i].bio;
            }
            else if (acao == 'DEL') {
                listaPessoa.splice(listaPessoa[i].id - 1, 1);
                isIdxValido = true;
            }
            else if (acao == 'POST' && bio != '' && name != '') {
                listaPessoa[i].bio = bio;
                listaPessoa[i].name = name;
                isIdxValido = true;
            }
            else if (acao == 'POST' && bio != '') {
                listaPessoa[i].bio = bio;
                isIdxValido = true;
            }
            else if (acao == 'POST' && name != '') {
                listaPessoa[i].name = name;
                isIdxValido = true;
            }
            else {
                return;
            }
        }
    }
    if (!isIdxValido) {
        console.log('Id não encontrado!');
    }
}
// executarAcaoTabela(6, 'POST','', 'Rafael');
