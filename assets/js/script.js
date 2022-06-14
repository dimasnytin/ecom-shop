'use strict';
// модальное окно подписки
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-model-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () {
  modal.classList.add('closed')
}

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);
