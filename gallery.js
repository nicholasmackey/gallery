function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!')
    }

    // select the elements
    const images = Array.from(gallery.querySelectorAll('img'));
    console.log(images)
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));