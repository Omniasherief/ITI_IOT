/*

2- Make slidshow with this buttons
    Next button: will navigate to next image
    Previous button: will navigate to previous image
    Slideshow: start sliding images (hint: using timers)
    Stop: will stop slideshow action 

*/
let images = ["1.webp", "2.webp", "3.webp"];
let currentIndex = 0;
let intervalId;

function updateImage() {
    document.getElementById("slideshowImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; //% to loop it after finished
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function startSlideshow() {
    intervalId = setInterval(nextImage, 2000); 
}

function stopSlideshow() {
    clearInterval(intervalId);
}