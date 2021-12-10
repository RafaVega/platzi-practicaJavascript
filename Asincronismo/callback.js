//Ejemplo 1
const sum = (num1, num2) => num1 + num2;
const calc = (num1,num2,callback) => callback(num1,num2);

//console.log(calc(6,2,sum));

//Ejemplo 2
const date = (callback) => {
    console.log(new Date);
    setTimeout( _ => {
        let date = new Date;
        callback(date);
    },3000);
}

const printDate = (dateNow) => {
    console.log(dateNow);
}

//date(printDate);

//Ejemplo 3 - USANDO APIs
// CON CALLBACK Y XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api, callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error(`Error: ${url_api}`);
                return callback(error,null);
            }
        }
    }

    xhttp.send();
}

/*
fetchData(API, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});
*/

//Ejemplo 4
//Con Promesas:
const someThingWillHappens = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            resolve('PROMESA1 RESUELTA');
        }else{
            reject('PROMESA1 RECHAZADA');
        }
    });
}

// someThingWillHappens()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

const someThingWillHappens2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
           setTimeout(() =>{
                resolve('PROMESA 2 RESUELTA');
           },2000) ;
        }else{
            const error = new Error('PROMESA2 RECHAZADA');
            reject(error);
        }
    });
}

// someThingWillHappens2()
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//Ejecutando multiples promesas
// Promise.all([someThingWillHappens(),someThingWillHappens2()])
//     .then(response => {
//         console.log('Array of result', response);
//     })
//     .catch(err => console.error(err));


//EJEMPLO 5
//Promesas y APIs
const fetchData2 = (url_api) => {
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (event) => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) 
                  ? resolve(JSON.parse(xhttp.responseText))
                  : reject(new Error('Error:', url_api));
            }
        }
        xhttp.send();
    });
}

/*
fetchData2(API)
    .then(data => {
        console.log(data.info.count)
        return fetchData2(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData2(data.origin.url)
    })
    .then(data => console.log(data.dimension))
    .catch(err => console.error(err));
*/