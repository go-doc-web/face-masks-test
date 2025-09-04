// Custom Scripts
// Mobile burger Menu
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();
// Modal
function bindModal(trigger, modal, close) {
  (trigger = document.querySelector(".nav__btn")),
    (modal = document.querySelector(".modal__wrapper")),
    (close = document.querySelector(".modal__close"));

  const body = document.body;

  if (trigger) {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      body.classList.add("locked");
    });
  }
  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}

bindModal(".nav__btn", ".modal__wrapper", ".modal__close");

console.log("Ширина вьюпорта: " + window.innerWidth + "px");

