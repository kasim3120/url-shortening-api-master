// let menu = document.getElementById('menu-bar')
// let hamburger = document.querySelector('.hamburger')



// const showMenu = () => {
//     if(menu.style.overflow === 'hidden'){
//         menu.style.overflow === 'visible';
//         console.log('123')
//     }
// }
// hamburger.addEventListener('click', showMenu)

// const li = document.createElement('li')
// const searchEvent = new Event('search',function(e){

// })

let navbarNav = document.getElementById('navbarNav')
let btnNavbar = document.querySelector('.navbar-toggler')

const navToggler = () => {
    navbarNav.style.display = navbarNav.style.display === 'block'? 'none':'block';
};

btnNavbar.addEventListener('click',navToggler)

let searchInput = 
    document.querySelector('.search-bar-input').childNodes
let searchEmpty = 
    document.querySelector('.search-bar-prompt')
let searchButton = 
    document.querySelector('.s')

const errorPrompt = () => {
    if(searchInput[1].value === ''){
        searchInput[1].style.border = '2px solid hsl(0, 87%, 67%)';
        searchEmpty.style.visibility = 'visible';
    }
}
searchInput[3].addEventListener('click', errorPrompt)

let searchTable = document.querySelector('.search-table').childNodes;
let enter = () => {
    let addText = (text=searchInput[1].value, link=searchInput[1].length) => {
        `<li class='search-table-text'>
            <p>${text}</p>
            <a>${link}</a>
            <button class=''>Copy</button>
        </li>`
        }
        return searchTable[1].appendChild = addText
}

searchInput[3].addEventListener('click',enter)