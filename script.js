// BACKGROUND CHANGER ICON


const shuffleBtn = document.querySelector("#application");
const mainDiv = document.querySelector("main");
var images = ['wallpaper1.png',
                'wallpaper2.jpg',
                'wallpaper3.jpg',
                'wallpaper4.jpg',
                'wallpaper5.jpg',
                'wallpaper6.jpg',
                'wallpaper7.jpg',
                'wallpaper8.jpg',
                'wallpaper9.jpg'];
let currentImageIndex = 0;

// Pre-load images
images.forEach((image) => {
    const img = new Image();
    img.src = `../images/${image}`;
});

shuffleBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = `../images/${images[currentImageIndex]}`;
    mainDiv.style.transition = "background-position-x 0.3s ease-in";
    mainDiv.style.backgroundImage = `url(${imageUrl})`;
    mainDiv.style.backgroundPositionX = "100%";
    setTimeout(() => {
        mainDiv.style.backgroundPositionX = "0%";
    }, 0);
});





