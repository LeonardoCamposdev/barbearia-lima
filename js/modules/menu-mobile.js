import outsideClick from "./outsideClick.js";
export default function initMenuMobile(){
    const btn = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function openMenu(){
        menuList.classList.add('active')
        this.classList.add('active')

    outsideClick(menuList,'click', ()=>{
        menuList.classList.remove('active');
        this.classList.remove('active')
    })
    }

btn.addEventListener('click', openMenu);
}

