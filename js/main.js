// Constantes
const ITEM1 = "Paragüas";
const ITEM2 = "Botas";
const ITEM3 = "Pilots";
const ITEM4 = "Cobertores";
const ITEM5 = "Enteritos";

const PRECIO1 = 100.00;
const PRECIO2 = 900.00;
const PRECIO3 = 700.00;
const PRECIO4 = 150.00;
const PRECIO5 = 2000.00;

const DESCUENTO5 = "abc5";
const DESCUENTO10 = "def10";


// Funciones
function darNombreArticulo(numeroArticulo){
    switch(numeroArticulo){
        case 1:
            return ITEM1;
        case 2:
            return ITEM2;
        case 3:
            return ITEM3;
        case 4:
            return ITEM4;
        case 5:
            return ITEM5;
        default:
            return "Descatalogado";        
    }
}

function darPrecio(numeroArticulo){
    switch(numeroArticulo){
        case 1:
            return PRECIO1;
        case 2:
            return PRECIO2;
        case 3:
            return PRECIO3;
        case 4:
            return PRECIO4;
        case 5:
            return PRECIO5;
        default:
            return 0;        
    }
}

function ingresarItem(){
    let numeroArticulo = 0;
    let cantidad = 0;
    let precio = 0;
    let item = prompt("Agregar el N° de artículo elegido al carrito (N°1 a N°5)");
    if (item!=null){
        numeroArticulo = parseInt(item);
        if((numeroArticulo>0) && (numeroArticulo<6)){
            //Número de item correcto, pedir cantidad
            cantidad = parseInt(prompt("Agregar cantidad de "+darNombreArticulo(numeroArticulo)));
            if (cantidad>0){
                precio = darPrecio(numeroArticulo) * cantidad;
            }
        }
    }
    return precio;      
}

function cargarCarrito(){
    let subtotal = 0;   
    let continuar = false; 
    do {
        subtotal = subtotal + ingresarItem();
        continuar = confirm("Desea agragar más artículos");
    } while (continuar);
    return subtotal;
}

// Variables
let importeAPagar = 0;
let descuento = false;
let codigo = null;

importeAPagar = cargarCarrito();
alert("Importe a pagar "+importeAPagar+" UYU + IVA");
descuento = confirm("¿Desea ingresar un código de descuento?");
if (descuento){
    codigo = prompt("Ingrese código de descuento:");
    switch (codigo){
        case DESCUENTO5:
            importeAPagar = importeAPagar * 0.95;
        case DESCUENTO10:
            importeAPagar = importeAPagar * 0.90;
    }
}
alert("Importe a pagar IVA incluido"+importeAPagar*1.22+" UYU");



