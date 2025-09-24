// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let espacioAmigo = document.querySelector(".input-name");
    let guardaAmigo = espacioAmigo.value.trim();

    if (guardaAmigo === ''){
        alert('El campo está vacío, por favor, ingresa un nombre válido');
        return;
    }

    if(amigos.includes(guardaAmigo)){
        alert('El nombre que has proporcionado ya ha sido agregado');
        return;
    }

    amigos.push(guardaAmigo);
    espacioAmigo.value ='';
    actualizarLista();
}

function actualizarLista(){
    let listadeAmigos = document.getElementById('listaAmigos');
    listadeAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
      let amigo = amigos[i];
      let itemLista = document.createElement("li");
      itemLista.textContent = amigo;
      listadeAmigos.appendChild(itemLista);
    }
}
function sortearAmigos(){
    if (amigos.length < 2) {
        alert('Debe haber al menos dos nombres para poder realizar el sorteo.');
        return;}
    
/*De acuerdo a lo que estuve investigando, utilizar el algorimo llamado
Fisher-Yates es la manera más eficiente de hacer un sorteo*/
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let sorteado = amigos[(i + 1) % amigos.length];
        resultadoElemento.innerHTML += `<li>${amigos[i]} ➡️ ${sorteado}</li>`;
    }
}