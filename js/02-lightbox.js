import { galleryItems } from './gallery-items.js';
// Change code below this line


const createImgblock = document.querySelector('.gallery')
const imgblock = createDiv(galleryItems)
createImgblock.insertAdjacentHTML('afterbegin', imgblock)

function createDiv(items){
return items.map(({preview, original, description}) =>{
    return `
            <a class="gallery__link" href=${original}>
                <img
                class="gallery__image"
                src=${preview}
                alt=${description}
                />
            </a> `
}).join('')
}


new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });