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

function executarAcaoTabela(idx:number, acao:string='', name:string='', bio:string=''):string|void {
    let isIdxValido:boolean = false;
    lista.find((d) => {
        if(d.id == idx) {
            if(acao=='GETNAME') {
                isIdxValido = true;
                return d.name;
            } else if(acao=='GETBIO') {
                isIdxValido = true;
                return d.bio;
            } else if(acao=='DEL') {
                lista.splice(d.id - 1, 1);
                isIdxValido = true;
            } else if(acao=='POST' && bio!='' && name!='') {
                d.bio = bio;
                d.name = name;
                isIdxValido = true;
            } else if(acao=='POST' && bio!='') {
                d.bio = bio;
                isIdxValido = true;
            } else if(acao=='POST' && name!='') {
                d.name = name;
                isIdxValido = true;
            } else {
                return;
            }
        } 
    })
    if(!isIdxValido) {
        console.log('Id não encontrado!')
    }
}
executarAcaoTabela(3, 'POST', 'RAFAEL', 'HORAUTI');

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// funções descritas acima estão no paradigma funcional.




