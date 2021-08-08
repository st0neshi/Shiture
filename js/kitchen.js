const kitchenGallery = [
    "/imgs/kitchen/kitchen_1_aaron-huber.jpg",
    "/imgs/kitchen/kitchen_2-roam-in-color.jpg",
    "/imgs/kitchen/kitchen_3-roam-in-color.jpg",
    "/imgs/kitchen/kitchen_4-sidekix-media.jpg",
    "/imgs/kitchen/kitchen_5-watermark-designs.jpg"
];

const myGallery = [
    "/Users/shi/workspace/Html/Shiture/imgs/kitchen/kitchen_1_aaron-huber.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/kitchen/kitchen_2-roam-in-color.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/kitchen/kitchen_3-roam-in-color.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/kitchen/kitchen_4-sidekix-media.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/kitchen/kitchen_5-watermark-designs.jpg"
];

// let imgNum = 0;

// document.querySelector("#next").addEventListener('click', next);
// document.querySelector("#prev").addEventListener('click', prev);
// setInterval(next, 6000);

function next() {
    imgNum++;

    if (imgNum >= kitchenGallery.length) {
        imgNum = 0;
        document.querySelector(".kitchen-gallery").style.backgroundImage = "url('" + kitchenGallery[imgNum] + "')";
    } else {
        document.querySelector(".kitchen-gallery").style.backgroundImage = "url('" + kitchenGallery[imgNum] + "')";
        // document.querySelector(".kitchen-gallery").style.animation = "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    }
}

function prev() {
    imgNum--;

    if (imgNum < 0) {
        imgNum = kitchenGallery.length - 1;
        document.querySelector(".kitchen-gallery").style.backgroundImage = "url('" + kitchenGallery[imgNum] + "')";
    } else {
        document.querySelector(".kitchen-gallery").style.backgroundImage = "url('" + kitchenGallery[imgNum] + "')";
    }
}

// For new gallery:
const slider = document.querySelector(".kitchen-gallery");
const galleryNext = document.querySelector("#next");
const galleryPrev = document.querySelector("#prev");
const slides = document.querySelectorAll(".slide");
const sliderIcons = document.querySelectorAll(".slide-icon");
const numSlides = slides.length;
let count = 0;

// For next button:
galleryNext.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    sliderIcons.forEach((sliderIcon) => {
        sliderIcon.classList.remove("active");
    })

    count++;

    if (count > (numSlides - 1)) {
        count = 0;
    }

    slides[count].classList.add("active");
    sliderIcons[count].classList.add("active");
})

// For prev button:
galleryPrev.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    sliderIcons.forEach((sliderIcon) => {
        sliderIcon.classList.remove("active");
    })

    count--;

    if (count < 0) {
        count = numSlides - 1;
    }

    slides[count].classList.add("active");
    sliderIcons[count].classList.add("active");
})

// Autoplay:
let playSlider;

let repeater = () => {
    playSlider = setInterval(function() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
        sliderIcons.forEach((sliderIcon) => {
            sliderIcon.classList.remove("active");
        })
    
        count++;
    
        if (count > (numSlides - 1)) {
            count = 0;
        }
    
        slides[count].classList.add("active");
        sliderIcons[count].classList.add("active");
    }, 5000);
}
repeater();

// Stop autoplay:
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
})

// Restart autoplay after stop:
slider.addEventListener("mouseout", () => {
    repeater();
})