'use strict';

// lets grab the elements we need first

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // use classList to remove a class modifier such as hidden
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
} // end for

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// you listen globally for a key event
document.addEventListener('keydown', function (event) {
  // check if Escape key was pressed
  // and if modal is open
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } // end if
});
