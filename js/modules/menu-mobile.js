export default function initMenuMobile(){
    const btn = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    function openMenu(){
        menuList.classList.add('active')
        this.classList.add('active')
    }

btn.addEventListener('click', openMenu);
}

