//carrusel
let imgs=[
           "../imagenes-niños/banner-niños.jpg",
            "../imagenes-niños/banner-niños1.jpg",
            "../imagenes-niños/banner-niños2.jpg",
            "../imagenes-niños/banner-niños3.jpg",
            "../imagenes-niños/banner-niños4.jpg"  
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
//----------------------------------------------------------------------------------------------------------------------

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

//---------funcion ocultar las imagenes-------------------------------------------------------------------------------------------------------------
function ocultar(n) {
    n.style.opacity = "0";
}

function ver(n) {
    n.style.opacity = "1";  
}

let img = document.getElementsByClassName("img1");

for (let i = 0; i < img.length; i++) { 
    img[i].setAttribute("onmouseover","ocultar(this)");
    img[i].setAttribute("onmouseout","ver(this)")
}

