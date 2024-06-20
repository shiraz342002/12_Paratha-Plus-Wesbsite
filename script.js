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

