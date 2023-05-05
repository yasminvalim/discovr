const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    for (let i = 0; i < value; i++) {
      stars[i].classList.toggle('favorite');
    }
  });
});