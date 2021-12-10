console.group('SALARIOS');
const salariosCol = colombia.map((empleado) => empleado.salary);
const medianaGeneral = calcularMediana(salariosCol);
console.log(medianaGeneral);

//Mediana del top 10%
const salariosOrdenados = ordenarLista(salariosCol);
const spliceStart = parseInt(salariosOrdenados.length * (0.9));
const spliceCount = salariosOrdenados.length - spliceStart;
const salariosColTop10 = salariosOrdenados.splice(spliceStart,spliceCount);

const medianaTop10Col = calcularMediana(salariosColTop10);

console.log(medianaGeneral, medianaTop10Col);

console.groupEnd();