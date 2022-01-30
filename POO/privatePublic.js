//Accedes y Sobreescribes la variable name con metodos
function createStudentMethod({
    name,
    age,
    email,
    courses = [],
} = {}){

    const private = {
        _name : name,

    }

    const public = {
        age,
        email,
        courses,
        //Accediendo y editando attributos privados:
            //con metodos normales
            readName(){
                return private._name;
            },
            changeName(newName){
                private._name = newName;
            }
    }

    // ======== protegiendo las funciones para que no se sobreescriban  ========
        // Con defineProperty        
        Object.defineProperty(public,'readName',{
            configurable : false,
            writable : false,
        });

        Object.defineProperty(public,'changeName',{
            configurable : false,
            writable : false,
        });
        /**/

        //   // Con defineProperties  
        //   Object.defineProperties(public, {
        //     readName: {
        //       configurable: false,
        //       writable: false,
        //     },
        //     changeName: {
        //       configurable: false,
        //       writable: false,
        //     },
        //   });
// ======== fin protegiendo las funciones para que no se sobreescriban  ========
    return public;
};

//Accedes y sobreescribes la variable name con get y set
function createStudentSetGet({
    name,
    age,
    email,
    courses = [],
} = {}){

    const private = {
        _name : name,

    }

    const public = {
        age,
        email,
        courses,
            // con getters y setters
            get name(){
                return private._name;
            },
            set name(newName){
                if (newName.length !== 0) {
                    private._name = newName;
                }else{
                    console.warn('Tu nombre debe tener al menos 1 caráter');
                }
            },
    }

    Object.defineProperty(public,'name',{
        configurable : false,
    });

    return public;
    
};

const vega = createStudentMethod({name: 'Vega273', age: 32, email : 'rvega@vegatronic.com'});
//console.log(`Este es mi nombre inicial: ${vega.readName()}`);
//vega.changeName('rVega273');
//console.log(`Lo cambio por este: ${vega.readName()}`);
const juan = createStudentSetGet({name: 'Juancho', age: 32, email : 'juan@danisoft.com'});
console.log(Object.getOwnPropertyDescriptors(vega));
console.log(Object.getOwnPropertyDescriptors(juan));
