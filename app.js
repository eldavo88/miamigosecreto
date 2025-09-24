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
}