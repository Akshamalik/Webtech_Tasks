document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('navModal');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
  
    modal.addEventListener('show.bs.modal', function () {
      hamburgerIcon.classList.add('d-none');
      closeIcon.classList.remove('d-none');
    });
  
    modal.addEventListener('hide.bs.modal', function () {
      hamburgerIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    });
  });