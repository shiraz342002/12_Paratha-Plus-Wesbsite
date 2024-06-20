//For implementing Responsive buttons
const nav_menu=document.querySelector('.nav_menu');
const nav_toggle=document.querySelector('.toggle_nav');
const nav_close=document.querySelector('.close_nav');
if(nav_toggle){
    nav_toggle.addEventListener('click',function(){
        nav_menu.classList.add('show_menu');
    })
}
if(nav_close){
    nav_close.addEventListener('click',()=>{
        nav_menu.classList.remove('show_menu')
    })
}
//To show responsive navbar
const nav_link=document.querySelectorAll('.nav_links');
const action_link=()=>{
    const nav_menu=document.querySelector('.nav_menu')
    nav_menu.classList.remove('show_menu');
}
nav_link.forEach(n=> n.addEventListener('click',action_link))


//To show a boxshadow if scroll below header
const shadowHeader=()=>{
    const header = document.querySelector('.header')
    if(window.scrollY>=50){
        header.classList.add('shadow_header');
    }else{
        header.classList.remove('shadow_header');
    }
}
window.addEventListener('scroll',shadowHeader)