function loadGalleryData() {
    const urlParams = new URLSearchParams(window.location.search);
    const images = imagesFromProjectId(urlParams.get('project'));
    images.forEach(appendImage);
}

const projects = {
    COFFEE: [
        'img/gallery/coffee/str._29.pdf.png',
        'img/gallery/coffee/str._30.pdf.png',
        'img/gallery/coffee/str._31.pdf.png',
        'img/gallery/coffee/str._32.pdf.png',
    ],
    HOUSE: [
        'img/gallery/house/str._37.pdf.png',
        'img/gallery/house/str._38.pdf.png',
        'img/gallery/house/str._39.pdf.png',
        'img/gallery/house/str._40.pdf.png',
    ],
    OFFICE: [
        'img/gallery/office/str._19.pdf.png',
        'img/gallery/office/str._20.pdf.png',
        'img/gallery/office/str._21.pdf.png',
        'img/gallery/office/str._22.pdf.png'
    ],
    PAVILON: [
        'img/gallery/pavilion/str._09.pdf.png',
        'img/gallery/pavilion/str._10.pdf.png',
        'img/gallery/pavilion/str._11.pdf.png',
        'img/gallery/pavilion/str._12.pdf.png',
    ],
    SKALA: [
        'img/gallery/skala/str._41.pdf.png',
        'img/gallery/skala/str._42.pdf.png',
        'img/gallery/skala/str._43.pdf.png',
        'img/gallery/skala/str._44.pdf.png'
    ],
    WOOL: [
        'img/gallery/wool/str._13.pdf.png',
        'img/gallery/wool/str._14.pdf.png',
        'img/gallery/wool/str._18.pdf.png'
    ]
};

function appendImage(image) {
    var element = document.createElement('img');
    element.setAttribute('src', image);
    document.getElementById('slideshow').appendChild(element);
}

function imagesFromProjectId(identifier) {
    switch (identifier) {
        case 'stoisko': return projects.COFFEE;
        case 'dom': return projects.HOUSE;
        case 'biuro': return projects.OFFICE;
        case 'pawilon': return projects.PAVILON;
        case 'skala': return projects.SKALA;
        case 'woolhouse': return projects.WOOL;
    }
}

window.onload = loadGalleryData;
