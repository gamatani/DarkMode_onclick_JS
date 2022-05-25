function darkmode(){
    let body_dark = document.querySelector('body')
    body_dark.classList.toggle('body_dark')

    let items = document.querySelectorAll('.item')
    for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('item_dark')
    }

    let itemdark = document.querySelectorAll('h2')
    for(let i = 0; i < itemdark.length; i++){
        itemdark[i].classList.toggle('item_darktext')
    }

    let h1dark = document.querySelector('h1')
    h1dark.classList.toggle('h1_dark')

    let paragrafo = document.querySelectorAll('p')
    for(let i = 0; i < paragrafo.length; i++){
        paragrafo[i].classList.toggle('item_darktext')
    }
    
    let slidertext = document.querySelector('.slider')
    slidertext.classList.toggle('item_darktext')
    
}