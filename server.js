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
const body = document.querySelector('body')



features.addEventListener('click', ()=>{

     prodList.style.top = '-350px'
     resList.style.top = '-350px'
     backdrop.style.display='block'
     body.style.overflow= 'hidden'


    if (featList.style.top = '-350px') {
        featList.style.top = '20px'
        featList.style.opacity ='1'
    }
})

resources.addEventListener('click', ()=>{

    featList.style.top = '-350px'
     prodList.style.top = '-350px'
     backdrop.style.display='block'
     body.style.overflow= 'hidden'

    if (resList.style.top = '-350px') {
        resList.style.top = '20px'
        resList.style.opacity ='1'
    }
})
products.addEventListener('click', ()=>{

    featList.style.top = '-350px'
    resList.style.top = '-350px'
    backdrop.style.display='block'
    body.style.overflow= 'hidden'

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
    body.style.overflow ='auto'
})

openNav.addEventListener('click', ()=>{
    if ( mobileMenu.style.display = 'none') { 
        mobileMenu.style.display = 'block'
        openNav.style.display = 'none'
        closeNav.style.display = 'flex'
        body.style.overflow= 'hidden'
    }
})
closeNav.addEventListener('click', ()=>{
    if ( mobileMenu.style.display = 'block') {
        mobileMenu.style.display = 'none'
        openNav.style.display = 'flex'
        closeNav.style.display = 'none'
        body.style.overflow= 'auto'
    }
})



// displaying where you belong contents

const creatorsBtn = document.querySelector('.createbtn')
const publishersBtn = document.querySelector('.publishbtn')
const businessBtn = document.querySelector('.businessbtn')
const developersBtn = document.querySelector('.developerbtn')

const creatorsCont = document.querySelector('.create-cont')
const publishersCont = document.querySelector('.publish-cont')
const businessCont = document.querySelector('.business-cont')
const developersCont = document.querySelector('.developer-cont')

creatorsCont.style.right = '0'
creatorsBtn.addEventListener('click',()=>{
    creatorsCont.style.right = '0'
    publishersCont.style.right = '-1500px'
    businessCont.style.right = '-1500px'
    developersCont.style.right = '-1500px'
})

publishersBtn.addEventListener('click',()=>{
    publishersCont.style.position = 'absolute'
    publishersCont.style.right = '0px'
    creatorsCont.style.right = '-1500px'
     businessCont.style.right = '-1500px'
    developersCont.style.right = '-1500px'
})
businessBtn.addEventListener('click',()=>{
    publishersCont.style.right = '-1500px'
    creatorsCont.style.right = '-1500px'
     businessCont.style.position = 'absolute'
     businessCont.style.right = '0px'
    developersCont.style.right = '-1500px'
})
developersBtn.addEventListener('click',()=>{
    publishersCont.style.right = '-1500px'
    creatorsCont.style.right = '-1500px'
     businessCont.style.right = '-1500px'
      developersCont.style.position = 'absolute'
    developersCont.style.right = '0px'
})