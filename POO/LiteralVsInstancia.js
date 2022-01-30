//Objetos Literales
    const objetoLiteral = {
        nombre : 'Rafael',
        edad : 32,
        pais : 'Colombia',
        conocimientos : [
            'Javascript',
            'CSS',
            'PHP',
            'SQL',
        ],
        aprobarCurso(curso){
            this.conocimientos.push(curso);
        }
    }

    //Agregamos un nuevo conocimiento:
    objetoLiteral.aprobarCurso('Bootstrap');
    console.log('Objeto Literal:');
    console.log(objetoLiteral);

//Instancias
function crearPersona(name, edad, pais,conocimientos){
    this.name = name;
    this.edad = edad;
    this.pais = pais;
    this.conocimientos = conocimientos;
    // this.aprobarCurso = function(curso){
    //     this.conocimientos.push(curso);
    // }
}

crearPersona.prototype.aprobarCurso = function(curso){
    this.conocimientos.push(curso)
}

const instanciaPersona = new crearPersona(
    'Rafael Vega',
    32,
    'Colombia',
    [
        'Javascript',
        'CSS',
        'PHP',
        'SQL',
    ]
);
instanciaPersona.aprobarCurso('Bootstrap 5');
console.log('Instancia:');
console.log(instanciaPersona);

//Usando Clases, en javascript no hay clases en si, hay prototipos
//las clases son una sintaxis que emula a los lenguajes que las usan
//pero al final lo que se hace es modificar el prototipo

class Student {
    //el constructor se puede crear asi:
    // constructor(name, age, approvedCourses){
    //     this.name = name;
    //     this.age = age;
    //     this.approvedCourses = approvedCourses;
    // }
    //pero al instanciar tendrias que recordar el orden de los parametros: const miguel = new Student('Miguel',28,['Power BI','Analisis de BD','ANSSI Avanzado']);
    //por tanto lo mejor es hacer el constructor con un objeto:
    constructor({
        name,
        age,
        approvedCourses = [], //valor por defecto
        email,
        facebook,
        twitter,
        instagram,
    }){
        this._name = name;
        this.email = email;
    }

    //getters and setters
    //los get se definen como metodos pero se invocan como atributos
    //para obtener el valor de name con este get de ejmplo seria: miguel.miNombreEs
    get miNombreEs () {
        return this._name;
    }

    //setters al igual que get se define como metodo, se invoca como atributo:
    //se asigna como atributo: miguel.nuevoNombre = 'otroNombre';
    set nuevoNombre(nombre){
        //Podemos hacer validaciones:
        if (nombre === 'algoNoValido') {
            console.log('%c 🛑 Wey... no','color:red; font-size: 20px; weight: bold');
        }else{
            this._name = nombre;
        }
    }

    endCourse(course){
        this.approvedCourses.push(course);
    }
}

const miguel = new Student({
    name: 'Miguel',
    age: 28,
    email : 'alguien@correo.com'
});
//miguel.endCourse('DB2 Engine');
console.log(miguel);

//Invocando get que obtiene el nombre:
console.log(`Hola, soy ${miguel.miNombreEs}!!`);

//Invocando set que valida y cambia el nombre:
miguel.nuevoNombre = 'algoNoValido'; //genera un log de error, no cambia el nombre
miguel.nuevoNombre = 'Miguelito';
console.log(`Hola, me cambié el nombre, ahora soy ${miguel.miNombreEs}!!`);