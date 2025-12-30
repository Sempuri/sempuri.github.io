if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const menuToggle = document.getElementById("menu-toggle");
const navContainer = document.getElementById("nav-container");
const navLinksItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navContainer.classList.toggle("open");
});

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navContainer.classList.remove("open");
  });
});

const options = {
  root: null,
  rootMargin: "-10% 0px -70% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinksItems.forEach((link) => link.classList.remove("active"));

      if (id !== "home") {
        const activeLink = document.querySelector(
          `.nav-links a[href="#${id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
          history.replaceState(null, null, `#${id}`);
        }
      } else {
        history.replaceState(null, null, " ");
      }
    }
  });
}, options);

document.querySelectorAll("section[id]").forEach((section) => {
  observer.observe(section);
});
