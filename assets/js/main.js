document.querySelector('.search-bar button').addEventListener('click', function(e) {
    e.preventDefault();
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const properties = document.querySelectorAll('.property-card');

    properties.forEach(property => {
        const propertyTitle = property.querySelector('h3').textContent.toLowerCase();
        if (propertyTitle.includes(query)) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
});
document.getElementById('filters-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('property-type').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const minPrice = parseInt(document.getElementById('price-min').value, 10);
    const maxPrice = parseInt(document.getElementById('price-max').value, 10);

    const properties = document.querySelectorAll('.property-card');
    properties.forEach(property => {
        const propertyType = property.dataset.type;
        const propertyLocation = property.dataset.location;
        const propertyPrice = parseInt(property.dataset.price, 10);

        const matchesType = !type || propertyType === type;
        const matchesLocation = !location || propertyLocation === location;
        const matchesPrice = (!minPrice || propertyPrice >= minPrice) && (!maxPrice || propertyPrice <= maxPrice);

        if (matchesType && matchesLocation && matchesPrice) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
});
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
setInterval(() => {
  testimonials[index].style.display = "none";
  index = (index + 1) % testimonials.length;
  testimonials[index].style.display = "block";
}, 3000); // Change every 3 seconds
window.onscroll = function() {
    let scrollBtn = document.querySelector('.scroll-to-top-btn');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }
  
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  