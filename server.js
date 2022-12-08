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
const navs = document.querySelector('aside')



features.addEventListener('click', ()=>{

     prodList.style.top = '-350px'
     resList.style.top = '-350px'

    if (featList.style.top = '-350px') {
        featList.style.top = '20px'
        featList.style.opacity ='1'
    }else{
        featList.style.top = '-350px'
    }
})

resources.addEventListener('click', ()=>{

    featList.style.top = '-350px'
     prodList.style.top = '-350px'

    if (resList.style.top = '-350px') {
        resList.style.top = '20px'
        resList.style.opacity ='1'
    }else if(resList.style.top = '20px'){
        resList.style.top = '-350px'
    }
})
// resources.addEventListener('click', ()=>{

//     if (resList.style.top = '20px') {
//         resList.style.top = '-350px'
//         resList.style.opacity ='1'
//     }
// })
products.addEventListener('click', ()=>{

    featList.style.top = '-350px'
    resList.style.top = '-350px'

    prodList.style.top = '-350px'
    if (prodList.style.top = '-350px') {
        prodList.style.top = '20px'
        prodList.style.opacity ='1'
    }else{
        prodList.style.top = '-350px'
    }
})

// openNav.style.display = 'flex'
//  closeNav.style.display = 'none'
//  mobileMenu.style.display = 'none'

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

navs.addEventListener('mouseout', ()=>{
    prodList.style.top = '-350px'
    resList.style.top = '-350px'
    featList.style.top = '-350px'
})