// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigoInput = document.getElementById("amigo");
  let nomeAmigo = amigoInput.value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  amigos.push(nomeAmigo);
  amigoInput.value = "";
  actualizarLista();
}

function actualizarLista() {
  let listaElemento = document.getElementById("listaAmigos");
  listaElemento.innerHTML = ""; // Limpia la lista antes de actualizar

  if (amigos.length > 0) {
    amigos.forEach((amigo) => {
      let itemLista = document.createElement("li");
      itemLista.textContent = amigo;
      listaElemento.appendChild(itemLista);
    });
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para el sorteo.");
    return;
  }

  // Algoritmo de Fisher-Yates para barajar el array
  for (let i = amigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
  }

  let resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = ""; // Limpia el resultado anterior

  for (let i = 0; i < amigos.length; i++) {
    let sorteado = amigos[(i + 1) % amigos.length];
    resultadoElemento.innerHTML += `<li>${amigos[i]} ➡️ ${sorteado}</li>`;
  }
}