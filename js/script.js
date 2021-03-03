const cartButton = document.getElementById("cart-button"),
  modal = document.querySelector(".modal"),
  close = modal.querySelector(".close");

const toggleModal = () => {
  modal.classList.toggle("is-open");
};

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

new WOW().init();
