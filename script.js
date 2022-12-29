/**
 * param {string} elementId
 * param {HTMLElement} ele
 */
let galleryImagesLoaded = false;

const load = (event) => {
    for (const id of elementIdArray) {
        const element = document.getElementById(id);
        const dataTarget = event.target.getAttribute('data-target');

        if (id === dataTarget) {
            if (dataTarget === 'gallery' && galleryImagesLoaded === false) {
                loadGalleryImages();
                galleryImagesLoaded = true;
            }
            element.style.display = 'flex';
            element.classList.add('loaded');

            setTimeout(() => {
                element.style.overflowY = 'auto';
            }, 2000)

            continue;
        };

        element.classList.remove('loaded');
        element.style.display = 'none';
        element.style.overflowY = 'hidden';
    }

    for (const navItem of document.getElementsByClassName('nav-item active')) {
        navItem.classList.remove('active');
    }

    event.target.parentElement.classList.add('active');
}

const elementIdArray = ['home', 'about', 'gallery', 'contact'];

for (const id of elementIdArray) {
    const elements = document.querySelectorAll(`[data-target="${id}"]`);
    elements.forEach(element => {
        element.addEventListener("click", (e) => load(e));
    });
}

const loadGalleryImages = () => {
    const containerDiv = document.getElementById('gallery-container');
    const imageUrlList = [
        './img/donuts_1.png',
        './img/platter_1.png',
        './img/platter_2.png',
        './img/donuts_2.png',
        './img/donuts_3.png',
        './img/platter_3.png',
        './img/donuts_4.png',
        './img/platter_4.png'
    ];

    imageUrlList.forEach(x => {
        const imageEle = document.createElement('img');
        imageEle.src = x;
        containerDiv.appendChild(imageEle);
    })

}

