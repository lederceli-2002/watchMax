//carrusel
let imgs=[
  "imagenes-index/banner.jpg",
  "imagenes-index/banner1.jpg",
  "imagenes-index/banner2.jpg",
  "imagenes-index/banner3.jpg"
]

let c=0;

function carrusel()
{
 document.getElementById("ban").src=imgs[c];
 c++;
 if (c >= imgs.length){
    c=0;
 }  
}
setInterval(carrusel,2000);


//Funcion de rotacion de las redes 
function girar(e){
e.style.transform="rotateY(360deg)";
e.style.transition="all 3s";
}
function volver(e){
e.style.transform="rotateY(0deg)";
e.style.transition="all 3s";
}
for(var i=0;i<document.getElementsByClassName("redes").length;i++){
    document.getElementsByClassName("redes")[i].setAttribute("onmouseover","girar(this)");
    document.getElementsByClassName("redes")[i].setAttribute("onmouseout","volver(this)");
}






