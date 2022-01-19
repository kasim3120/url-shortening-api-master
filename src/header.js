let menu = document.getElementById('menu-bar')
let hamburger = document.querySelector('.hamburger')

const showMenu = () => {
    if(menu.style.overflow === 'hidden'){
        menu.style.overflow === 'visible';
        console.log('123')
    }
}
hamburger.addEventListener('click', showMenu)

const li = document.createElement('li')
const searchEvent = new Event('search',function(e){
    
})