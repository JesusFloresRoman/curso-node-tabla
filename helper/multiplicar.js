/*
const { rejects } = require('assert');
const fs = require('fs');
const {resolve} = require('path');
const crearArchivo = (j)=>{
    const promesa = new Promise((resolve,reject)=>{
        console.clear();
        console.log('=============');
        console.log(' Tabla del: ',j);
        console.log('=============');
    
        let salida = '';
        for(i=1;i<=10;i++){
        salida += `${j} x ${i} = ${j*i}\n`;
        }
        console.log(salida);
    
        //el file system para grabar un archivo. usando WriteFileSync
        //cono se ejecuta de manera asincrona ya no va el error.
        //Paraq controlar el error se usa try - catch.
        fs.writeFileSync(`tabla-del-${j}.txt` , salida);
        let nombreArchivo = `Tabla del ${j}`;
        (nombreArchivo)
            ?resolve(nombreArchivo)
            :reject(`No existe ${nombreArchivo}`);
        });
        return promesa;
    }
    module.exports={
        crearArchivo
    }
*/

// const fs = require('fs');
// const {resolve} = require('path');
// const crearArchivo = async (j)=>{
// try{
//     console.clear();
//     console.log('=============');
//     console.log(' Tabla del: ',j);
//     console.log('=============');

//     let salida = '';
//     for(i=1;i<=10;i++){
//     salida += `${j} x ${i} = ${j*i}\n`;
//     }
//     console.log(salida);
//     fs.writeFileSync(`tabla-del-${j}.txt` , salida);
//     return `Tabla del ${j}`;
//     }catch(err){
//         throw err;
//     }
// };

// Salvamos. Actualizamos código en multiplicar.js
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true, hasta=10) =>{
    try {
        let salida = '';
        let consola = '';
        for(i = 1;i<=hasta;i++){
            salida += `${j} ${'x'} ${i} ${'='} ${j * i}\n`;
            consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del: ', colors.blue(j));
            console.log('============='.blue);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-del-${j}.txt` , salida);
        return `Tabla del ${j}`;
    } catch (err) {
        throw err;
    }
}

module.exports={
    crearArchivo
}
