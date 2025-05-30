document.addEventListener('DOMContentLoaded',() =>{
    const menu = document.querySelector('#menu')
    const list = document.querySelector('#menu-list')

    menu.addEventListener('click',() =>{
        list.classList.toggle('show')
        console.log('show')
    })

})