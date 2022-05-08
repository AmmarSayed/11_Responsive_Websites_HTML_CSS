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

///////////////////////////////////////
// add sticky nav class on if the hero section moves out of the view port , using intersection observer

const heroEl = document.querySelector('#hero');

const obs = new IntersectionObserver(
  function (enries) {
    //list of entires we take the first element
    const ent = enries[0];

    if (!ent.isIntersecting)
      document.querySelector('body').classList.add('sticky');
    if (ent.isIntersecting) {
      document.querySelector('body').classList.remove('sticky');
    }
  },
  {
    //where the element should be appearing or not
    //means we observe the element inside the viewport
    root: null,
    // as soon as 0% of the element is inisde the viewport
    threshold: 0,
    //action at -80px before end is completely outside the viewport
    rootMargin: '-80px',
  }
);
obs.observe(heroEl);
