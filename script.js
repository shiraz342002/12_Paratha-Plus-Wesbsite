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

//Make the scroll icon appear if we are the bottom
const scrollup=()=>{
    const scroll_up=document.querySelector('.scroll_up')
    if(this.scrollY>=350){
        scroll_up.classList.add('show_scroll_btn')
    }
    else{
        scroll_up.classList.remove('show_scroll_btn')
    }
}
window.addEventListener('scroll',scrollup);

const sections = document.querySelectorAll('section[id]');
const headerHeight = 45; // Adjust based on your header height
const offsetTrigger = 300; // Adjust this value to trigger the class earlier

const scroll_active = () => {
    const scroll_down = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - headerHeight - offsetTrigger;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if (scroll_down >= sectionTop && scroll_down < sectionTop + sectionHeight) {
            sectionClass.classList.add('active_link');
        } else {
            sectionClass.classList.remove('active_link');
        }
    });
};

window.addEventListener('scroll', scroll_active);

