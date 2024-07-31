// script for header foooter

document.addEventListener("DOMContentLoaded",function(){
    fetch('assets/header.html').then(Response=> Response.text())
    .then(data=>{
        document.getElementById('header-content').innerHTML=data;
    });

    fetch('assets/footer.html').then(Response => Response.text())
    .then(data => {
        document.getElementById('footer-content').innerHTML=data;
    });
});



const bar=document.getElementById("bar");
const navbar=document.getElementById("navbar");

if(bar){
    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
    });
}

const close=document.getElementById("close");
if(close)
{
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    });
}
 

// singel_product script

const main_img=document.getElementById("main-image");
const small_img=document.getElementsByClassName("small-image");

for(let i=0; i<small_img.length;i++){
small_img[i].onclick=function() {
    main_img.src=small_img[i].src;
}
}