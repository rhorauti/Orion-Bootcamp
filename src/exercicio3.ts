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

const selectFiltroList: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.select-filtro');

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
        optionName.innerText = String(j + 1);
        optionBio.value = String(j);
        optionBio.innerText = String(j + 1);
        optionAcao.value = String(j);
        optionAcao.innerText = String(j + 1);
        selectName.appendChild(optionName);
        selectBio.appendChild(optionBio);
        selectAcao.appendChild(optionAcao);
    }
    areaSuperiorName.appendChild(selectName);
    areaSuperiorBio.appendChild(selectBio);
    areaEsquerda.appendChild(selectAcao);
    
}
resetarTabela();

const inputPesquisarName:HTMLInputElement = document.querySelector('#input-pesquisar-name');
const btnPesquisarName:HTMLElement = document.querySelector('.btn-name');
const selectFiltroList1: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.select-filtro');

btnPesquisarName?.addEventListener('click', () => {
    // const retornoName = executarAcaoTabela(listaPessoa[Number(selectNameElement?.value)].id, 'GETNAME');
    executarAcaoTabela(Number(selectFiltroList1[0].value) + 1, 'GETNAME');
})

const inputPesquisarBio:HTMLInputElement|null = document.querySelector('#input-pesquisar-bio');
const btnPesquisarBio:HTMLElement|null = document.querySelector('.btn-bio');

btnPesquisarBio?.addEventListener('click', () => {
    executarAcaoTabela(Number(selectFiltroList1[1].value ) + 1, 'GETBIO');
})

const inputId:HTMLInputElement|null = document.querySelector('.input-id');
const inputName:HTMLInputElement|null = document.querySelector('.input-name');
const inputBio:HTMLInputElement|null = document.querySelector('.input-bio');
const btnEditar:HTMLElement|null = document.querySelector('#btn-editar');
const btnExcluir:HTMLElement|null = document.querySelector('#btn-excluir');
const selectAcao = selectFiltroList1[2] as HTMLSelectElement;

btnEditar?.addEventListener('click', () => {
    inputId.value = String(listaPessoa[Number(selectAcao.value)].id);
    inputName.value = listaPessoa[Number(selectAcao.value)].name;
    inputBio.value = listaPessoa[Number(selectAcao.value)].bio;
})

btnExcluir?.addEventListener('click', () => {
        console.log(selectAcao.value)
        executarAcaoTabela(Number(selectAcao.value), 'DEL');
})

function executarAcaoTabela(idx:number, acao:string='', name:string='', bio:string=''):string {
    let isIdxValido:boolean = false;
    listaPessoa.find((d) => {
        if(d.id == idx) {
            if(acao=='GETNAME') {
                isIdxValido = true;
                console.log(d.name)
                inputPesquisarName.value = d.name;
                return '';
            } else if(acao=='GETBIO') {
                isIdxValido = true;
                inputPesquisarBio.value = d.bio;
                return '';
            } else if(acao=='DEL') {
                console.log('entrando na função DEL...')
                listaPessoa.splice(d.id - 1, 1);
                isIdxValido = true;
                console.log(listaPessoa)
                return '';
            } else if(acao=='POST' && bio!='' && name!='') {
                d.bio = bio;
                d.name = name;
                inputId.value = d.bio;
                inputName.value = d.name;
                inputBio.value = d.bio;
                isIdxValido = true;
                return '';
            } else if(acao=='POST' && bio!='') {
                d.bio = bio;
                inputBio.value = d.bio;
                isIdxValido = true;
                return '';
            } else if(acao=='POST' && name!='') {
                d.name = name;
                inputName.value = d.name;
                isIdxValido = true;
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