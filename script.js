// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Project filtering (optional)
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    projects.forEach(project => {
      if (category === "all" || project.classList.contains(category)) {
        project.style.display = "block";
        project.classList.add("fade-in");
      } else {
        project.style.display = "none";
      }
    });
  });
});
