const slides = document.querySelectorAll('.descContainer')
let currentSlide = 0
let slideEnd = slides.length

function nextSlide(){
    slides[currentSlide].classList.remove('activeSlide')
    currentSlide++
    if(currentSlide == slideEnd){
        currentSlide = 0
    }
    slides[currentSlide].classList.add('activeSlide')
}

function prevSlide(){
    slides[currentSlide].classList.remove('activeSlide')
    currentSlide--
    if(currentSlide < 0){
        currentSlide = slideEnd - 1
    }
    slides[currentSlide].classList.add('activeSlide')
}