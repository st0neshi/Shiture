const homeBackgroundImage = [
    "../imgs/home_1.jpg",
    "../imgs/home_2.jpg",
    "../imgs/home_3.jpg",
    "../imgs/home_4.jpg",
    "../imgs/home_5.jpg",
    "../imgs/home_6.jpg"
]

function changeBackgroundImage() {
    let i = Math.floor(Math.random() * 5);

    document.querySelector(".home-content").style.backgroundImage = "url('" + homeBackgroundImage[i] + "')";
}

setInterval(changeBackgroundImage, 4000);