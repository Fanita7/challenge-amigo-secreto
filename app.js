// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo == '') {
        alert('ingresa un nombre válido');
    }else{
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    console.log (`nuevo amigo: ${amigo}`);
    console.log (`amigos en lista: ${listaAmigos}`);
    }  
    vaciarCuadro();
    mostrarAmigos();
}

function vaciarCuadro(){
    document.querySelector('#amigo').value = '';
}


function mostrarAmigos(){
   let lista = document.getElementsByClassName('name-list')[0];
   lista.innerHTML = '';
   listaAmigos.forEach((amigo) => {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
   })
}



