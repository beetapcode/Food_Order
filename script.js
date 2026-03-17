let menu=document.getElementById('menu-bar');
console.log(menu);
let navbar=document.querySelector('.navbar');
let section=document.querySelectorAll('section');
menu.onclick=function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
for (let i = 0; i < section.length; i++) {
    section[i].oncick=function(){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }    
}
// lan chuot hien nut top
var scrolltop=document.getElementById("scroll-top");
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 150){
        scrolltop.classList.add('hiennut');
    }
    else{
        scrolltop.classList.remove('hiennut');
    }
})

