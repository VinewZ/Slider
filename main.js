const slides = document.querySelectorAll('#slider .descContainer')
let slideEnd  =  slides.length
let currentSlide = 0

function nextSlide(){
    console.log(currentSlide)
    slides[currentSlide].classList.remove('activeSlide')
    currentSlide++
    if (currentSlide == slideEnd){
        currentSlide = 0
    }
    slides[currentSlide].classList.add('activeSlide')
}

function prevSlide(){
    console.log(currentSlide)
    slides[currentSlide].classList.remove('activeSlide')
    currentSlide--
    if (currentSlide < 0){
        currentSlide = slideEnd -1
    }
    slides[currentSlide].classList.add('activeSlide')
}