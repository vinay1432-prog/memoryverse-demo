function exploreMemories() {

    const music = document.getElementById("music");

    music.play();

    document.getElementById("timeline")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function showSurprise() {

    const birthdayMusic =
        document.getElementById("music");

    const surpriseMusic =
        document.getElementById("surpriseMusic");

    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;

    surpriseMusic.currentTime = 0;
    surpriseMusic.play();

    document.getElementById("popup")
        .style.display = "block";
}

function closePopup() {

    document.getElementById("popup")
        .style.display = "none";

    const surpriseMusic =
        document.getElementById("surpriseMusic");

    const birthdayMusic =
        document.getElementById("music");

    surpriseMusic.pause();

    birthdayMusic.play();
}

function closePopup() {
    document.getElementById("popup")
        .style.display = "none";
}

function openImage(img) {

    const modal =
        document.getElementById("imageModal");

    modal.classList.add("show");

    document.getElementById("modalImg").src =
        img.src;
}

function closeImage() {

    document.getElementById("imageModal")
        .classList.remove("show");
}

function openLetter() {
    document.getElementById("letterModal")
        .style.display = "block";
}

function closeLetter() {
    document.getElementById("letterModal")
        .style.display = "none";
}

window.onclick = function(event) {

    const popup =
        document.getElementById("popup");

    if(event.target === popup){
        closePopup();
    }
}