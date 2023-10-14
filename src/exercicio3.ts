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
        }
    }
    const tbodyPessoa = document.querySelector('.tbody-pessoa');
    for(let i=0; i<listaPessoa.length; i++) {
        // criação dos dados da tabela
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
    // criação dos select; 
    const selectFiltroList: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.select-filtro');
    const optionFiltroList: NodeListOf<HTMLOptionElement> = document.querySelectorAll('.option-filtro');
    for(let n=0; n<optionFiltroList.length; n++) {
        if (optionFiltroList) {
            const parentElement = optionFiltroList[n].parentElement;
                if (parentElement) {
                    parentElement.removeChild(optionFiltroList[n]);
                }
        }
    }
    for(let j=0; j<selectFiltroList.length; j++) {
        for(let k=0; k<listaPessoa.length; k++) {
            const option:HTMLOptionElement = document.createElement('option');
            option.classList.add('option-filtro');
            option.value = (listaPessoa[k].id).toString();
            option.innerHTML = (listaPessoa[k].id).toString();
            selectFiltroList[j].appendChild(option);
        }
    }
    const inputPesquisarName:HTMLInputElement = document.querySelector('#input-pesquisar-name');
    const inputPesquisarBio:HTMLInputElement|null = document.querySelector('#input-pesquisar-bio');
    const inputId:HTMLInputElement|null = document.querySelector('.input-id');
    const inputName:HTMLInputElement|null = document.querySelector('.input-name');
    const inputBio:HTMLInputElement|null = document.querySelector('.input-bio');
    inputId.value = '';
    inputName.value = '';
    inputBio.value = '';
    inputPesquisarBio.value = '';
    inputPesquisarName.value = '';
    selectFiltroList[0].value = '';
    selectFiltroList[1].value = '';
    selectFiltroList[2].value = '';
}

resetarTabela();

window.addEventListener('DOMContentLoaded', () => {
    const inputPesquisarName:HTMLInputElement = document.querySelector('#input-pesquisar-name');
    const btnPesquisarName:HTMLElement = document.querySelector('.btn-name');
    const selectFiltroList: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.select-filtro');

    btnPesquisarName?.addEventListener('click', () => {
        executarAcaoTabela(Number(selectFiltroList[0].value), 'GETNAME');
    })

    const inputPesquisarBio:HTMLInputElement|null = document.querySelector('#input-pesquisar-bio');
    const btnPesquisarBio:HTMLElement|null = document.querySelector('.btn-bio');

    btnPesquisarBio?.addEventListener('click', () => {
        executarAcaoTabela(Number(selectFiltroList[1].value), 'GETBIO');
    })

    const inputId:HTMLInputElement|null = document.querySelector('.input-id');
    const inputName:HTMLInputElement|null = document.querySelector('.input-name');
    const inputBio:HTMLInputElement|null = document.querySelector('.input-bio');
    const btnEditar:HTMLElement|null = document.querySelector('#btn-editar');
    const btnExcluir:HTMLElement|null = document.querySelector('#btn-excluir');
    const btnSalvar:HTMLElement|null = document.querySelector('#btn-salvar');

    const selectAcao = selectFiltroList[2] as HTMLSelectElement;

    btnEditar?.addEventListener('click', () => {
        inputId.value = String(listaPessoa[Number(selectAcao.value)-1].id);
        inputName.value = listaPessoa[Number(selectAcao.value)-1].name;
        inputBio.value = listaPessoa[Number(selectAcao.value)-1].bio;
    })

    btnExcluir?.addEventListener('click', () => {
        executarAcaoTabela(Number(selectAcao.value), 'DEL');
    })

    btnSalvar?.addEventListener('click', () => {
        executarAcaoTabela(Number(selectAcao.value), 'POST', inputName.value, inputBio.value);
    })

    function executarAcaoTabela(idx:number, acao:string='', name:string='', bio:string=''):string {
        let isIdxValido:boolean = false;
        let pessoaIndex = listaPessoa.findIndex(p => p.id == idx);
        listaPessoa.forEach((d) => {
            if(d.id == idx) {
                if(acao=='GETNAME') {
                    isIdxValido = true;
                    inputPesquisarName.value = d.name;
                    return '';
                } else if(acao=='GETBIO') {
                    isIdxValido = true;
                    inputPesquisarBio.value = d.bio;
                    return '';
                } else if(acao=='DEL') {
                    listaPessoa.splice(pessoaIndex, 1);
                    isIdxValido = true;
                    resetarTabela();
                    return '';
                } else if(acao=='POST' && bio!='' && name!='') {
                    d.bio = bio;
                    d.name = name;
                    isIdxValido = true;
                    resetarTabela();
                    return '';
                } else if(acao=='POST' && bio!='') {
                    d.bio = bio;
                    inputBio.value = d.bio;
                    isIdxValido = true;
                    resetarTabela();
                    return '';
                } else if(acao=='POST' && name!='') {
                    d.name = name;
                    inputName.value = d.name;
                    isIdxValido = true;
                    resetarTabela();
                    return '';
                } else {
                    return '';
                }
            } 
        })
        if(!isIdxValido) {
            alert('Id não encontrado!')
            return '';
        }
    }
})



