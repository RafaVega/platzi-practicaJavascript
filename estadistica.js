//Datos ejemplo
const lista1 = [
    400000000,
   250,
    430,
    430,
    430,
    430,
    430,
    500,
    250,
    250,
    100,
    310,
    250,
    300,
    200,
    100,
    100,
    200,
    100,
];

//PROMEDIO
console.groupCollapsed('PROMEDIO');
const calcularPromedio = (lista) => {
    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

console.log(`Promedio: ${calcularPromedio(lista1)}`);
console.groupEnd();

//MEDIANA
console.groupCollapsed('MEDIANA');
const esPar = (numero) => {
    return (numero % 2) === 0;
}

const ordenarLista = (lista) => {
    const listaOrdenada = lista.sort((a,b) => a-b);
    return listaOrdenada;
}

const calcularMediana = (lista) =>{
    const listaOrdenada = ordenarLista(lista);
    let mediana = 0;
    const mitadLista = parseInt(listaOrdenada.length / 2);
    if(esPar(listaOrdenada.length)){
        const posicionElemento1 = parseInt(mitadLista);
        const posicionElemento2 = posicionElemento1 - 1 ;
        const promedioElementos = calcularPromedio([listaOrdenada[posicionElemento1], listaOrdenada[posicionElemento2]]);
        
        mediana = promedioElementos;
    }else{
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}

console.log(`Mediana: ${calcularMediana(lista1)}`);
console.groupEnd();

//MODA
console.groupCollapsed('MODA');
    const calcularModa = (lista) => {
        const contadorLista = {};
        lista.map((elemento) => {
            if (contadorLista[elemento]) {
                contadorLista[elemento] += 1;        
            }else{
                contadorLista[elemento] = 1;
            }
        });
        console.log(contadorLista);
        const arrayLista = Object
            .entries(contadorLista)
            .sort((elementoA, elementoB) => elementoB[1] - elementoA[1]);
        console.log(arrayLista);
    
        const moda = arrayLista[0];
        const contadorModa = moda[1];
    
        //por si hay mas de 1 moda:
        const arrayDeModas = arrayLista.filter((elementoLista) => elementoLista[1] === contadorModa);
        return arrayDeModas;
    }

    let labelModa = '';
    const modas = calcularModa(lista1);
    console.log(modas);
    const contadorModa = modas[0][1];
    modas.forEach( elementModa => labelModa += `${elementModa[0]} `);
    console.log(`La Moda es: ${labelModa}. Numero de repeticiones: ${contadorModa}`);
console.groupEnd();
