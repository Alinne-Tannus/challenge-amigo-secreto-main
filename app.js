let listaAmigos = [];

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;     
} 
function adicionarAmigo(){
    console.log(listaAmigos.length);
    if(amigo.value == ''){
        exibirTexto('ul', 'Favor digitar um nome!!');
        return;
    } else{
        const amigos = listaAmigos.push(document.getElementById('amigo').value);
        exibirTexto('ul', listaAmigos.join("<br>"));
    }
    limparCampo();
}

function mostrarLista(){
    exibirTexto('ul', 'olá mundo!');
}

function sortearAmigo(){

}

function limparCampo(){
    amigos = document.getElementById('amigo');
    amigos.value = '';
}