const menu = document.querySelector('.menu')
const features = document.querySelector('.features')
const ficon = document.querySelector('.ficon')
const resources = document.querySelector('.resources')
const ricon = document.querySelector('.ricon')
const products = document.querySelector('.products')


const featList = document.querySelector('.features-list')
const prodList = document.querySelector('.products-list')
const picon = document.querySelector('.picon')
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
     ficon.style.rotate ='0deg'
    ricon.style.rotate ='0deg'
    picon.style.rotate ='0deg'


    if (featList.style.top = '-350px') {
        featList.style.top = '20px'
        featList.style.opacity ='1'
        ficon.style.rotate ='180deg'
    }
})

resources.addEventListener('click', ()=>{

    featList.style.top = '-350px'
     prodList.style.top = '-350px'
     backdrop.style.display='block'
     body.style.overflow= 'hidden'
     ficon.style.rotate ='0deg'
    ricon.style.rotate ='0deg'
    picon.style.rotate ='0deg'

    if (resList.style.top = '-350px') {
        resList.style.top = '20px'
        resList.style.opacity ='1'
        ricon.style.rotate ='180deg'

    }
})
products.addEventListener('click', ()=>{

    featList.style.top = '-350px'
    resList.style.top = '-350px'
    backdrop.style.display='block'
    body.style.overflow= 'hidden'
    ficon.style.rotate ='0deg'
    ricon.style.rotate ='0deg'
    picon.style.rotate ='0deg'

    prodList.style.top = '-350px'
    if (prodList.style.top = '-350px') {
        prodList.style.top = '20px'
        prodList.style.opacity ='1'
        picon.style.rotate ='180deg'

    }
})

backdrop.addEventListener('mouseover', ()=>{
    prodList.style.top = '-350px'
    resList.style.top = '-350px'
    featList.style.top = '-350px'
    backdrop.style.display='none'
    body.style.overflow ='auto'

    ficon.style.rotate ='0deg'
    ricon.style.rotate ='0deg'
    picon.style.rotate ='0deg'

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
creatorsBtn.style.background = '#E55B13'
creatorsBtn.addEventListener('click',()=>{
    creatorsCont.style.right = '0'
    publishersCont.style.right = '-1500px'
    businessCont.style.right = '-1500px'
    developersCont.style.right = '-1500px'
    creatorsBtn.style.background = '#E55B13'
    businessBtn.style.background = 'none'
    publishersBtn.style.background = 'none'
    developersBtn.style.background= 'none'
})

publishersBtn.addEventListener('click',()=>{
    publishersCont.style.position = 'absolute'
    publishersCont.style.right = '0px'
    creatorsCont.style.right = '-1500px'
     businessCont.style.right = '-1500px'
    developersCont.style.right = '-1500px'
    creatorsBtn.style.background = 'none'
    businessBtn.style.background = 'none'
    publishersBtn.style.background = '#E55B13'
    developersBtn.style.background = 'none'
})
businessBtn.addEventListener('click',()=>{
    publishersCont.style.right = '-1500px'
    creatorsCont.style.right = '-1500px'
     businessCont.style.position = 'absolute'
     businessCont.style.right = '0px'
    developersCont.style.right = '-1500px'
    creatorsBtn.style.background = 'none'
    businessBtn.style.background = '#E55B13'
    publishersBtn.style.background = 'none'
    developersBtn.style.background = 'none'
})
developersBtn.addEventListener('click',()=>{
    publishersCont.style.right = '-1500px'
    creatorsCont.style.right = '-1500px'
     businessCont.style.right = '-1500px'
      developersCont.style.position = 'absolute'
    developersCont.style.right = '0px'
    creatorsBtn.style.background = 'none'
    businessBtn.style.background= 'none'
    publishersBtn.style.background = 'none'
    developersBtn.style.background = '#E55B13'
})







// creators infinite display 

const creator = document.querySelector('.cr')
const business = document.querySelector('.bs')
const publish = document.querySelector('.ps')
const developer = document.querySelector('.dv')

let playlist1 = ()=>{
    if (business.style.display = 'none' , publish.style.display = 'none', developer.style.display = 'none' ) {
            creator.style.display = 'flex'
    }
}
let playlist2 = ()=>{
     if (creator.style.display = 'none' , publish.style.display = 'none', developer.style.display = 'none' ) {
            business.style.display = 'flex'
    }
}
let playlist3 = ()=>{
     if (business.style.display = 'none' , publish.style.display = 'none', creator.style.display = 'none' ) {
            developer.style.display = 'flex'
    }
}

let playlist4 =()=>{
    if(business.style.display = 'none' , creator.style.display = 'none', developer.style.display = 'none' ) {
            publish.style.display = 'flex'
    }
}


let infinitelist = [playlist1, playlist2, playlist3, playlist4]

    let index = 0
    infinitelist[index]()
    setInterval(() => {
        if(index < infinitelist.length){
                infinitelist[index]()
                index++
        }else if(index = infinitelist.length){
             index=0
        }
    }, 4000);




    // watch demo scroll down

    const watchnow = document.querySelector('.watchnow');

    watchnow.addEventListener('click', ()=>{
        window.scrollTo(2800,2800)
    })
