const menu = document.querySelector('.menu')
const features = document.querySelector('.features')
let ficon = document.querySelector('.ficon')
const resources = document.querySelector('.resources')
let ricon = document.querySelector('.ricon')
const products = document.querySelector('.products')
let picon = document.querySelector('.picon')

const featList = document.querySelector('.features-list')
const prodList = document.querySelector('.products-list')
const resList = document.querySelector('.resources-list')


const openNav = document.querySelector('#bar')
const closeNav = document.querySelector('#times')
const mobileMenu = document.querySelector('.sm-menu')
const backdrop = document.querySelector('.bkdrop')
const body = document.querySelector('body')

 ficon.style.rotate ='0deg'
ricon.style.rotate ='0deg'
picon.style.rotate ='0deg'

features.addEventListener('mouseenter', ()=>{

     prodList.style.top = '-350px'
     resList.style.top = '-350px'
     backdrop.style.display='block'
     body.style.overflow= 'hidden'
     if (ficon.style.rotate ='0deg') {
            ficon.style.rotate ='180deg'
            ricon.style.rotate ='0deg'
            picon.style.rotate ='0deg'
     }

    if (featList.style.top = '-350px') {
        featList.style.top = '20px'
        featList.style.opacity ='1'

    }
})

resources.addEventListener('mouseenter', ()=>{

    featList.style.top = '-350px'
     prodList.style.top = '-350px'
     backdrop.style.display='block'
     body.style.overflow= 'hidden'
      
    if (ricon.style.rotate ='0deg') {
            ficon.style.rotate ='0deg'
            ricon.style.rotate ='180deg'
            picon.style.rotate ='0deg'
     }

    if (resList.style.top = '-350px') {
        resList.style.top = '20px'
        resList.style.opacity ='1'

    }
})
products.addEventListener('mouseenter', ()=>{

    featList.style.top = '-350px'
    resList.style.top = '-350px'
    backdrop.style.display='block'
    body.style.overflow= 'hidden'
    prodList.style.top = '-350px'
       
    if (picon.style.rotate ='0deg') {
            ficon.style.rotate ='0deg'
            ricon.style.rotate ='0deg'
            picon.style.rotate ='180deg'
     }

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
    }, 5000);




    // watch demo scroll down
    let blgContent = document.querySelector('.blg-content')
    let watchnow = document.querySelector('.watchnow')

    watchnow.addEventListener('click', ()=>{
        window.scrollTo(1700,1700)
         if (video.paused) {    
        video.play()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-pause-circle-outline"></span>'
    }else{
        video.pause()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-play-circle-outline"></span>'
    }
    })

    let watchnow2 = document.querySelector('.watchnow2')

    watchnow2.addEventListener('click', ()=>{
        window.scrollTo(1700,1700)
               if (video.paused) {    
        video.play()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-pause-circle-outline"></span>'
    }else{
        video.pause()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-play-circle-outline"></span>'
    }
    })

    let watchnow3 = document.querySelector('.watchnow3')

    watchnow3.addEventListener('click', ()=>{
        window.scrollTo(1700,1700)
               if (video.paused) {    
        video.play()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-pause-circle-outline"></span>'
    }else{
        video.pause()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-play-circle-outline"></span>'
    }
    })

    let watchnow4 = document.querySelector('.watchnow4')

    watchnow4.addEventListener('click', ()=>{
        window.scrollTo(1700,1700)
               if (video.paused) {    
        video.play()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-pause-circle-outline"></span>'
    }else{
        video.pause()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-play-circle-outline"></span>'
    }
    })



// play ai-assisyed-copy-writting video

const videobox = document.querySelector('.video-box')
const video = videobox.querySelector('.video')
const play = videobox.querySelector('.play')

play.addEventListener('click', ()=>{
    if (video.paused) {    
        video.play()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-pause-circle-outline"></span>'
    }else{
        video.pause()
        play.innerHTML='<span class="iconify" data-icon="ic:outline-play-circle-outline"></span>'
    }
})


// hide and display more contents

const toggle1 = document.querySelector('.hide1')
const toggle2 = document.querySelector('.hide2')
const toggle3 = document.querySelector('.hide3')
const toggle4 = document.querySelector('.hide4')
const toggle5 = document.querySelector('.hide5')
const toggle6 = document.querySelector('.hide6')

const morebtn1 = document.querySelector('.more1')
const morebtn2 = document.querySelector('.more2')
const morebtn3 = document.querySelector('.more3')
const morebtn4 = document.querySelector('.more4')
const morebtn5 = document.querySelector('.more5')
const morebtn6 = document.querySelector('.more6')

const lessbtn1 = document.querySelector('.less1')
const lessbtn2 = document.querySelector('.less2')
const lessbtn3 = document.querySelector('.less3')
const lessbtn4 = document.querySelector('.less4')
const lessbtn5 = document.querySelector('.less5')
const lessbtn6 = document.querySelector('.less6')


morebtn1.addEventListener('click', ()=>{
        if (toggle1.style.display = 'none') {
            toggle1.style.display = 'inline'
            morebtn1.style.display = 'none'
            toggle2.style.display = 'none'
            toggle3.style.display = 'none'
            toggle4.style.display = 'none'
            toggle5.style.display = 'none'
            toggle6.style.display = 'none'

             morebtn5.style.display = 'inline'
            morebtn4.style.display = 'inline'
            morebtn3.style.display = 'inline'
            morebtn2.style.display = 'inline'
            morebtn6.style.display = 'inline'
        }else{
            toggle1.style.display = 'none'
        }
})
lessbtn1.addEventListener('click', ()=>{

            toggle1.style.display = 'none'
            morebtn1.style.display = 'inline'

})

morebtn2.addEventListener('click', ()=>{
        if (toggle2.style.display = 'none') {
            toggle2.style.display = 'inline'
            morebtn2.style.display = 'none'
             toggle1.style.display = 'none'
            toggle3.style.display = 'none'
            toggle4.style.display = 'none'
            toggle5.style.display = 'none'
            toggle6.style.display = 'none'

             morebtn5.style.display = 'inline'
            morebtn4.style.display = 'inline'
            morebtn3.style.display = 'inline'
            morebtn6.style.display = 'inline'
            morebtn1.style.display = 'inline'
        }else{
            toggle2.style.display = 'none'
        }
})
lessbtn2.addEventListener('click', ()=>{

            toggle2.style.display = 'none'
            morebtn2.style.display = 'inline'

})

morebtn3.addEventListener('click', ()=>{
        if (toggle3.style.display = 'none') {
            toggle3.style.display = 'inline'
            morebtn3.style.display = 'none'
             toggle2.style.display = 'none'
            toggle1.style.display = 'none'
            toggle4.style.display = 'none'
            toggle5.style.display = 'none'
            toggle6.style.display = 'none'

             morebtn5.style.display = 'inline'
            morebtn4.style.display = 'inline'
            morebtn6.style.display = 'inline'
            morebtn2.style.display = 'inline'
            morebtn1.style.display = 'inline'
        }else{
            toggle3.style.display = 'none'
        }
})
lessbtn3.addEventListener('click', ()=>{

            toggle3.style.display = 'none'
            morebtn3.style.display = 'inline'

})

morebtn4.addEventListener('click', ()=>{
        if (toggle4.style.display = 'none') {
            toggle4.style.display = 'inline'
            morebtn4.style.display = 'none'
             toggle2.style.display = 'none'
            toggle3.style.display = 'none'
            toggle1.style.display = 'none'
            toggle5.style.display = 'none'
            toggle6.style.display = 'none'
             morebtn5.style.display = 'inline'
            morebtn6.style.display = 'inline'
            morebtn3.style.display = 'inline'
            morebtn2.style.display = 'inline'
            morebtn1.style.display = 'inline'
        }else{
            toggle4.style.display = 'none'
        }
})
lessbtn4.addEventListener('click', ()=>{

            toggle4.style.display = 'none'
            morebtn4.style.display = 'inline'

})

morebtn5.addEventListener('click', ()=>{
        if (toggle5.style.display = 'none') {
            toggle5.style.display = 'inline'
            morebtn5.style.display = 'none'
             toggle2.style.display = 'none'
            toggle3.style.display = 'none'
            toggle4.style.display = 'none'
            toggle1.style.display = 'none'
            toggle6.style.display = 'none'

             morebtn6.style.display = 'inline'
            morebtn4.style.display = 'inline'
            morebtn3.style.display = 'inline'
            morebtn2.style.display = 'inline'
            morebtn1.style.display = 'inline'
        }else{
            toggle5.style.display = 'none'
        }
})
lessbtn5.addEventListener('click', ()=>{

            toggle5.style.display = 'none'
            morebtn5.style.display = 'inline'

})

morebtn6.addEventListener('click', ()=>{
        if (toggle6.style.display = 'none') {
            toggle6.style.display = 'inline'
            morebtn6.style.display = 'none'
            toggle2.style.display = 'none'
            toggle3.style.display = 'none'
            toggle4.style.display = 'none'
            toggle5.style.display = 'none'
            toggle1.style.display = 'none'

            morebtn5.style.display = 'inline'
            morebtn4.style.display = 'inline'
            morebtn3.style.display = 'inline'
            morebtn2.style.display = 'inline'
            morebtn1.style.display = 'inline'
        }else{
            toggle6.style.display = 'none'
        }
})
lessbtn6.addEventListener('click', ()=>{

            toggle6.style.display = 'none'
            morebtn6.style.display = 'inline'

})


//help center display

const getHelp = document.querySelector('.get-help')
const helpModal = document.querySelector('.help-modal')
const helpBtn = document.querySelector('.help-btn')
const loading = document.querySelector('.loading')

getHelp.addEventListener('click', ()=>{
    helpModal.style.display = 'block'
    body.style.overflow ='hidden'

})

helpBtn.addEventListener('click',()=>{
     body.style.overflow ='auto'
     loading.style.display ='flex'
})

