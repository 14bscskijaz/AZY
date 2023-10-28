function toggleMenu() {
    var x = document.getElementById("menu");
    if (x.style.visibility === "visible") {
        x.style.opacity = "0";
        x.style.visibility = "hidden";
    } else {
        x.style.opacity = "1";
        x.style.visibility = "visible";
    }
}
function toHome(){
    window.location.href = 'index.html';
}