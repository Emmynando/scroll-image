const container = document.querySelector('.container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.button-up');
const downButton = document.querySelector('.button-down');
const slideLength = rightSlide.querySelectorAll('div').length;

let slideIndexLength = 0;
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) =>{
    const sliderHeight = container.clientHeight;
    if(direction === 'up'){
        slideIndexLength++;
    if(slideIndexLength > slideLength - 1){
        slideIndexLength = 0;
    }
    rightSlide.style.transform = `translateY(-${slideIndexLength * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${slideIndexLength * sliderHeight}px)`;
    }
    if(direction === 'down'){
        slideIndexLength--;
    if(slideIndexLength < 0){
        slideIndexLength = slideLength - 1;
    }
    rightSlide.style.transform = `translateY(-${slideIndexLength * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${slideIndexLength * sliderHeight}px)`;
}
};