var vid = document.getElementById("vid");
var icon = document.getElementById("iconPlay");
var isPlaying = false;
var prev = document.getElementsByClassName("previ");
var mouseFuera = true;

function playvid() {
    if (isPlaying == true) {
        vid.pause();
        isPlaying = false;
        icon.src = "assets/play.png";
    }
    else if (isPlaying == false) {
        vid.play();
        isPlaying = true;
        icon.src = "assets/pause.png";
    }
}
function aprevisual(element) {
    if (mouseFuera) {
        document.getElementById("nose").innerHTML = "<video id='rick' class='img-video' autoplay='true' src='assets/RickRollD (240p).mp4' controls muted ></video>";
        console.log("sii")
        mouseFuera = false;
    }
}
function aprevisual2(element) {
    document.getElementById("nose").innerHTML = "<img class='img-video' src='assets/video-placeholder.png' style='background-image: url(assets/630fa73b77d6a.jpeg);'>";
    console.log("sii2");
    mouseFuera = true;
}
function bprevisual(element) {
    if (mouseFuera) {
        document.getElementById("nose2").innerHTML = '<video class="img-video" class="vid-s" autoplay="true" src="assets/Life could be a dream.mp4" controls muted></video>';
        console.log("sii")
        mouseFuera = false;
    }
}
function bprevisual2(element) {
    document.getElementById("nose2").innerHTML = '<img class="img-video" src="assets/video-placeholder.png" style="background-image: url(assets/Monke.webp);" alt="video placeholder" class="vid-s">';
    console.log("sii2");
    mouseFuera = true;
}
function cprevisual(element) {
    if (mouseFuera) {
        document.getElementById("nose3").innerHTML = '<video class="img-video" autoplay="true" src="assets/monke fishing.mp4" controls muted ></video>';
        console.log("sii")
        mouseFuera = false;
    }
}
function cprevisual2(element) {
    document.getElementById("nose3").innerHTML = '<img class="img-video" src="assets/video-placeholder.png" style="background-image: url(assets/fishing.png);" alt="video placeholder" class="vid-s">';
    console.log("sii2");
    mouseFuera = true;
}
function dprevisual(element) {
    if (mouseFuera) {
        document.getElementById("nose4").innerHTML = '<video class="img-video" autoplay="true" src="assets/Swimming Monkey Meme.mp4" controls muted></video>';
        console.log("sii")
        mouseFuera = false;
    }
}
function dprevisual2(element) {
    document.getElementById("nose4").innerHTML = '<img class="img-video" src="assets/video-placeholder.png" "alt="video placeholder" style="background-image: url(assets/swim.png);" class="vid-s">';
    console.log("sii2");
    mouseFuera = true;
}