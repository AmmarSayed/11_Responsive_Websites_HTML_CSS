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

//////////////////////////////////////////
//smooth scrolling animation

document.body.addEventListener('click', e => {
  if (e.target.hasAttribute('href')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    //check if the href starts with # and length
    if (href.startsWith('#') && href.length > 1) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //close the nav menu if was link in nav-link was clicked
    if (e.target.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  }
});
