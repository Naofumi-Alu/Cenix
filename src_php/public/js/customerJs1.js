var actual = 0;
function puntos(n) {
  var ptn = document.getElementsByClassName("punto");
  for (i = 0; i < ptn.length; i++) {
    if (ptn[i].className.includes("activo")) {
      ptn[i].className = ptn[i].className.replace("activo", "");
      break;
    }
  }
  ptn[n].className += " activo";
}
function mostrar(n) {
  var imagenes = document.getElementsByClassName("imagen");
  for (i = 0; i < imagenes.length; i++) {
    if (imagenes[i].className.includes("actual")) {
      imagenes[i].className = imagenes[i].className.replace("actual", "");
      break;
    }
  }
  actual = n;
  imagenes[n].className += " actual";
  puntos(n);
}

function siguiente() {
  actual++;
  if (actual > 3) {
    actual = 0;
  }
  mostrar(actual);
}
function anterior() {
  actual--;
  if (actual < 0) {
    actual = 3;
  }
  mostrar(actual);
}

var velocidad = 10000;
var play = setInterval("siguiente()", velocidad);

function playpause() {
  var boton = document.getElementById("btn");
  if (play == null) {
    boton.src = "http://www.reciclay.com.ve/gio/pause.png";
    play = setInterval("siguiente()", velocidad);
  } else {
    clearInterval(play);
    play = null;
    boton.src = "http://www.reciclay.com.ve/gio/play.png";
  }
}

/*
start();
mostrar();
window.addEventListener('resize', start);

function start(){
    //get size widht of nodo portafolioSliders
  var sizePortafolio = document.getElementById('portafolioSliders'); 
  sizePortafolio=document.documentElement.clientWidth;
// =============================================//


//get element section Portafolio Parent
var portafolioSection=document.getElementById('portafolioSliders');

// create element child that possed the content of section portafolio
  var contentPortafolio_Lg=document.createElement("div");
  contentPortafolio_Lg.innerHTML = 
    `
        <!-- content portafolio -->
        

            <div class="imagenPortafolio1">
                <img src="" alt="">
            </div>
            <div class="textPortafolio1">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio2">
                <img src="" alt="">
            </div>
            <div class="textPortafolio2">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio3">
                <img src="" alt="">
            </div>
            <div class="textPortafolio3">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio4">
                <img src="" alt="">
            </div>
            <div class="textPortafolio4">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio5">
                <img src="" alt="">
            </div>
            <div class="textPortafolio5">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio6">
                <img src="" alt="">
            </div>
            <div class="textPortafolio6">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio7">
                <img src="" alt="">
            </div>
            <div class="textPortafolio7">
                <p class="loremipsum20"></p>
            </div>    

    `;
if(sizePortafolio>=750){  
// insert content in nodo html      
   console.log("insertando html");
  // console.log();
  portafolioSection.appendChild(contentPortafolio_Lg);


}else{
      console.log("tamaño menor o igual a 750 no se puede mostrar");
      console.log(sizePortafolio);
  }
}


/*
 function mostrar(){
  if(sizePortafolio>=870){      
    document.getElementById('containter-Portafolio-JavasCript').innerHTML = 
    `
    <!-- content portafolio -->
        

            <div class="imagenPortafolio1">
                <img src="" alt="">
            </div>
            <div class="textPortafolio1">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio2">
                <img src="" alt="">
            </div>
            <div class="textPortafolio2">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio3">
                <img src="" alt="">
            </div>
            <div class="textPortafolio3">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio4">
                <img src="" alt="">
            </div>
            <div class="textPortafolio4">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio5">
                <img src="" alt="">
            </div>
            <div class="textPortafolio5">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio6">
                <img src="" alt="">
            </div>
            <div class="textPortafolio6">
                <p class="loremipsum20"></p>
            </div>

            <div class="imagenPortafolio7">
                <img src="" alt="">
            </div>
            <div class="textPortafolio7">
                <p class="loremipsum20"></p>
            </div>    

    `;
  }else{
      console.log("tamaño menor o igual a 870 no se puede mostrar")
  }
}

function ocultar(){
    if(sizePortafolio>=870){  
         document.getElementById('#containter-Portafolio-JavasCript').innerHTML = 
    `
    <!-- content portafolio -->
	 <div class="imagenPortafolio1">
            <img src="" alt="">
        </div>
        <div class="textPortafolio1">
            <p class="loremipsum20"></p>
        </div>

        <div class="imagenPortafolio2">
               <img src="" alt="">
        </div>
        <div class="textPortafolio2">
            <p class="loremipsum20"></p>
        </div>

        <div class="imagenPortafolio3">
               <img src="" alt="">
        </div>
        <div class="textPortafolio3">
            <p class="loremipsum20"></p>
        </div>

        <div class="imagenPortafolio4">
               <img src="" alt="">
        </div>
        <div class="textPortafolio4">
            <p class="loremipsum20"></p>
        </div>

        <div class="imagenPortafolio5">
               <img src="" alt="">
        </div>
        <div class="textPortafolio5">
            <p class="loremipsum20"></p>
        </div>

        <div class="imagenPortafolio6">
               <img src="" alt="">
        </div>
        <div class="textPortafolio6">
            <p class="loremipsum20"></p>
        </div>

        <div class="imagenPortafolio7">
               <img src="" alt="">
        </div>
        <div class="textPortafolio7">
            <p class="loremipsum20"></p>
        </div>  
    `;

    }else{
      console.log("tamaño menor o igual a 870, no se puede ocultar")
  }
   
}
*/







/*javascript:mostrar()"*/ 