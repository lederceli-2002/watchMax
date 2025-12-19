//carrusel
var imgs=new Array(4);//los arrays se enumeran desde el 0,1,2,3 = 4elemets
imgs[0]="/imagenes-index/banner1.jpg";
imgs[1]="../imagenes-index/banner.jpg";
imgs[2]="../imagenes/baner/baner3.jpg";
imgs[3]="../imagenes/baner/baner4.jpg";

var c=0; //variable de control para el indice
function carrusel()
{
    document.getElementById("ban").src=imgs[c];//imgs es el array y "c"el indice 
    c++;
    if(c>=imgs.length) c=0;//o igual y mayor que la cantidad de elemetos del array
    setTimeout("carrusel()",2000);
}
window.onload=carrusel;