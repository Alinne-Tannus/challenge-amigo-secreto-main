let listaAmigos = [];

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;     
} 
function mostrarResultado(cor, texto){
    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = texto;

    if(amigo.value == ''){
        mensagem.style.color = cor;
    }
}

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value.trim(); 
    if (amigo === '') {
        mostrarResultado('red', 'Favor digitar um nome!!');
        return;
    }
    if (listaAmigos.includes(amigo)) {
        mostrarResultado('red', 'Esse nome já está na lista');
        limparCampo();
        return;
    }

    listaAmigos.push(amigo);
    atualizarLista();
    limparCampo();
}
function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i]; 

        let li = document.createElement('li');
        li.textContent = amigo; 
        listaHTML.appendChild(li);
    }
}


function sortearAmigo(){
    if(listaHTML == 0){
        exibirResultado('red', 'Não existe nenhum nome na lista');
    }
}

function limparCampo(){
    document.getElementById('amigo').value = '';
}