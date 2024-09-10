const form = document.getElementById("formulario");
const usuarios = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-cliente');
    const inputTelefone = document.getElementById('telefone-cliente');

    if (usuarios.includes(inputNome.value)) {
        alert(`Usuário ${inputNome.value} já foi inserido.`);
    } else {
        usuarios.push(inputNome.value);
        telefones.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
