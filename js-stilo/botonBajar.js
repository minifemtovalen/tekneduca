const botonBajar = document.querySelector(".boton-bajar");

botonBajar.addEventListener("click", () => {
  window.scroll({
    top:695, left: 695,
    behavior: "smooth",
  });
});
