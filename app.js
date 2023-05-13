//Hacer la tabla del 5 en JavaScript
/*
console.clear();
console.log('=============');
console.log(' Tabla del 5');
console.log('=============');
const j=5;
for(i=1;i<=10;i++){
    console.log(`${j} x ${i}= ${j*i}`);
}
*/

/*
const fs = require('fs');
console.clear();
console.log('=============');
console.log(' Tabla del 5');
console.log('=============');
const j=3;
let salida = '';
for(i=1;i<=10;i++){
   salida += `${j} x ${i} = ${j*i}\n`;
}
console.log(salida);
*/
//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo
/*
fs.writeFile('tabla-del-5.txt' , salida, (err) => {
    if(err) throw err;
    console.log('Tabla-del-5 creado');
    })
*/


/*
fs.writeFile(`tabla-del-${j}.txt` , salida, (err) => {
    if(err) throw err;
    console.log(`Tabla-del-${j} creado`);
    })
*/
/*
fs.writeFileSync(`tabla-del-${j}.txt` , salida);
    console.log(`Tabla del ${j} creado`);
*/
//Tabla del j en Javascript
/*
const{crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 7;

crearArchivo(j);
*/

//Tratamiento de error

// const argv = require('yargs').argv;

// const argv = require('yargs').option('b', {
//     alias: 'base',
//     type: 'number'
// })
// .argv;

// const argv = require('yargs').option('b', {
//     alias: 'base',
//     type: 'number',
//     demandOption: true
// })
// .argv;

// const argv = require('yargs').option('b', {
//     alias: 'base',
//     type: 'number',
//     demandOption: true
// })
// .check((argv, options)=> {
//     if(isNaN(argv.b)){
//         throw 'La base debe ser un Numero'
//     }
//     return true;
// })
// .argv;

const { option } = require('yargs');
const{crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');
console.clear();

// console.log(process.argv);
console.log(argv);
console.log("Base de yargs: ", argv.b);

// const [,,arg3] = process.argv;

// const [,,arg3='j=5'] = process.argv;
// const[ , j ]= arg3.split("="); //separa el string por el caracter =
// console.log(arg3);
// console.log(j);

//const j = 3;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));