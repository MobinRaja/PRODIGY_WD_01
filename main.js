gsap.from('nav', {opacity:0, delay:1.6, duration:2.5, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.search', {opacity:0, delay:1.8, duration:2.8, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.brand_type', {opacity:0, delay:2.2, duration:3, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.discount', {opacity:0, delay:1, scale:.1, duration:2.4, rotation:180,
 ease: "expo.inOut", x:100});

gsap.from('.bottom_shoes_card', {opacity:0, delay:2.6, duration:3.5, ease: "elastic.out(1,0.3)", x:100});

gsap.from('.selected_product_img', {opacity:0, delay:3, duration:4, ease:"elastic.out(1,0.3)", y:100});

gsap.from('.size_product', {opacity:0, delay:3.5, duration:0.5, ease:"Expo.In", y:100});

gsap.from('.circle1', {opacity:0, delay:4.5, scale:.1, duration:.7, ease:"expo.In"});

gsap.from('.circle2', {opacity:0, delay:4.8, scale:.1, duration:.7, ease:"expo.In"});


document.addEventListener("DOMContentLoaded", function() {
    const shoeImages = document.querySelectorAll(".shoe");
    const addToCartButtons = document.querySelectorAll(".add_to_cart");
    const selectedProductImage = document.querySelector(".selected_product_img");
    const rotateButton = document.querySelector(".rotate_button");

    // Function to show selected shoe in the main frame with fade-in animation
    function showSelectedShoe(index) {
        gsap.to(selectedProductImage, { opacity: 0, duration: 0.5, onComplete: function() {
            selectedProductImage.src = shoeImages[index].src;
            gsap.to(selectedProductImage, { opacity: 1, duration: 0.5 });
        }});
    }

    // Event listener for shoe cards
    shoeImages.forEach(function(shoe, index) {
        shoe.addEventListener("click", function() {
            showSelectedShoe(index);
        });
    });

    // Event listener for add to cart buttons
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Added to cart!");
            // You can add more animations or logic for the cart here
        });
    });

    // Event listener for rotate button
    rotateButton.addEventListener("click", function() {
        // Rotate all shoe cards 360 degrees
        gsap.to(".card_shoe", { rotation: 360, duration: 1, ease: "power2.inOut" });
    });
});
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var menuItems = document.querySelectorAll(".nav_links");
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      menuItems.forEach(function(item) {
        item.classList.add("scrolled");
      });
    } else {
      navbar.classList.remove("scrolled");
      menuItems.forEach(function(item) {
        item.classList.remove("scrolled");
      });
    }
  });
  
  // Activate menu item based on scroll position
  var sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function() {
    var currentSection = "";
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
  
    menuItems.forEach(function(item) {
      item.classList.remove("active");
      if (item.getAttribute("href").slice(1) === currentSection) {
        item.classList.add("active");
      }
    });
  });
  