const usersContainer = document.getElementById("card");
const errorMessage = document.getElementById("errorMessage");

async function fetchUsuario() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Err");
    }

    const users = await response.json();
    renderUsers(users);
    } catch (error) {
    console.error("Error:", error);
    errorMessage.classList.remove("d-none");
    }
}

function renderUsers(users) {
    users.forEach(user => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    const card = document.createElement("div");
    card.className = "card h-50 p-3 border-2 ";
    
    card.innerHTML = 
        `
        <h3>Nombre: ${user.name}</h3>
        <p>Usuario: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Empresa: ${user.company.name}</p>
        `;

    col.appendChild(card);
    usersContainer.appendChild(col);
    });
}


fetchUsuario();