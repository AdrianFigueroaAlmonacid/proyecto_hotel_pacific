// smooth scroll
const links = document.querySelectorAll(".nav-base a ");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop - 10,
    behavior: "smooth",
  });

}

