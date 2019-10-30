window.onscroll = function(){
    myfunction();
}

//DOM select
var nav = document.querySelector("nav");
var features = document.querySelector(".features");
var ul = document.querySelector("ul");
var icon = document.querySelector(".mobile-icon");

icon.addEventListener("click",function(){
    ul.classList.toggle("active");
})

function myfunction(){
    var dftop = window.pageYOffset;//distance from top
    if(dftop > features.offsetTop)
        nav.classList.add("sticky");
    else if(dftop < features.offsetTop)
        nav.classList.remove("sticky");
}