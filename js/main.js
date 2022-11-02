
//alert("Conectado");
let btnHome = document.getElementById("btnHome");
let btnAbout = document.getElementById("btnAbout");
let btnBook = document.getElementById("btnBook");
let btnWork = document.getElementById("btnWork");
let btnProyects = document.getElementById("btnProyects");
btnHome.addEventListener("click", homeHover);
btnAbout.addEventListener("click", aboutHover);
btnBook.addEventListener("click", bookHover);
btnWork.addEventListener("click", workHover);
btnProyects.addEventListener("click", proyectsHover);


/*----Hover nav----*/

function homeHover(){
    btnHome.setAttribute("src", "img/icons/home-hover.png");
    btnAbout.setAttribute("src", "img/icons/About-me.png");
    btnBook.setAttribute("src", "img/icons/book.png");
    btnWork.setAttribute("src", "img/icons/work.png");
    btnProyects.setAttribute("src", "img/icons/proyects.png");

}
function aboutHover(){
    btnHome.setAttribute("src", "img/icons/home.png");
    btnAbout.setAttribute("src", "img/icons/About-me-hover.png");
    btnBook.setAttribute("src", "img/icons/book.png");
    btnWork.setAttribute("src", "img/icons/work.png");
    btnProyects.setAttribute("src", "img/icons/proyects.png");
}
function bookHover(){
    btnHome.setAttribute("src", "img/icons/home.png");
    btnAbout.setAttribute("src", "img/icons/About-me.png");
    btnBook.setAttribute("src", "img/icons/book-hover.png");
    btnWork.setAttribute("src", "img/icons/work.png");
    btnProyects.setAttribute("src", "img/icons/proyects.png");
}
function workHover(){
    btnHome.setAttribute("src", "img/icons/home.png");
    btnAbout.setAttribute("src", "img/icons/About-me.png");
    btnBook.setAttribute("src", "img/icons/book.png");
    btnWork.setAttribute("src", "img/icons/work-hover.png");
    btnProyects.setAttribute("src", "img/icons/proyects.png");
}
function proyectsHover(){
    btnHome.setAttribute("src", "img/icons/home.png");
    btnAbout.setAttribute("src", "img/icons/About-me.png");
    btnBook.setAttribute("src", "img/icons/book.png");
    btnWork.setAttribute("src", "img/icons/work.png");
    btnProyects.setAttribute("src", "img/icons/proyects-hover.png");
}

/*----Banner Video----*/
let video = document.querySelector(".bannerVideo ");
setTimeout(()=>{video.style.opacity = "1"},1000);
let baner = document.querySelector(".contentainerBannerInfo");
setTimeout(()=>{baner.style.opacity = "1"},2000);