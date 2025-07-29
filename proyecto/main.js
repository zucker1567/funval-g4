document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu-list");

  btn.addEventListener("click", () => {
    // Solo afecta si la pantalla es < 640px (mobile)
    if (window.innerWidth < 640) {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex"); // usamos "flex" para mostrar en móvil
    }
  });
});

