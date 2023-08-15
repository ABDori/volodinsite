//burger

document.querySelector('.burger').addEventListener('click',function (e) {

      document.querySelector('.main_nav').classList.toggle('hidden');
      document.querySelector('.burger').classList.toggle('active');
      document.querySelector('body').classList.toggle('fixed');
      e.preventDefault();
});


//intersection observer

const observedSec = document.querySelectorAll('.section_container');
const options = {
      root: null,
      threshold: 0.2,
      rootMargin: "-100px"
};

const observer = new IntersectionObserver(function (entries, observer){
      entries.forEach(entry => {
            if (entry.isIntersecting) {
                  entry.target.classList.remove('moved');
              }
})}, options);
 

observedSec.forEach(observedSec => {
      observer.observe(observedSec);
});
