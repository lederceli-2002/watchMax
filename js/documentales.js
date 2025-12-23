let imgs=[
            "../imagenes-documentales/banner1.jpg",
            "../imagenes-documentales/banner2.jpg",
            "../imagenes-documentales/banner3.jpg",
            "../imagenes-documentales/banner4.jpg",
            "../imagenes-documentales/banner5.jpg"  
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


