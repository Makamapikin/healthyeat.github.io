// Quote of the Day API Integration
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        document.getElementById("quoteText").textContent = data.content;
      })
      .catch(error => {
        console.error("Error fetching quote:", error);
        document.getElementById("quoteText").textContent = "Could not load a quote at this time.";
      });
  
    // Carousel Functionality
    const carouselItems = document.querySelectorAll(".carousel-item");
    let activeIndex = 0;
  
    setInterval(() => {
      carouselItems[activeIndex].classList.remove("active");
      activeIndex = (activeIndex + 1) % carouselItems.length;
      carouselItems[activeIndex].classList.add("active");
    }, 3000);
  
    // Contact Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        alert(`Thank you for contacting us, ${name}!`);
        this.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  