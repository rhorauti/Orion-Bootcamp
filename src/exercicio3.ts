interface Pessoa {
    id: number,
    name: string,
    bio: string
}

let listaPessoa: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function resetarTabela() {
    const trPessoaExistente = document.querySelectorAll('.tr-pessoa'); 
    for(let i=0; i<trPessoaExistente.length; i++) {
        if (trPessoaExistente) {
            const parentElement = trPessoaExistente[i].parentElement;
                if (parentElement) {
                    parentElement.removeChild(trPessoaExistente[i]);
                }
    }}
    const tbodyPessoa = document.querySelector('.tbody-pessoa');
    for(let i=0; i<listaPessoa.length; i++) {
        const trPessoa = document.createElement('tr');
        trPessoa.classList.add('tr-pessoa');
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');
        const tdBio = document.createElement('td');
        tdId.innerHTML = String(listaPessoa[i].id);
        tdName.innerHTML = listaPessoa[i].name
        tdBio.innerHTML = listaPessoa[i].bio
        trPessoa.appendChild(tdId);
        trPessoa.appendChild(tdName);
        trPessoa.appendChild(tdBio);
        if (tbodyPessoa) {
            tbodyPessoa.appendChild(trPessoa);
        }
    }
}
resetarTabela()

const selectFiltroName:HTMLSelectElement|null = document.querySelector('#select-filtro-name');
const inputPesquisarName:HTMLInputElement|null = document.querySelector('#input-pesquisar-name');
const btnPesquisarName:HTMLElement|null = document.querySelector('.btn-name');

btnPesquisarName?.addEventListener('click', () => {
    const retornoName = executarAcaoTabela(listaPessoa[Number(selectFiltroName?.value)].id, 'GETNAME');
    inputPesquisarName.value = retornoName;
})

const selectFiltroBio:HTMLSelectElement|null = document.querySelector('#select-filtro-bio');
const inputPesquisarBio:HTMLInputElement|null = document.querySelector('#input-pesquisar-bio');
const btnPesquisarBio:HTMLElement|null = document.querySelector('.btn-bio');

btnPesquisarBio?.addEventListener('click', () => {
    const retornoBio = executarAcaoTabela(listaPessoa[Number(selectFiltroBio?.value)].id, 'GETBIO');
    inputPesquisarBio.value = retornoBio;
})

const selectFiltroAlteracao: HTMLSelectElement|null = document.querySelector('#select-filtro-alteracao');
const inputId:HTMLInputElement|null = document.querySelector('.input-id');
const inputName:HTMLInputElement|null = document.querySelector('.input-name');
const inputBio:HTMLInputElement|null = document.querySelector('.input-bio');
const btnEditar:HTMLElement|null = document.querySelector('#btn-editar');
const btnExcluir:HTMLElement|null = document.querySelector('#btn-excluir');

btnEditar?.addEventListener('click', () => {
    inputId.value = String(listaPessoa[Number(selectFiltroAlteracao?.value)].id);
    inputName.value = listaPessoa[Number(selectFiltroAlteracao?.value)].name;
    inputBio.value = listaPessoa[Number(selectFiltroAlteracao?.value)].bio;
})

btnExcluir?.addEventListener('click', () => {
    executarAcaoTabela(listaPessoa[Number(selectFiltroAlteracao?.value)].id, 'DEL');
})
   


function executarAcaoTabela(idx:number, acao:string='', name:string='', bio:string=''):string|undefined {
    let isIdxValido:boolean = false;
    for(let i=0; i<listaPessoa.length; i++) {
        if(listaPessoa[i].id == idx) {
            if(acao=='GETNAME') {
                isIdxValido = true;
                return listaPessoa[i].name;
            } else if(acao=='GETBIO') {
                isIdxValido = true;
                return listaPessoa[i].bio;
            } else if(acao=='DEL') {
                listaPessoa.splice(listaPessoa[i].id - 1, 1);
                isIdxValido = true;
            } else if(acao=='POST' && bio!='' && name!='') {
                listaPessoa[i].bio = bio;
                listaPessoa[i].name = name;
                isIdxValido = true;
            } else if(acao=='POST' && bio!='') {
                listaPessoa[i].bio = bio;
                isIdxValido = true;
            } else if(acao=='POST' && name!='') {
                listaPessoa[i].name = name;
                isIdxValido = true;
            } else {
                return;
            }
            resetarTabela();
        } 
    }
    if(!isIdxValido) {
        alert('Id não encontrado!')
    }
}