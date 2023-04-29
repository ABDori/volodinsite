document.querySelector('.burger').addEventListener('click',function (e) {

      document.querySelector('.main_nav').classList.toggle('hidden');
      document.querySelector('.burger').classList.toggle('active');
      document.querySelector('body').classList.toggle('fixed');
      e.preventDefault();
});
