const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
   activeSlide++

//    check for the end
    if(activeSlide > slides.length - 1){
     activeSlide = 0   
    }

    setBgToBody()
    setActiveSlide()

})

leftBtn.addEventListener('click', () => {
    activeSlide--
 
 //    check for the end
     if(activeSlide < 0){
      activeSlide = slides.length - 1  
     }
 
     setBgToBody()
     setActiveSlide()
 
 })
 

setBgToBody()

// set background to body
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}