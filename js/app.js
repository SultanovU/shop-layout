let menu = document.querySelector('.menu_icon');
let navlist = document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}