
//Ocultar / Mostrar Menu
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.menu-icon');
const tache_button = document.querySelector('.tache-icon');

burgerButton.addEventListener('click', hideShow);
tache_button.addEventListener('click', hideShow);
 
 function hideShow(){
  if (menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
    burgerButton.style.transform = "scale(1)";
    tache_button.style.transform = "scale(0)";
  }else{
    menu.classList.add('is-active');
    burgerButton.style.transform = "scale(0)";
    tache_button.style.transform = "scale(1)";
  }
 }
 
//Variables para botones y secciones
let btn_logo = document.querySelector(".logo");
let btn_welcome = document.querySelector(".btn_welcome");
let btn_nosotros = document.querySelector(".btn_nosotros");
let btn_servicios = document.querySelector(".btn_servicios");
let btn_portafolio = document.querySelector(".btn_portafolio");
let btn_contacto = document.querySelector(".btn_contacto");
let btn_scroll_frase = document.querySelector(".scroll_frase");


///Botones bottom
let btn_welcome_bottom = document.querySelector(".btn_welcome_bottom");
let btn_nosotros_bottom = document.querySelector(".btn_nosotros_bottom");
let btn_servicios_bottom = document.querySelector(".btn_servicios_bottom");
let btn_portafolio_bottom = document.querySelector(".btn_portafolio_bottom");
let btn_contacto_bottom = document.querySelector(".btn_contacto_bottom");



//
/* let seccion_welcome = document.querySelector('.contener_welcome');
let seccion_nosotros = document.querySelector('.contener_nosotros');
let seccion_servicios = document.querySelector('.contener_servicios');
let seccion_portafolio = document.querySelector('.contener_portafolio');
let seccion_contacto = document.querySelector('.contener_contacto');

let posicion_welcome = seccion_nosotros.getBoundingClientRect();
let posicion_nosotros = seccion_nosotros.getBoundingClientRect();
let posicion_servicios = seccion_servicios.getBoundingClientRect();
let posicion_portafolio = seccion_portafolio.getBoundingClientRect();
let posicion_contacto = seccion_contacto.getBoundingClientRect(); */



//Efecto Smooth Botones Menu

function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  var startPosition = window.pageYOffset;
  var startTime = null;
  let tamanoDePantalla = window.innerHeight;
 
  var distance = targetPosition - startPosition;

  if (targetPosition != startPosition){
    function animation(currentTime){
      if(startTime === null) startTime = currentTime;
      
      var timeElapsed = currentTime - startTime;
      run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d){
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation)
  }
  
  

  console.log('target position es: ' + targetPosition)
  console.log('startPostion position es: ' + startPosition)
  console.log('distance es: ' + distance)
  console.log('Bottom position es: ' + target.getBoundingClientRect().bottom)
  console.log('hight del target es: ' + target.getBoundingClientRect().height)
  console.log('tamaño de pantalla es ' + tamanoDePantalla )
}

btn_welcome.addEventListener('click', function(){
  smoothScroll('.contener_welcome', 1000)
});
btn_nosotros.addEventListener('click', function(){
  smoothScroll('.contener_nosotros', 1000)
});
btn_servicios.addEventListener('click', function(){
  smoothScroll('.contener_servicios', 1000)
});
btn_portafolio.addEventListener('click', function(){
  smoothScroll('.contener_portafolio', 1000)
});
btn_contacto.addEventListener('click', function(){
  smoothScroll('.contener_contacto', 1000)
});

btn_scroll_frase.addEventListener('click', function(){
  smoothScroll('.contener_nosotros', 1000)
});
btn_logo.addEventListener('click', function(){
  smoothScroll('.contener_welcome', 1000)
});



//Botones bottom
btn_welcome_bottom.addEventListener('click', function(){
  smoothScroll('.contener_welcome', 1000)
});
btn_nosotros_bottom.addEventListener('click', function(){
  smoothScroll('.contener_nosotros', 1000)
});
btn_servicios_bottom.addEventListener('click', function(){
  smoothScroll('.contener_servicios', 1000)
});
btn_portafolio_bottom.addEventListener('click', function(){
  smoothScroll('.contener_portafolio', 1000)
});
btn_contacto_bottom.addEventListener('click', function(){
  smoothScroll('.contener_contacto', 1000)
});



//Scrip btn_up

let btn_up = document.querySelector('.btn_up');
btn_up.addEventListener('click', scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
    btn_up.style.transform = "scale(0)";
  }
}

window.onscroll = function(){
var scroll = document.documentElement.scrollTop;
  if (scroll > 100){
    btn_up.style.transform = "scale(1)";
  }else if(scroll < 100){
    btn_up.style.transform = "scale(0)";
  }
}

