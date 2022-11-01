
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
    btnAbout.setAttribute("src", "img/icons/About-me.svg");
    btnBook.setAttribute("src", "img/icons/book.svg");
    btnWork.setAttribute("src", "img/icons/work.svg");
    btnProyects.setAttribute("src", "img/icons/proyects.svg");

}
function aboutHover(){
    btnHome.setAttribute("src", "img/icons/home.svg");
    btnAbout.setAttribute("src", "img/icons/About-me-hover.png");
    btnBook.setAttribute("src", "img/icons/book.svg");
    btnWork.setAttribute("src", "img/icons/work.svg");
    btnProyects.setAttribute("src", "img/icons/proyects.svg");
}
function bookHover(){
    btnHome.setAttribute("src", "img/icons/home.svg");
    btnAbout.setAttribute("src", "img/icons/About-me.svg");
    btnBook.setAttribute("src", "img/icons/book-hover.png");
    btnWork.setAttribute("src", "img/icons/work.svg");
    btnProyects.setAttribute("src", "img/icons/proyects.svg");
}
function workHover(){
    btnHome.setAttribute("src", "img/icons/home.svg");
    btnAbout.setAttribute("src", "img/icons/About-me.svg");
    btnBook.setAttribute("src", "img/icons/book.svg");
    btnWork.setAttribute("src", "img/icons/work-hover.png");
    btnProyects.setAttribute("src", "img/icons/proyects.svg");
}
function proyectsHover(){
    btnHome.setAttribute("src", "img/icons/home.svg");
    btnAbout.setAttribute("src", "img/icons/About-me.svg");
    btnBook.setAttribute("src", "img/icons/book.svg");
    btnWork.setAttribute("src", "img/icons/work.svg");
    btnProyects.setAttribute("src", "img/icons/proyects-hover.png");
}

