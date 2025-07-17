document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 一度表示したら監視解除
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach((el) => observer.observe(el));
  });
  
