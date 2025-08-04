document.addEventListener("DOMContentLoaded", () => {
  const casillas = document.querySelectorAll("#cajas > div");
  const puntosX = document.getElementById("marcadorX");
  const puntosO = document.getElementById("marcadorO");
  const empates = document.getElementById("empateMarcador");
  const indicadorTurno = document.getElementById("turno");
  const ventanaGanador = document.getElementById("modalGanador");
  const textoGanador = document.getElementById("ganadorRonda");
  const mensajeGanador = document.getElementById("tuGanas");
  const botonCerrarModal = document.getElementById("botonCerrarModal");
  const botonSiguiente = document.getElementById("siguienteRonda");
  const botonCPU = document.getElementById("juegoCpu");
  const botonJugador = document.getElementById("JuegoPlayer");
  const modalInicio = document.getElementById("modalInicio");
  const botonX = document.getElementById("empezarX");
  const botonO = document.getElementById("empezarO");
  const reiniciarBtn = document.getElementById("reinicio");

  let turnoActual = "X";
  let tablero = Array(9).fill("");
  let puntaje = { X: 0, O: 0, E: 0 };
  let vsCPU = null;
  let simboloJugador = null;
  let simboloMaquina = null;

  const combosGanadores = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function hayGanador() {
    for (const combo of combosGanadores) {
      const [a,b,c] = combo;
      if (tablero[a] && tablero[a] === tablero[b] && tablero[b] === tablero[c]) {
        return tablero[a];
      }
    }
    if (!tablero.includes("")) return "E";
    return null;
  }

  function actualizarIndicadorTurno() {
    indicadorTurno.textContent = turnoActual ? `${turnoActual} turn` : "";
  }

  function mostrarVentanaGanador(ganador) {
    ventanaGanador.classList.remove("hidden");
    if (ganador === "E") {
      textoGanador.textContent = "Empate";
      mensajeGanador.textContent = "Nadie gana";
    } else {
      textoGanador.textContent = `${ganador} gana la Ronda`;
      mensajeGanador.textContent = ganador === simboloJugador ? "Tú ganas" : "CPU gana";
    }
  }

  function limpiarTablero() {
    tablero = Array(9).fill("");
    casillas.forEach(celda => {
      celda.textContent = "";
      celda.classList.remove("pointer-events-none");
    });
  }

  function turnoMaquina() {
    if (!vsCPU || turnoActual !== simboloMaquina) return;

    let vacias = tablero.map((val, i) => val === "" ? i : null).filter(i => i !== null);
    if (vacias.length === 0) return;

    const jugada = vacias[Math.floor(Math.random() * vacias.length)];

    setTimeout(() => {
      tablero[jugada] = simboloMaquina;
      casillas[jugada].textContent = simboloMaquina;
      casillas[jugada].classList.add("pointer-events-none");

      const resultado = hayGanador();
      if (resultado) {
        if (resultado === "E") {
          puntaje.E++;
          empates.textContent = puntaje.E;
        } else {
          puntaje[resultado]++;
          if (resultado === "X") puntosX.textContent = puntaje.X;
          if (resultado === "O") puntosO.textContent = puntaje.O;
        }
        mostrarVentanaGanador(resultado);
        return;
      }

      turnoActual = simboloJugador;
      actualizarIndicadorTurno();
    }, 400);
  }

  casillas.forEach((celda, idx) => {
    celda.addEventListener("click", () => {
      if (vsCPU === null || tablero[idx] !== "" || (vsCPU && turnoActual !== simboloJugador)) return;

      tablero[idx] = turnoActual;
      celda.textContent = turnoActual;
      celda.classList.add("pointer-events-none");

      const resultado = hayGanador();
      if (resultado) {
        if (resultado === "E") {
          puntaje.E++;
          empates.textContent = puntaje.E;
        } else {
          puntaje[resultado]++;
          if (resultado === "X") puntosX.textContent = puntaje.X;
          if (resultado === "O") puntosO.textContent = puntaje.O;
        }
        mostrarVentanaGanador(resultado);
        return;
      }

      turnoActual = turnoActual === "X" ? "O" : "X";
      actualizarIndicadorTurno();

      if (vsCPU) turnoMaquina();
    });
  });

  botonCerrarModal.addEventListener("click", () => {
    ventanaGanador.classList.add("hidden");
  });

  botonSiguiente.addEventListener("click", () => {
    ventanaGanador.classList.add("hidden");
    limpiarTablero();
    turnoActual = "X";
    actualizarIndicadorTurno();
    if (vsCPU && simboloMaquina === "X") turnoMaquina();
  });

  reiniciarBtn.addEventListener("click", () => {
    location.reload();
  });

  function resaltarSimboloElegido() {
    if (simboloJugador === "X") {
      botonX.classList.add("bg-gray-700");
      botonO.classList.remove("bg-gray-700");
    } else {
      botonO.classList.add("bg-gray-700");
      botonX.classList.remove("bg-gray-700");
    }
  }

  botonX.addEventListener("click", () => {
    simboloJugador = "X";
    simboloMaquina = "O";
    turnoActual = "X";
    resaltarSimboloElegido();
  });

  botonO.addEventListener("click", () => {
    simboloJugador = "O";
    simboloMaquina = "X";
    turnoActual = "X";
    resaltarSimboloElegido();
  });

  botonCPU.addEventListener("click", () => {
    if (!simboloJugador) {
      alert("Primero elige un símbolo");
      return;
    }
    vsCPU = true;
    modalInicio.classList.add("hidden");
    limpiarTablero();
    actualizarIndicadorTurno();
    if (simboloMaquina === "X") turnoMaquina();
  });

  botonJugador.addEventListener("click", () => {
    if (!simboloJugador) {
      alert("Primero elige un símbolo");
      return;
    }
    vsCPU = false;
    modalInicio.classList.add("hidden");
    limpiarTablero();
    actualizarIndicadorTurno();
  });

  modalInicio.classList.remove("hidden");
  indicadorTurno.textContent = "";
});
