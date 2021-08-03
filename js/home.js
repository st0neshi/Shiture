const homeBackgroundImage = [
    "/Users/shi/workspace/Html/Shiture/imgs/home_1.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/home_2.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/home_3.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/home_4.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/home_5.jpg",
    "/Users/shi/workspace/Html/Shiture/imgs/home_6.jpg"
]

function changeBackgroundImage() {
    let i = Math.floor(Math.random() * 5);

    document.querySelector(".home-content").style.backgroundImage = "url('" + homeBackgroundImage[i] + "')";
}

setInterval(changeBackgroundImage, 4000);