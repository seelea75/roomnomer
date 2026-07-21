const header = document.getElementById("header");

if (!header) {
  console.warn("Header element not found");
} else if (document.body.classList.contains("home")) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
} else {
  header.classList.add("scrolled");
}
