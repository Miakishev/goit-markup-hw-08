(() => {
   const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
   };

   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);



   function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
   }

})();

(() => {
   const refs2 = {
      openModalBtn2: document.querySelector('[data-modal-open2]'),
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
      modal2: document.querySelector('[data-modal2]'),
   };

   refs2.openModalBtn2.addEventListener('click', toggleModal);
   refs2.closeModalBtn2.addEventListener('click', toggleModal);



   function toggleModal() {
      refs2.modal2.classList.toggle('is-hidden');
   }

})();

