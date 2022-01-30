class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante',
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    public(){
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.content}`);
        console.log(`likes: ${this.likes}`);
    }
}

class course{
    constructor({
        name,
        isFree = false,
        lang = 'spanish',
        classes = [],
    }){
        this.name = name;
        this.isFree = isFree;
        this.lang = lang;
        this.classes = classes;
    }
}

//Clase madre:
class Student {
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
        this.approvedCourses = approvedCourses;
        this.email = email;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
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

    publicComment(commentContent){
        const comment = new Comment({
            content : commentContent,
            studentName : this.miNombreEs,
        });

        comment.public();
    }
}

//Clase Hija:
class freeStudent extends Student{
    //llamando constructor de clase madre:
    constructor(props){
        super(props);
    }

    approveCourse(course){
        if (course.isFree) {
            this.endCourse(course);
        }else{
            console.log(`Lo siento ${this.miNombreEs} , solo puedes tomar cursos gratis`);
        }
    }
}

class basicStudent extends Student{
    //llamando constructor de clase madre:
    constructor(props){
        super(props);
    }

    approveCourse(course){
        if (course.lang !== 'english') {
            this.endCourse(course);
        }else{
            console.log(`Lo siento ${this.miNombreEs} , no puedes tomar cursos en ingles`);
        }
    }
}

class TeacherStudent extends Student{
    //llamando constructor de clase madre:
    constructor(props){
        super(props);
    }

    approveCourse(course){
        this.endCourse(course);
    }

    publicComment(commentContent){
        const comment = new Comment({
            content : commentContent,
            studentName : this.miNombreEs,
            studentRole : 'Profesor',
        });

        comment.likes = 3000;
        comment.public();
    }
}

// =========== MAIN ============= //
const cursoProgBasica = new course({
    name :'Curso de Programación Básica',
    isFree : true,
});

const cursoPracticoHTML = new course({
    name :'Curso Prácitco de HTML',
    isFree : true,
    lang : 'english',
});

const juan = new freeStudent({
    name: 'Juan',
    age: 28,
    email : 'alguien@correo.com',
});

const miguel = new basicStudent({
    name: 'Miguel',
    age: 34,
    email : 'alguien@correo.com',
});

const alejo = new TeacherStudent({
    name: 'El viejo Alejo',
    age : 65,
})

console.log(juan,miguel,alejo);

console.group();
    juan.publicComment('Hola, no entiendo porque no me funciona el codigo');
    miguel.publicComment('Si... a mi tampoco me funciona... :(');
    alejo.publicComment('Compila!! Compila!!!');
console.groupEnd();