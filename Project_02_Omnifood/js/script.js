//////////////////////////////////////////
//set current year
document.getElementById('currentDate').textContent = new Date().getFullYear();

//////////////////////////////////////////
//make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
