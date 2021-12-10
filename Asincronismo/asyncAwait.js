const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Resuelta con Async Await'),2000)
         : reject(new Error('Rechazada con Async Await'));
    });
}

// doSomethingAsync()
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

const doSomething = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
        console.log('Algo aca');
    }catch(err){
        console.error(err);
    }
}

console.log('Before');
doSomething();
console.log('After');

//Llamadas a API con Async y Await
const funcionAsync = async (url_api) => {
    console.log(url_api);
    try {
        const data = await fetchData2(url_api);
        const character = await fetchData2(`${API}${data.results[0].id}`);
        const origin = await fetchData2(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
};

console.log('Antes del llamado de la funcion async');
funcionAsync(API);
console.log('Despues del llamado de funcionAsync');