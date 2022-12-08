const menu = document.querySelector('.menu')
const features = document.querySelector('.features')
const resources = document.querySelector('.resources')
const products = document.querySelector('.products')

const featList = document.querySelector('.features-list')
const prodList = document.querySelector('.products-list')
const resList = document.querySelector('.resources-list')


const openNav = document.querySelector('#bar')
const closeNav = document.querySelector('#times')
const mobileMenu = document.querySelector('.sm-menu')
const backdrop = document.querySelector('.bkdrop')



features.addEventListener('click', ()=>{

     prodList.style.top = '-350px'
     resList.style.top = '-350px'
     backdrop.style.display='block'

    if (featList.style.top = '-350px') {
        featList.style.top = '20px'
        featList.style.opacity ='1'
    }
})

resources.addEventListener('click', ()=>{

    featList.style.top = '-350px'
     prodList.style.top = '-350px'
     backdrop.style.display='block'

    if (resList.style.top = '-350px') {
        resList.style.top = '20px'
        resList.style.opacity ='1'
    }
})
products.addEventListener('click', ()=>{

    featList.style.top = '-350px'
    resList.style.top = '-350px'
    backdrop.style.display='block'

    prodList.style.top = '-350px'
    if (prodList.style.top = '-350px') {
        prodList.style.top = '20px'
        prodList.style.opacity ='1'
    }
})

backdrop.addEventListener('mouseover', ()=>{
    prodList.style.top = '-350px'
    resList.style.top = '-350px'
    featList.style.top = '-350px'
    backdrop.style.display='none'
})

openNav.addEventListener('click', ()=>{
    if ( mobileMenu.style.display = 'none') { 
        mobileMenu.style.display = 'block'
        openNav.style.display = 'none'
        closeNav.style.display = 'flex'
    }
})
closeNav.addEventListener('click', ()=>{
    if ( mobileMenu.style.display = 'block') {
        mobileMenu.style.display = 'none'
        openNav.style.display = 'flex'
        closeNav.style.display = 'none'
    }
})
