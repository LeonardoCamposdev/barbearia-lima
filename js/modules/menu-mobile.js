export default function initMenuMobile(){
    const btn = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelectorAll('[data-menu="list"]');
    console.log(menuList)

    function openMenu({ target }){
        menuList.forEach((lista)=>{
            lista.classList.add('active')
        })
        menuList.classList.add('active')
    }

btn.addEventListener('click', openMenu);
}

