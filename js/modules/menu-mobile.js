export default function initMenuMobile(){
    const btn = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const redesList = document.querySelector('#lista-redes');
    console.log(menuList)

    function openMenu(){
        menuList.classList.add('active')
        redesList.classList.add('active')
        this.classList.add('active')
    }

btn.addEventListener('click', openMenu);
}

