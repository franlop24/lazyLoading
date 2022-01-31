import { counters, countC, countI } from './index';

const isIntersecting = (entry) => {
    return entry.isIntersecting // True si estña dentro de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;

    image.src = url;    
    countI.push('b');
    counters(countC.length, countI.length)
    observer.unobserve(container);
}
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage =  (imagen) => {
    observer.observe(imagen)
}