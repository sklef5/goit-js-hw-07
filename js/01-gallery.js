import { galleryItems } from './gallery-items.js';
// Change code below this line
const createImgblock = document.querySelector('.gallery')
const imgblock = createDiv(galleryItems)
createImgblock.insertAdjacentHTML('afterbegin', imgblock)

function createDiv(items){
return items.map(({preview, original, description}) =>{
    return `
        <div class="gallery__item" href=${original}>
            <a class="gallery__link" href=${original}>
                <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
                />
            </a>
        </div>
`
}).join('')
}

createImgblock.addEventListener('click', openBigImg)

function openBigImg (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !=="IMG"){
        return
    }
    console.log(evt.key)


    const imgBig = basicLightbox.create(`
            <img
            src=${evt.target.dataset.source}
            alt=${evt.target.alt}
            />
        `, {
        onShow: (imgBig) =>
        createImgblock.addEventListener("keydown", onEscapeKeyPress),
        onClose: (imgBig) =>
        createImgblock.removeEventListener("keydown", onEscapeKeyPress),
        }
    )

    imgBig.show()

    function onEscapeKeyPress(evt) {
        if (evt.key === "Escape") {
            imgBig.close();
        }
    }
}