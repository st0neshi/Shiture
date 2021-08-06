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

let imgNum = 0;

// document.querySelector("#next").addEventListener('click', next);
// document.querySelector("#prev").addEventListener('click', prev);
setInterval(next, 6000);

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