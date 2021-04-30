function exibirDados(event) {
    event.preventDefault();


    let pegaAutor = document.getElementById('author').value;
    let pegaTitulo = document.querySelector('#titulo').value;
    let pegaISBN = document.querySelector('#isbn').value;
    let pegaDataPublicacao = document.getElementById('dataPublicacao').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    if (pegaAutor === "") {
        alert('Digite o nome do Autor.')
    } else if (pegaTitulo === "") {
        alert('Digite o Título.')
    } else if (pegaISBN === "") {
        alert('Digite o ISBN.')
    } else if (pegaDataPublicacao === "") {
        alert('Digite a Data de Publicação.')
    } else {


        document.getElementById('resposta').innerHTML += `
    <tr >
        <td> ${pegaAutor} </td>
        <td> ${pegaTitulo}</td>
        <td> ${pegaDataPublicacao} </td>
        <td>${pegaISBN}</td>
        <td> ${dataInsercao}</td>
        <td> ${horarioInsercao}</td>
        <td> <button class="delete">Deletar</button></td>
    </tr>
    `


        limparDados();
    }
}


function limparDados() {
    document.getElementById('author').value = "";
    document.querySelector('#titulo').value = "";
    document.querySelector('#isbn').value = "";
    document.getElementById('dataPublicacao').value = 
    "";

}

document.getElementById('resposta').addEventListener('click', function (event) {
    if (event.target.className === "delete") {
       let botao = event.target.parentElement;
       botao.parentElement.remove();

    }
})

