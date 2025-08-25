// Animate skill bars on load
window.addEventListener("load", function () {
  setTimeout(() => {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }, 500);
});

// Download PDF function
function downloadPDF() {
  window.print();
}

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("fade-in");
      }, index * 100);
    }
  });
}, observerOptions);

document.querySelectorAll(".section").forEach((el) => {
  observer.observe(el);
});
