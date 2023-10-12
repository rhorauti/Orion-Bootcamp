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

const selectFiltroList: null|NodeListOf<Element> = document.querySelectorAll('.select-filtro');

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
    for(let i=0; i<selectFiltroList.length; i++) {
        if (selectFiltroList) {
            const parentElement = selectFiltroList[i].parentElement;
                if (parentElement) {
                    parentElement.removeChild(selectFiltroList[i]);
                }
        }
    }

    const areaSuperiorList:NodeListOf<Element> = document.querySelectorAll('.area-filtro-superior');
    const areaSuperiorName:HTMLElement = areaSuperiorList[0] as HTMLElement;
    const areaSuperiorBio:HTMLElement = areaSuperiorList[1] as HTMLElement;
    const areaEsquerda = document.querySelector('#area-filtro-alteracao');
    
    const selectName:HTMLSelectElement = document.createElement('select');
    const selectBio:HTMLSelectElement = document.createElement('select');
    const selectAcao:HTMLSelectElement = document.createElement('select');
    selectName.classList.add('select-filtro');
    selectBio.classList.add('select-filtro');
    selectAcao.classList.add('select-filtro');
    for(let j=0; j<listaPessoa.length; j++) {
        const optionName:HTMLOptionElement = document.createElement('option');
        const optionBio:HTMLOptionElement = document.createElement('option');
        const optionAcao:HTMLOptionElement = document.createElement('option');
        optionName.value = String(j);
        optionName.innerHTML = String(j + 1);
        optionBio.value = String(j);
        optionBio.innerHTML = String(j + 1);
        optionAcao.value = String(j);
        optionAcao.innerHTML = String(j + 1);
        selectName.appendChild(optionName);
        selectBio.appendChild(optionBio);
        selectAcao.appendChild(optionAcao);
    }
    areaSuperiorName.appendChild(selectName);
    areaSuperiorBio.appendChild(selectBio);
    areaEsquerda.appendChild(selectAcao);
    
}
resetarTabela()

const inputPesquisarName:HTMLInputElement|null = document.querySelector('#input-pesquisar-name');
const btnPesquisarName:HTMLElement|null = document.querySelector('.btn-name');

btnPesquisarName?.addEventListener('click', () => {
    const selectNameElement = selectFiltroList[0] as HTMLSelectElement;
    console.log(selectNameElement)
    if(selectNameElement) {
        const retornoName = executarAcaoTabela(listaPessoa[Number(selectNameElement?.value)].id, 'GETNAME');
        inputPesquisarName.value = retornoName;
    }
})

const inputPesquisarBio:HTMLInputElement|null = document.querySelector('#input-pesquisar-bio');
const btnPesquisarBio:HTMLElement|null = document.querySelector('.btn-bio');

btnPesquisarBio?.addEventListener('click', () => {
    const selectBioElement = selectFiltroList[1] as HTMLSelectElement;
    if(selectBioElement) {
        const retornoBio = executarAcaoTabela(listaPessoa[Number(selectBioElement?.value)].id, 'GETBIO');
        inputPesquisarBio.value = retornoBio;
    }
})

const inputId:HTMLInputElement|null = document.querySelector('.input-id');
const inputName:HTMLInputElement|null = document.querySelector('.input-name');
const inputBio:HTMLInputElement|null = document.querySelector('.input-bio');
const btnEditar:HTMLElement|null = document.querySelector('#btn-editar');
const btnExcluir:HTMLElement|null = document.querySelector('#btn-excluir');
const selectAcao = selectFiltroList[2] as HTMLSelectElement;

btnEditar?.addEventListener('click', () => {
    if(selectAcao) {
        inputId.value = String(listaPessoa[Number(selectAcao.value)].id);
        inputName.value = listaPessoa[Number(selectAcao?.value)].name;
        inputBio.value = listaPessoa[Number(selectAcao?.value)].bio;
    }
})

btnExcluir?.addEventListener('click', () => {
    if(selectAcao) {
        executarAcaoTabela(listaPessoa[Number(selectAcao?.value)].id, 'DEL');
    }
})

function executarAcaoTabela(idx:number, acao:string='', name:string='', bio:string=''):string|undefined {
    let isIdxValido:boolean = false;
    for(let i=0; i<listaPessoa.length; i++) {
        if(listaPessoa[i].id == idx) {
            if(acao=='GETNAME') {
                isIdxValido = true;
                console.log('função name')
                return listaPessoa[i].name;
            } else if(acao=='GETBIO') {
                isIdxValido = true;
                console.log('função bio')
                return listaPessoa[i].bio;
            } else if(acao=='DEL') {
                listaPessoa.splice(listaPessoa[i].id - 1, 1);
                isIdxValido = true;
                console.log('função excluir')
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