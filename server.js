const menu = document.querySelector('.menu')
const features = document.querySelector('.features')
const resources = document.querySelector('.resources')
const products = document.querySelector('.products')

const featList = document.querySelector('.features-list')
const prodList = document.querySelector('.products-list')
const resList = document.querySelector('.resources-list')


features.addEventListener('click', ()=>{

     prodList.style.top = '-350px'
     resList.style.top = '-350px'

    if (featList.style.top = '-350px') {
        featList.style.top = '10px'
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
    }else{
        resList.style.top = '-350px'
    }
})
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