// ==== DICCIONARIO DE CUPONES ====
const cupones = {
    CUPON10 : 10,
    CUPON20 : 20,
    CUPON40 : 40,
}

const obtenerValorCupon = (nombreCupon) => {
    //si existe una clave de igual nombre que nombreCupon retorno su valor
    //sino retorno 0 pues no es un cupon valido y por tanto el valor del descuento es 0
    return (cupones[nombreCupon])? cupones[nombreCupon] : 0;
}

const calcularPrecioConDescuento = (precioOriginal, porcentajeDescuento) => {
    //La diferencia entre 100(%) - porcentajeDescuento es el pocentaje que se cobrará del precioOriginal
    const porcentajeACobrar = 100 - porcentajeDescuento;
    //Al multiplicar el precioOriginal por el porcentajeACobrar / 100, obtenemos el precio despues de descuento.
    const precioConDescuento = precioOriginal * (porcentajeACobrar/100);
    return precioConDescuento;
}

function obtenerDescuento(){
    const precioOriginal = document.querySelector('#inputPrecio').value;
    const porcentajeDescuentoTienda = Number(document.querySelector('#inputDescuentoTienda').value);
    
    const cuponUsuario = document.querySelector('#inputCupon').value;
    const porcentajeDescuentoCupon = obtenerValorCupon(cuponUsuario);

    //El porcentaje de descuento total es igual al porcentaje de descuento de la tienda más el porcentaje del cupon del usuario.
    //si esta sumatoria supera el 100% el descuento total será 100%.
    const porcentajeDescuentoTotal = ( (porcentajeDescuentoTienda + porcentajeDescuentoCupon) > 100)? 100 : (porcentajeDescuentoTienda + porcentajeDescuentoCupon);
    const precioConDescuento = calcularPrecioConDescuento(precioOriginal,porcentajeDescuentoTotal);

    document.querySelector('#resultadoDescuento').innerHTML = `El precio Original es: $${precioOriginal}<br>
        Descuento en tienda: ${porcentajeDescuentoTienda}%<br>
        Descuento por cupón: ${porcentajeDescuentoCupon}%<br>
        Precio con descuento es: $${precioConDescuento}
    `;
}