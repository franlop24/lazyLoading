import h from 'hyperscript';
import { registerImage } from './lazy';

//Obtenes referencias a objetos existentes
const btnAdd = document.querySelector('#addImage');
const appImages = document.querySelector('#images');
const btnClear = document.querySelector('#clearImages');
export let countC = [];
export let countI = [];

//Crear Imagenes
function createImageNode (){
    
    //image.src = "https://source.unsplash.com/random";
    //const image = document.createElement('img');
    const numRand = Math.ceil(Math.random()*122);
    //image.dataset.src = `https://randomfox.ca/images/${numRand}.jpg`;
    //image.alt = "Imagen aleatoria";
    //image.className = "mx-auto s-320";
    const image = h('img.mx-auto.s-320', {
        "data-src": `https://randomfox.ca/images/${numRand}.jpg`,
        alt : "Imagen aleatoria"
    });
    //const containerImage = document.createElement('div');
    //containerImage.className = "p-4";
    const containerImage = h("div.p-4", image);
    //containerImage.appendChild(image);

    appImages.appendChild(containerImage);
    registerImage(containerImage);
    countC.push('a');
    counters(countC.length, countI.length)
} 

export const counters = (total, cargadas) => {
    console.log("-----------------------------------");
    console.log('Total Imagenes: ' + total)
    console.log('Imagenes Cargadas: ' + cargadas);
}

const clearImages = () => {
    appImages.innerHTML = '';
    countC = []
    countI = []
    console.clear();
}

//Button
btnAdd.addEventListener('click', createImageNode);
btnClear.addEventListener('click', clearImages);