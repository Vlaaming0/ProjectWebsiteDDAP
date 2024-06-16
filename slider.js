document.addEventListener('DOMContentLoaded', function() {
  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    clickable : true,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 0,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
    }
  });

  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('view-more-icon')) {
      event.target.closest('.tranding-slide').classList.add('flipped');
    } else if (event.target.classList.contains('view-less-btn')) {
      event.target.closest('.tranding-slide').classList.remove('flipped');
    }
  });

  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('sebelumnya') || event.target.classList.contains('selanjutnya') ||
        event.target.classList.contains('swiper-pagination') ||  
      event.target.classList.contains('swiper-pagination-bullet-active'))  {
      const flippedCards = document.querySelectorAll('.tranding-slide.flipped' || '.tranding-slide');
      flippedCards.forEach(function(card) {
        card.classList.remove('flipped');
      });
    }
  });

  


function handleClassChange(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      const target = mutation.target;

      
      if (target.classList.contains('swiper-slide-visible') && !target.classList.contains('pinggir-kiri') && 
      !mutation.oldValue.includes('swiper-slide-visible')) {
        target.classList.add('pinggir-kanan');
      }

      if (target.classList.contains('swiper-slide-visible') && target.classList.contains('pinggir-kanan') && 
        !mutation.oldValue.includes('swiper-slide-visible')) {
        target.classList.remove('pinggir-kiri');
      }
     
      if (target.classList.contains('swiper-slide-visible') && !target.classList.contains('swiper-slide-prev') &&
       mutation.oldValue.includes('swiper-slide-prev')) {
        target.classList.add('pinggir-kiri');
      }
      
      if (!target.classList.contains('swiper-slide-visible') && mutation.oldValue.includes('swiper-slide-visible')) {
        target.classList.remove('pinggir-kiri');
      }

      if (!target.classList.contains('swiper-slide-visible') && mutation.oldValue.includes('pinggir-kiri')) {
        target.classList.remove('pinggir-kiri');
      }

      if (!target.classList.contains('swiper-slide-visible') && mutation.oldValue.includes('swiper-slide-visible')) {
        target.classList.remove('pinggir-kanan');
      }
      
      if (target.classList.contains('swiper-slide-next') && mutation.oldValue.includes('pinggir-kanan')) {
        target.classList.remove('pinggir-kanan');
      }

      if (target.classList.contains('swiper-slide-next') && mutation.oldValue.includes('pinggir-kanan')) {
        target.classList.remove('pinggir-kiri');
      }
    }
  });
}
  const observer = new MutationObserver(handleClassChange);


  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach(slide => {
  observer.observe(slide, { attributes: true, attributeOldValue: true, attributeFilter: ['class'] });
  });

  const slidess = document.querySelectorAll('.swiper-slide-duplicate.swiper-slide-visible');
  slidess.forEach(function(slide) {
    slide.classList.add('pinggir-kiri');
  });
});