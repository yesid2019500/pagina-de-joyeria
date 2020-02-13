
// ESTO ES PARA QUE APAREZCAN LAS HOJAS

// con el scollheigh, le estamos indicando que queremos aceder a toda la altura de la pagina, desde arriba hasta abajo
// LE ESTAMOS DICIENDO QUE QUEREMOS RESWTARLE EL TAMÑANO A LA PAGINA
// const altura = document.body.scrollHeight - Window.innerHeight;
// const fondo = document.getElementById('fondo');


// para que se muiestre cuando el usuario le de escrola

// esto es para que se ejecute cada vez que el usuario haga scroll

// window.onscroll = () =>{
//     // AUI LE ESTAMOS DICIENDO QUE LO DIVIDA ENTRE LA LATURA y multiplicar al final por 900
//     const anchoFondo = (window.pageYOffset / altura) * 900;
//     fondo.style.width = anchoFondo +'%';
// }

const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}
