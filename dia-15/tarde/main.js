let estudiantes = [
  {
    nombre: "kevin",
    pais: "Bolivia",
  },
  {
    nombre: "Pablo",
    pais: "Argentina",
  },
  {
    nombre: "Geraldine",
    pais: "Peru",
  },
  {
    nombre: "Gabriel",
    pais: "Argentina",
  },
  {
    nombre: "Mario",
    pais: "Argentina",
  },
];

let contenedor = document.querySelector("#contenedor-estudiantes");
for (let i = 0; i < estudiantes.length; i++) {
  contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
            </a>
            `;
}