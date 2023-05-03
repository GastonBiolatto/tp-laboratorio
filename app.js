//btn follow
const followButton = document.getElementById('btnFollow');
const like = document.getElementById('btnlike');
const cantLike = document.getElementById('spanLike')
const cambiodeBTN = document.getElementById('btnHeart')
const usuario = document.getElementById('user')
const listaComentarios = document.getElementById('lista-comentarios');
const comentarioInput = document.getElementById('inp');
const agregarBoton = document.getElementById('btnComentar');
const error = document.querySelector('.error')

let usuarioIngresado = "";
let seguido = false;





followButton.addEventListener('click', function () {
  if (!seguido) {
    console.log('Siguiendo');
    followButton.textContent = 'Dejar de seguir';
    seguido = true;
  } else {
    console.log('Dejar de seguir');
    followButton.textContent = 'Seguir';
    seguido = false;
  }
});

// btn like

let btnlikes = false;
let contadorLike = 0;

like.addEventListener('click', function () {
  if (!btnlikes) {
    console.log('+1 like');
    contadorLike++;
    cantLike.textContent = contadorLike;
    btnlikes = true;
    cambiodeBTN.classList.replace('bi-heart', 'bi-heart-fill');

  } else {

    console.log('-1 like');
    contadorLike--;
    cantLike.textContent = contadorLike;
    btnlikes = false;
    cambiodeBTN.classList.replace('bi-heart-fill', 'bi-heart');
  }
});

// usuario
usuario.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    usuarioIngresado = user.value;
    console.log("Valor ingresado:", usuarioIngresado);
    event.preventDefault();
    event.target.value = "";
  }
});

btnComentar.addEventListener('click', function () {
  const comentario = comentarioInput.value;
  if (usuarioIngresado == "") {
    error.placeholder = ('Ingrese un usuario para comentar')
    error.classList.add('placeholder-red');
    console.log('ingrese usuario')
  }
  else if (comentario == '') {
    error.placeholder = ('Ingrese un comentario');
    error.classList.add('placeholder-red');
    console.log('ingrese comentario')
  } else {
    const nombre = usuarioIngresado;
    const nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = '<strong>' + nombre + ':</strong> ' + comentario;
    nuevoLi.classList.add('negro');
    listaComentarios.appendChild(nuevoLi);
    comentario.value = '';
  }
});

function tiempoTranscurrido(fechaInicial) {

  const fechaActual = new Date();

  const diferencia = fechaActual.getTime() - fechaInicial.getTime();

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  return `${dias} días, ${horas} horas y ${minutos} minutos `;
}

const tiempoTranscurridoSpan = document.getElementById('tiempo');

const fechaInicial = new Date('2023-05-03');

tiempoTranscurridoSpan.textContent = tiempoTranscurrido(fechaInicial);
