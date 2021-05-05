


function ejecutaEventoOnclick(){ 
var monto = parseInt(prompt('Ingresa el Monto a prestar'));
var taza =  parseFloat(prompt('Ingresa la taza de interes'));
var meses =  parseFloat(prompt('Ingresa Meses'));
    

var totalinteres = (monto * taza * meses)/ 100;
var total = totalinteres + monto;
var tsmes = totalinteres / meses;

alert('Los interes a pagar son de: ' + totalinteres);
alert('Al mes tu interes es de: ' + tsmes);
alert('Y su Total a pagar es: ' + total + ' ¡Gracias!');

} 