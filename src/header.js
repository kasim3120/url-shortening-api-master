//Mobile menu display
let navbarNav = document.getElementById('navbarNav')
let btnNavbar = document.querySelector('.navbar-toggler')

const navToggler = () => {
    navbarNav.style.display = navbarNav.style.display === 'block'? 'none':'block';
};

btnNavbar.addEventListener('click',navToggler)

//search empty error
let searchInput = document.querySelector('.search-bar-input').childNodes
let searchEmpty = document.querySelector('.search-bar-prompt')
let searchBtn = document.querySelector('.search-bar-button')
const errorPrompt = () => {
    if(searchInput[1].value === ''){
        searchInput[1].style.border = '3px solid hsl(0, 87%, 67%)';
        searchEmpty.style.visibility = 'visible';
        
    }else{
        searchInput[1].style.border = 'none';
        searchEmpty.style.visibility = 'hidden';
        
    }
}

//search 
let searchTable = document.querySelector('.search-table');

const addNode = () => {
    const searchAPI = async() => {
        const url = `https://api.shrtco.de/v2/shorten?url=${searchInput[1].value}/`
        let res = await fetch(url)
        let data = await res.json()
        let shortURL = data.result.full_short_link2
        let newAText = document.createTextNode(shortURL)
        newA.appendChild(newAText)
        console.log(data)
        return searchAPI
        ,10000}
    searchAPI()
    let newLi = document.createElement('li')
    let newP = document.createElement('p')
    let newA = document.createElement('a')
    let newBtn = document.createElement('button')
    let newSpan = document.createElement('span')
    let newText = document.createTextNode(searchInput[1].value)
    let btnText = document.createTextNode('copy')
    newLi.appendChild(newP)
    newP.appendChild(newText)
    newLi.appendChild(newSpan)
    newLi.appendChild(newA)
    newBtn.appendChild(btnText)
    newLi.appendChild(newBtn)
    newLi.classList.add('search-table-context')
    newP.classList.add('search-table-text')
    newSpan.classList.add('search-line')
    newA.classList.add('search-table-link')
    newBtn.classList.add('copy')
    searchTable.appendChild(newLi)
    newBtn.addEventListener('click', function(){
        newBtn.style.background = 'hsl(260, 30%, 20%)'
        newBtn.innerHTML = 'Copied!'
        })
    searchInput[1].value = ''
}

searchInput[1].addEventListener('keypress', errorPrompt)
searchBtn.addEventListener('click', function(){
    if(searchInput[1].value === ''){
        return errorPrompt()
    }else{
        return addNode()
    }
})


console.log(`未解決問題: 搜尋相同網址BUG , Copy未建立動作`)