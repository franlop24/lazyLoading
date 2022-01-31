//Obtenes referencias a objetos existentes
const buttonAdd = document.querySelector('#addImage');
const appImages = document.querySelector('#images');


//Crear Imagenes
function createImageNode (){
    const containerImage = document.createElement('div');
    containerImage.className = "p-4";
    const image = document.createElement('img');
    //image.src = "https://source.unsplash.com/random";
    const numRand = Math.round(Math.random()*122);
    //image.src = "https://source.unsplash.com/random";
    image.src = `https://randomfox.ca/images/${numRand}.jpg`;
    image.alt = "Imagen aleatoria";
    image.className = "mx-auto s-320";
    containerImage.appendChild(image);

    appImages.appendChild(containerImage);
} 

//Button
buttonAdd.addEventListener('click', createImageNode);