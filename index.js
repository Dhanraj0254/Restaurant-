
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-lines');
  const menu = document.querySelector('.menu-items');
  
  hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

// RATING BY  CUSTOMER/////////////////////////
$(document).ready(function() {
    let selectedRating = 0;

    $('.star').on('click', function() {
        selectedRating = parseInt($(this).data('value'));

        // Update star appearance based on selection
        $('.star').each(function() {
            $(this).toggleClass('selected', parseInt($(this).data('value')) <= selectedRating);
        });
    });

    $('#submit').on('click', function() {
        if (selectedRating > 0) {
            $('#message').text(`Thank you for your ${selectedRating} star rating!`);
        } else {
            $('#message').text('Please select a rating first.');
        }
    });
});






    


// SUBMIT BUTTON//////////////

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.form-container .btn');

  submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const textarea = document.querySelector('.form-container textarea');

      if (textarea.value.trim() === '') {
          alert('Please enter a message.');
      } else {
          alert('Message submitted!');
          textarea.value = ''; // Clear the textarea after submission
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;

  function showSlides() {
      const slides = document.querySelectorAll('.testimonial-box');
      slides.forEach((slide, index) => {
          slide.style.display = (index === slideIndex) ? 'block' : 'none';
      });

      slideIndex = (slideIndex + 1) % slides.length;
      setTimeout(showSlides, 5000); // Change slide every 5 seconds
  }

  showSlides();
});


// SCROLL THE PAGE ***********************************
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
          scrollToTopButton.style.display = 'block';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  });

  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 1,
          behavior: 'smooth'
      });
  });
});