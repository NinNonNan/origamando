document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("transition-overlay");
  if (!overlay) return;

  const links = document.querySelectorAll("a[data-transition]");

  links.forEach(link => {

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const url = link.getAttribute("href");
      if (!url) return;

      overlay.classList.add("active");

      setTimeout(() => {
        window.location.href = url;
      }, 250);

    });

  });

  window.addEventListener("pageshow", () => {
    overlay.classList.remove("active");
  });

});