  
/**
 * Preloader
 */
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}



  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }




  document.addEventListener('DOMContentLoaded', function () {
    fetch('carousel.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('carousel-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading carousel:', error));
  });



  //POPUP 
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        
        setTimeout(function() {
            popup.style.display = 'none';
        }, 10000); // Close popup after 10 seconds
    }, 10000); // Show popup after 10 seconds
});




  