'use strict';

/** Webpage Elements */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const navBar = document.querySelector('.nav__links');

/** Modal Window Functions */

const openModal = function (event) {
  // by defualt it moves to the top of the page
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}; // end openModal

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}; // end closeModal

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/**  Button / Smooth Scrolling  */

// Events

btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();

  // Scrolling

  // old school way
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });

  // modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

/** Page Navigation */

// using event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

navBar.addEventListener('click', function (event) {
  // use event target
  // use this to figure out which element this event originated from
  event.preventDefault();
  // Matching Strategy
  if (
    event.target.classList.contains('nav__link') &&
    !event.target.classList.contains('nav__link--btn')
  ) {
    const id = event.target.getAttribute('href');
    // look into why this is not always working
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  } // end if
});

/** Tabbed component */

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// more event delegation

tabsContainer.addEventListener('click', function (event) {
  // Matching Strategy
  // need to select parent element, use the closest method
  const clicked = event.target.closest('.operations__tab');

  // ignore clicks not on button, Guard clause
  if (!clicked) {
    return;
  } // end if

  // first remove active from all, then add to the clicked tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  // remove content
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Active Tab
  clicked.classList.add('operations__tab--active');

  // Activated content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  // actibe
  console.log(clicked);
});
