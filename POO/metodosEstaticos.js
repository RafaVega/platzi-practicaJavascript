//Metodos estaticos de la clase OBJECT:
const rafael = {
    name : 'Rafael Vega',
    age : 32,
    approvedCourses : ['unCurso'],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    },
};

// console.log(Object.keys(rafael));
// console.log(Object.getOwnPropertyNames(rafael));
// console.log(Object.entries(rafael));
// console.log(Object.getOwnPropertyDescriptors(rafael));
// Object.defineProperty(rafael, 'pruebaNASA', {
//     value : 'extraterrestres',
//     enumerable : false,
//     writable : false,
//     configurable : false,
// });

// Object.defineProperty(rafael, 'Navegador', {
//     value : 'Chrome',
//     enumerable : false,
//     writable : true,
//     configurable : true,
// });

// Object.defineProperty(rafael, 'Editor', {
//     value : 'VSCode',
//     enumerable : true,
//     writable : false,
//     configurable : true,
// });

// Object.defineProperty(rafael, 'Terminal', {
//     value : 'WSL',
//     enumerable : true,
//     writable : true,
//     configurable : false,
// });

Object.seal(rafael);
Object.freeze(rafael);
JSON.stringify()
console.log(Object.getOwnPropertyDescriptors(rafael));
