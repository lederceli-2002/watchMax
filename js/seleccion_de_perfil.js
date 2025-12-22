function reloj()
{
  let hora= new Date();
  let a=hora.getHours();
  let b=hora.getMinutes();
  let c=hora.getSeconds();
  if(b<10) b="0"+b;
  if(c<10) c="0"+c;// si el valor de c es menor de 10 colocara un "0" para darle mejor estetica

  if(a<=12) document.getElementById("ph").innerHTML="Hora :"+a+":"+b+":"+c+" AM";
  if(a>12) document.getElementById("ph").innerHTML="Hora :"+a+":"+b+":"+c+" PM";
  setTimeout("reloj()",1000);
}

document.body.setAttribute("onload","reloj()");