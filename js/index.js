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