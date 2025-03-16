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
    return listaAmigos;
}

function vaciarCuadro(){
    document.querySelector('#amigo').value = '';
}


/*function mostrarAmigos(){
   let lista = document.getElementsByClassName('.name-list')[0];
   lista.innerHTML = '';
   listaAmigos.forEach(amigo, i) => {
    let li = document.createElement('li');
    li.textContent = amigo;
   }
   /*let li = document.createElement("li");
   lista
        for (let i = 0; i < listaAmigos.length; i++){
            lista =  + li.appendChild(li);
            document.getElementsByClassName('.name-list').appendChild(li);
            li.innerHTML = listaAmigos[i];
        //lista.innerHTML = '<li>' + listaAmigos[i]+ '</li>';
        console.log('hej');
    }
    */


