// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada. Teste1
const vogais: Array<string> = ['a', 'e', 'i', 'o', 'u'];

function retornarQtdVogais(palavra: string) {
    let qtdVogais = 0
    const arrayPalavra = palavra.split('');
    console.log(arrayPalavra)
    if(arrayPalavra.length == 0) {
        return console.log('Nenhuma palavra foi digitada!');
    } else {
        vogais.forEach((v: string) => {
            arrayPalavra.forEach((p: string) => {
                if(p.normalize("NFD").replace(/\p{Diacritic}/gu, "") == v) qtdVogais++
            }) 
        })
        return console.log(qtdVogais)
    }
}

// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
retornarQtdVogais('bootcamp');
//b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

function mostrarQtdVogais() {
    let qtdVogais = 0
    let qtdVogaisPalavra: HTMLElement = document.getElementById('qtd-vogais-palavra');
    const arrayPalavra: Array<string> = document.getElementById('input-palavra')?.value.split('');
    if(arrayPalavra.length == 0 || arrayPalavra == null || arrayPalavra == undefined) {
        alert('Nenhuma palavra foi digitada!');
        qtdVogaisPalavra.innerHTML = '';
    } else {
        vogais.forEach((vogal: string) => {
            arrayPalavra.forEach((letra: string) => {
                if(letra.normalize("NFD").replace(/\p{Diacritic}/gu, "") == vogal) qtdVogais++;
            }) 
        })
        qtdVogaisPalavra.innerHTML = `A quantidade de vogais da plavara digitada é <b>${qtdVogais}</b>`; 
    }
}

function limpar() {
    document.getElementById('input-palavra')?.value = '';
    document.getElementById('qtd-vogais-palavra')?.innerHTML = '';

}

