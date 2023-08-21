//slider animation

const prev = document.querySelector('.slider_img__prev');
const center = document.querySelector('.slider_img__center');
const next = document.querySelector('.slider_img__next');

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

const sliderImages = document.querySelectorAll('.slider_img');
let i = 0;

//finding the "center"
let findCenter = function () {
      sliderImages.forEach((sliderImage, index) => {
          if (sliderImage.classList.contains('slider_img__center')) {
              i = index;
          }
      });
  
      if (i < 0) {
          i = sliderImages.length - 1;
      } else if (i >= sliderImages.length) {
          i = 0;
      }
  };
  
  //previous button
  document.querySelector('.prev').addEventListener('click', function() {
      console.log(i);
      findCenter();
  
      sliderImages[i].classList.remove('slider_img__center');
      sliderImages[i].classList.remove('slider_img__visible');
      i--;
      if (i < 0) {
          i = sliderImages.length - 1;
      }
      sliderImages[i].classList.add('slider_img__center');
      sliderImages[i].classList.add('slider_img__visible');
  });
  
  //next button
  document.querySelector('.next').addEventListener('click', function() {
      console.log(i);
      findCenter();
  
      sliderImages[i].classList.remove('slider_img__center');
      sliderImages[i].classList.remove('slider_img__visible');
      i++;
      if (i >= sliderImages.length) {
          i = 0;
      }
      sliderImages[i].classList.add('slider_img__center');
      sliderImages[i].classList.add('slider_img__visible');
  });
