var texto = document.getElementById("texto_lineas1");
var texto2 = document.getElementById("texto_lineas2");
var texto3 = document.getElementById("texto_lineas3");
var texto4 = document.getElementById("texto_lineas4");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
boton.addEventListener("click", dibujoPorClick2);
boton.addEventListener("click", dibujoPorClick3);
boton.addEventListener("click", dibujoPorClick4);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.fillStyle = "black";
lienzo.fillRect(0, 0, d.width, d.height);
var boton_clear = document.getElementById("boton_limpiar");
boton_clear.addEventListener("click", clearLienzo);
var ancho = d.width 

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{   
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick()
{

  var lineas = parseInt(texto.value);
  var count_l = 0;
  var a, b, c, d;
  var colorcito = "purple";
  var espacio = ancho / lineas;

  for(count_l=0; count_l < lineas; count_l++)
  {
    a = count_l * espacio;
    b= (count_l + 1) * espacio;  
    c = 300 - a;
    d = 300 - a;
    dibujarLinea(colorcito, 0, a, b, 300);
    console.log("linea " + 1);
  }
}

function dibujoPorClick2()

{
  var lineas = parseInt(texto2.value);
  var count_l = 0;
  var a, b, c, d;
  var colorcito_2 = "green";
  var espacio = ancho / lineas;

  for(count_l=0; count_l < lineas; count_l++)
  {
    a = count_l * espacio;
    b= (count_l + 1) * espacio;  
    c = 300 - a;
    d = 300 - a;
    dibujarLinea(colorcito_2, a, 300, 300, c);    
  }
}

function dibujoPorClick3()

{
  var lineas = parseInt(texto3.value);
  var count_l = 0;
  var a, b, c, d;
  var colorcito = "purple";
  var espacio = ancho / lineas;

  for(count_l=0; count_l < lineas; count_l++)
  {
    a = count_l * espacio;
    b= (count_l + 1) * espacio;  
    c = 300 - a;
    d = 300 - a;
   
    dibujarLinea(colorcito, 300, c, d, 0);
    
  }
}

function dibujoPorClick4()

{
  var lineas = parseInt(texto4.value);
  var count_l = 0;
  var a, b, c, d;
  var colorcito_2 = "green";
  var espacio = ancho / lineas;

  for(count_l=0; count_l < lineas; count_l++)
  {
    a = count_l * espacio;
    b= (count_l + 1) * espacio;  
    c = 300 - a;
    d = 300 - a;
    dibujarLinea(colorcito_2, c, 0, 0, b);
    
  }
}

dibujarLinea("fuchsia", 1, 1, 1, 299);
dibujarLinea("fuchsia", 1, 299, 299, 299);
dibujarLinea("fuchsia", 299, 1, 1, 1);
dibujarLinea("fuchsia", 299, 1, 299, 299);
dibujarLinea(colorcito_2, 150, 0, 150, 300);
dibujarLinea(colorcito_2, 0, 150, 300, 150);



function clearLienzo() 

{   
    var d = document.getElementById("dibujito");
    var lienzo = d.getContext("2d");
    lienzo.clearRect(0, 0, d.width, d.height);
    lienzo.fillStyle = "black";
    lienzo.fillRect(0, 0, d.width, d.height);
}
    
