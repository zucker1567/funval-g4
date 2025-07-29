import { proyectos }  from "./proyectos.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu-list");
  

  btn.addEventListener("click", () => {
    // Solo afecta si la pantalla es < 640px (mobile)
    if (window.innerWidth < 640) {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex flex-col"); // usamos "flex" para mostrar en móvil
      menu.classList.toggle("absolute");
      }
  });
});

function mostrarProyectos(){
  const contenedor = document.getElementById("contenedor-proyectos");
  if (!contenedor) return;

    proyectos.forEach(proyecto=>{
      const card = document.createElement("div");
      card.className ="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 dark:bg-gray-800 "
    
      card.innerHTML =`
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full max-h-64 object-contain mx-auto">
      <div class="p-5 flex flex-col gap-2 text-gray-800">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">${proyecto.titulo}</h2>
        <p class="text-gray-600 dark:text-gray-300">${proyecto.descripcion}</p>
      </div>
      `;
      contenedor.appendChild(card);
    });
}

  document.addEventListener("DOMContentLoaded",mostrarProyectos);


/* dark mode a proyectos */

document.addEventListener("DOMContentLoaded", () => {
  const switchInput = document.getElementById("btn");
  const html = document.getElementById("todos");

  switchInput.addEventListener("change", function() {
    html.classList.toggle("dark", switchInput.checked);
  });
});