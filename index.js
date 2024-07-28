const bar=document.getElementById("bar");
const navbar=document.getElementById("navbar");

if(bar){
    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}

const close=document.getElementById("close");
if(close)
{
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}