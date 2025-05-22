export default function OutsideClick(element,event,callback){
    const html = document.documentElement;
    const outside = 'data-outside';

        if(!html.hasAttribute(outside)){
            setTimeout(()=>{
            html.addEventListener('click',handleOutsideClick);
            html.setAttribute(outside,'');

        function handleOutsideClick({ target }){
            if(!target.contains(element)){
                html.removeEventListener(event, handleOutsideClick);
                html.removeAttribute(outside, '');
            }
            callback();
            }
        })
    }
}



