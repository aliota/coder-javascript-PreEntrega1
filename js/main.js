// Constantes
const ITEM1 = "Paragüas";
const ITEM2 = "Botas";
const ITEM3 = "Pilots";
const ITEM4 = "Cobertores";
const ITEM5 = "Enteritos";

const PRECIO1 = 100.00;
const PRECIO2 = 200.00;
const PRECIO3 = 300.00;
const PRECIO4 = 400.00;
const PRECIO5 = 500.00;

const DESCUENTO5 = "abc5";
const DESCUENTO10 = "def10";

const IVA = 0.22;

const mensajeCarritoOSalir = "Elija Aceptar para volver a cargar el carrito o Cancelar para salir del simulador";

// Variables
let importeAPagar = 0;
let pagar = false;
let comprar = true;
let item1Pedido = 0;
let item2Pedido = 0;
let item3Pedido = 0;
let item4Pedido = 0;
let item5Pedido = 0;
let verCarrito = true;
let continuar = true;


// Funciones
function vaciarCarrito(){
    importeAPagar = 0;    
    pagar = false;
    comprar = true;
    item1Pedido = 0;
    item2Pedido = 0;
    item3Pedido = 0;
    item4Pedido = 0;
    item5Pedido = 0;
    verCarrito = true;
    continuar = true;
}

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

function darCantidad(numeroArticulo){
    switch(numeroArticulo){
        case 1:
            return item1Pedido;
        case 2:
            return item2Pedido;
        case 3:
            return item3Pedido;
        case 4:
            return item4Pedido;
        case 5:
            return item5Pedido;
        default:
            return 0;        
    }
}

function agregarArticulo(numeroArticulo, cantidad){
    switch(numeroArticulo){
        case 1:
            item1Pedido = item1Pedido + cantidad;
            break;
        case 2:
            item2Pedido = item2Pedido + cantidad;
            break;
        case 3:
            item3Pedido = item3Pedido + cantidad;
            break;
        case 4:
            item4Pedido = item4Pedido + cantidad;
            break;
        case 5:
            item5Pedido = item5Pedido + cantidad;
            break;
        default:
            alert("Número de artículo incorrecto");        
    }
}

function quitarArticulo(numeroArticulo, cantidad){
    switch(numeroArticulo){
        case 1:
            if (item1Pedido>=cantidad){
                item1Pedido = item1Pedido - cantidad;
            }else {
                item1Pedido = 0;
            }           
            break;
        case 2:
            if (item2Pedido>=cantidad){
                item2Pedido = item2Pedido - cantidad;
            }else {
                item2Pedido = 0;
            } 
            break;
        case 3:
            if (item3Pedido>=cantidad){
                item3Pedido = item3Pedido - cantidad;
            }else {
                item3Pedido = 0;
            } 
            break;
        case 4:
            if (item4Pedido>=cantidad){
                item4Pedido = item4Pedido - cantidad;
            }else {
                item4Pedido = 0;
            } 
            break;
        case 5:
            if (item5Pedido>=cantidad){
                item5Pedido = item5Pedido - cantidad;
            }else {
                item5Pedido = 0;
            } 
            break;
        default:
            alert("Número de artículo incorrecto");        
    }
}

function cargarArticuloCarrito(){
    let mensaje ="Digite el código del artículo que quiere agregar al carrito:\n";
    for (let numeroArticulo=1; numeroArticulo<=5;numeroArticulo++){
        mensaje = mensaje + "\nCódigo ("+numeroArticulo+")       Precio unitario: "+darPrecio(numeroArticulo)+" UYU + IVA       "+darNombreArticulo(numeroArticulo);       
    }
    let entrada = prompt(mensaje);
    return entrada;
}

function ingresarItem(){
    let numeroArticulo = 0;
    let cantidad = 0;    
    let item = cargarArticuloCarrito();    
    if (item!=null){
        numeroArticulo = parseInt(item);
        if((numeroArticulo>0) && (numeroArticulo<6)){
            //Número de item correcto, pedir cantidad
            let entradaCantidad = prompt("Agregar cantidad de "+darNombreArticulo(numeroArticulo));
            if (entradaCantidad != null){
                cantidad = parseInt(entradaCantidad);
                if (cantidad>0){
                    agregarArticulo(numeroArticulo, cantidad);
                    alert("Se agregó al carrito "+cantidad+ " "+darNombreArticulo(numeroArticulo));                
                }else {
                    alert("No se agregaron elementos al carrito");
                }
            }else{
                alert("No se agregaron elementos al carrito");
            }
        }else{
            alert("N° de artículo incorrecto");            
        }
    }
    return (item);      
}

function subtotalCarrito(porcentajeDto=0){
    let subtotal = 0;
    for (let numeroArticulo=1; numeroArticulo<=5;numeroArticulo++){
        subtotal = subtotal + darCantidad(numeroArticulo) * darPrecio(numeroArticulo) * (1-porcentajeDto/100);        
    }
    return subtotal;
}

function mostrarCarrito(){
    let mensaje ="Carrito:\n";
    for (let numeroArticulo=1; numeroArticulo<=5;numeroArticulo++){
        if (darCantidad(numeroArticulo)>0){
            mensaje = mensaje + "\n"+darCantidad(numeroArticulo)+" "+darNombreArticulo(numeroArticulo)+"\n Precio unitario: "+darPrecio(numeroArticulo)+" UYU + IVA   Precio subtotal: "+(darPrecio(numeroArticulo)*darCantidad(numeroArticulo))+" UYU + IVA";
        }
    }
    console.log("Total carrito = "+subtotalCarrito()+" UYU + IVA");
    return(confirm(mensaje+"\n\nTotal: "+subtotalCarrito()+" UYU + IVA"));    
}

function mostrarCarritoDto(porcentajeDto){
    let mensaje ="Carrito:\n";
    let precio = 0;
    let precioConDescuento = 0;
    let precioSubtotalConDescuento = 0;
    let subtotal = 0;
    for (let numeroArticulo=1; numeroArticulo<=5;numeroArticulo++){
        if (darCantidad(numeroArticulo)>0){
            precio = darPrecio(numeroArticulo);
            precioConDescuento = precio*(1-porcentajeDto/100);
            precioSubtotalConDescuento = precioConDescuento*darCantidad(numeroArticulo);
            mensaje = mensaje + "\n"+darCantidad(numeroArticulo)+" "+darNombreArticulo(numeroArticulo)+"\n   Precio unitario: "+precio+" UYU + IVA\n   Precio unit. con "+porcentajeDto+"% dto: "+ precioConDescuento+" UYU + IVA\n   Precio subtotal: "+precioSubtotalConDescuento+" UYU + IVA\n";
            subtotal = subtotal + precioSubtotalConDescuento;
        }
    }   
    console.log("Total carrito con descuento = "+subtotal+" UYU + IVA");
    console.log("Total carrito con descuento IVA incluido = "+subtotal*(1+IVA)+" UYU + IVA"); 
    return(confirm(mensaje+"\nTotal con "+porcentajeDto+"% dto: "+subtotal+" UYU\nIVA "+IVA*100+"%: "+(subtotal*IVA)+" UYU\nTotal IVA incluido: "+(subtotal*(1+IVA))+" UYU"));    
}

function cargarCarrito(){
    let item = 0;   
    let continuar = false; 
    let verCarrito = false;
    do {
        item = ingresarItem();
        if (item != null){
            continuar = confirm("¿Desea agregar más artículos?");   
            verCarrito = true;         
        }else{
            continuar = false;
            verCarrito = confirm(mensajeCarritoOSalir); 
        }          
    } while (continuar);    
    return(verCarrito); 
}


function aplicarDescuento(){
    let intentoDto = 0;
    let descuento = confirm("¿Desea ingresar un código de descuento?");   
    let codigoDto = null;   
    let porcentajeDto = 0;  
    while(descuento && (intentoDto<3)){           
        codigoDto = prompt("Ingrese código de descuento:");
        intentoDto = intentoDto +1;
        switch (codigoDto){
            case DESCUENTO5:
                porcentajeDto = 5;                
                alert("Se aplica un 5% de descuento");
                descuento = false;
                break;
            case DESCUENTO10:
                porcentajeDto = 10;                
                alert("Se aplica un 10% de descuento");
                descuento = false;
                break;
            default:
                if (intentoDto<3){
                    descuento = confirm("Código de descuento incorrecto. ¿Desea volver a ingresar el código?");
                }else{
                    alert("Código de descuento incorrecto");
                    descuento = false;
                }
        }
    } 
    return porcentajeDto;       
}

// Simulador de carrito de compra
while(comprar){    
    verCarrito = cargarCarrito();
    if (verCarrito){
        continuar = mostrarCarrito();
        if (continuar){
            importeAPagar = subtotalCarrito(0);
            if (importeAPagar>0){
                pagar = confirm("Importe a pagar "+importeAPagar+" UYU + IVA\n¿Desea pagar ahora?");
                if (pagar){    
                    dto = aplicarDescuento();                 
                    if (!mostrarCarritoDto(dto)){
                        comprar = confirm(mensajeCarritoOSalir);
                        if (comprar){
                            vaciarCarrito();
                        }               
                    }else{
                        importeAPagar = subtotalCarrito(dto);     
                        // Cliente paga
                        alert("Gracias por elegirnos");   
                        vaciarCarrito();                                                
                    }                                            
                }else{
                    comprar = confirm(mensajeCarritoOSalir);
                    if (comprar){
                        vaciarCarrito();
                    }
                }
            }else{
                comprar = confirm(mensajeCarritoOSalir);
                if (comprar){
                    vaciarCarrito();
                }
            } 
        }else{
            comprar = confirm(mensajeCarritoOSalir);
            if (comprar){
                vaciarCarrito();
            }
        }
    }else{
        comprar = false;
    }    
}
alert("Gracias por utilizar nuestro simulador ¡Hasta la próxima!");



