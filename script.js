const form = document.getElementById('form-atividade');
const formContato = document.getElementById('form-contato');
let linhas = '';
let linhasContato = '';
const imgAprovado = '<img src = "./images/images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src = "./images/images/reprovado.png" alt="Emoji Decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado"> Aprovado </span>';
const spanReprovado = '<span class = "resultado reprovado"> Reprovado </span>';



const notaMinima = parseFloat(prompt("Digite a nota minima:"));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value} </td>`;
        linha += `<td>${inputNotaAtividade.value} </td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.getElementById('tbody-notas');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}

formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    adicionaLinhaContato();
});

function adicionaLinhaContato(){

    const nomeCompleto = document.getElementById('nome-contato');
    let inputTelefone = document.getElementById('telefone-contato');
    let valor = inputTelefone.value.replace(/\D/g, '');
    let formatado = '';


    if(valor.length === 11){
        formatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7);
        inputTelefone.value = formatado;


        let linhaContato = '<tr>';
        linhaContato += `<td>${nomeCompleto.value}</td>`;
        linhaContato += `<td>${inputTelefone.value}</td>`;
        linhaContato += '</tr>';
        
        linhasContato += linhaContato;

        const tabelaContato = document.getElementById('tbody-contato');
        tabelaContato.innerHTML = linhasContato;

        nomeCompleto.value = '';
        inputTelefone.value = '';
    }else if(valor.length === 10){
        formatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 6) + '-' + valor.substring(6);
        inputTelefone.value = formatado;

        let linhaContato = '<tr>';
        linhaContato += `<td>${nomeCompleto.value}</td>`;
        linhaContato += `<td>${inputTelefone.value}</td>`;
        linhaContato += '</tr>';
        
        linhasContato += linhaContato;

        const tabelaContato = document.getElementById('tbody-contato');
        tabelaContato.innerHTML = linhasContato;

        nomeCompleto.value = '';
        inputTelefone.value = '';
    }else{
        alert("Numero de telefone invalido");
    }

    

}