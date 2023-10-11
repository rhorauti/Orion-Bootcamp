// 2 - Dado o array:

interface Pessoa {
    id: number,
    name: string,
    bio: string
}

let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado

function alterarBioOuName(idx:number, acao:string='', name:string='', bio:string=''):string|undefined {
    let isIdxValido:boolean = false;
    for(let i=0; i<lista.length; i++) {
        if(lista[i].id == idx) {
            if(acao=='GETNAME') {
                isIdxValido = true;
                return lista[i].name;
            } else if(acao=='GETBIO') {
                isIdxValido = true;
                return lista[i].bio;
            } else if(acao=='DEL') {
                lista.splice(lista[i].id - 1, 1);
                isIdxValido = true;
            } else if(acao=='POST' && bio!='' && name!='') {
                lista[i].bio = bio;
                lista[i].name = name;
                isIdxValido = true;
            } else if(acao=='POST' && bio!='') {
                lista[i].bio = bio;
                isIdxValido = true;
            } else if(acao=='POST' && name!='') {
                lista[i].name = name;
                isIdxValido = true;
            } else {
                return;
            }
        } 
    }
    if(!isIdxValido) {
        console.log('Id não encontrado!')
    }
}
alterarBioOuName(6, 'POST','', 'Rafael');

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// funções descritas acima estão no paradigma funcional.




