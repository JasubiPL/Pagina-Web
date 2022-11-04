
//alert("Conectado");
const iconNav = document.querySelectorAll(".iconNav");

function defaultIcons(){
    for(let ico of iconNav){
        if(ico.classList.contains("btnHome")){
            ico.setAttribute("src","./img/icons/home.png");
           }
           if(ico.classList.contains("btnAbout")){
            ico.setAttribute("src","./img/icons/About-me.png");
           }
           if(ico.classList.contains("btnBook")){
            ico.setAttribute("src","./img/icons/book.png");
           }
           if(ico.classList.contains("btnWork")){
            ico.setAttribute("src","./img/icons/work.png");
           }
           if(ico.classList.contains("btnProyects")){
            ico.setAttribute("src","./img/icons/Proyects.png");
           }
    }
}


const cambiarIcono = function (){
   
   if(this.classList.contains("btnHome")){
    defaultIcons(); 
    this.setAttribute("src","./img/icons/home-hover.png");
    return;
   }
   if(this.classList.contains("btnAbout")){
    defaultIcons();
    this.setAttribute("src","./img/icons/About-me-hover.png");
    return;
   }
   if(this.classList.contains("btnBook")){
    defaultIcons();
    this.setAttribute("src","./img/icons/book-hover.png");
    return;
   }
   if(this.classList.contains("btnWork")){
    defaultIcons();
    this.setAttribute("src","./img/icons/work-hover.png");
    return;
   }
   if(this.classList.contains("btnProyects")){
    defaultIcons();
    this.setAttribute("src","./img/icons/Proyects-hover.png");
    return;
   }
   
   
}

iconNav.forEach(icon => {
    icon.addEventListener("click", cambiarIcono);
});

/*----Banner Video----*/
let video = document.querySelector(".bannerVideo ");
setTimeout(()=>{video.style.opacity = "1"},1000);
let baner = document.querySelector(".contentainerBannerInfo");
setTimeout(()=>{baner.style.opacity = "1"},2000);