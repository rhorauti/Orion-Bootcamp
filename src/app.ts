// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada. Teste1
const vogais: Array<string> = ['a', 'e', 'i', 'o', 'u'];

const retornoQtdVogais = function retornarQtdVogais(palavra: string) : number | string {
    let qtdVogais: number = 0
    const arrayPalavra: Array<string> = palavra?.split('');
    if(arrayPalavra.length == 0) {
        return 'Nenhuma palavra foi digitada!';
    } else {
        vogais.forEach((v: string) => {
            arrayPalavra.forEach((p: string) => {
                if(p.normalize("NFD").replace(/\p{Diacritic}/gu, "") == v) qtdVogais++
            }) 
        })
        return qtdVogais
    }
}

// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
retornoQtdVogais('bootcamp');
//b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

function mostrarQtdVogais() : void {
    let qtdVogaisPalavra: HTMLElement = document.getElementById('qtd-vogais-palavra');
    const arrayPalavra: Array<string> = document.getElementById('input-palavra')?.value.split('');
    if(arrayPalavra.length == 0 || arrayPalavra == null || arrayPalavra == undefined) {
        alert('Nenhuma palavra foi digitada!');
        qtdVogaisPalavra.innerHTML = '';
    } else {
        qtdVogaisPalavra.innerHTML = `A quantidade de vogais da plavara digitada é <b>${retornoQtdVogais}</b>`; 
    }
}

function limpar() : void {
    document.getElementById('input-palavra')?.value = '';
    document.getElementById('qtd-vogais-palavra')?.innerHTML = '';

}

