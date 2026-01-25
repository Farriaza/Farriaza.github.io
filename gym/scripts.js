// Espacio para futura lógica:
// filtros por hombre/mujer, casa/gym, objetivos, generación de planes, etc.
console.log("Gym Landing cargada correctamente");
const routines = {
  day1: `
    <h2>Día 1 – Torso</h2>

    <div class="exercise">
      <img src="https://raw.githubusercontent.com/Farriaza/img/main/espalda.png">
      <div>
        <h4>Press con mancuernas</h4>
        <p>3×12 · Controla el movimiento</p>
      </div>
    </div>

    <div class="exercise">
      <img src="https://raw.githubusercontent.com/Farriaza/img/main/espalda.png">
      <div>
        <h4>Remo con barra</h4>
        <p>3×10 · Espalda recta</p>
      </div>
    </div>
  `,

  day2: `
    <h2>Día 2 – Piernas</h2>

    <div class="exercise">
      <img src="https://raw.githubusercontent.com/Farriaza/img/main/espalda.png">
      <div>
        <h4>Sentadilla</h4>
        <p>4×10 · Baja controlado</p>
      </div>
    </div>

    <div class="exercise">
      <img src="https://raw.githubusercontent.com/Farriaza/img/main/espalda.png">
      <div>
        <h4>Prensa</h4>
        <p>3×12 · Empuja con talones</p>
      </div>
    </div>
  `,

  day3: `
    <h2>Día 3 – Cardio + Core</h2>

    <div class="exercise">
      <img src="https://raw.githubusercontent.com/Farriaza/img/main/espalda.png">
      <div>
        <h4>Plancha</h4>
        <p>3×30s · Core firme</p>
      </div>
    </div>

    <div class="exercise">
      <img src="https://raw.githubusercontent.com/Farriaza/img/main/espalda.png">
      <div>
        <h4>Cardio LISS</h4>
        <p>30 min · Ritmo constante</p>
      </div>
    </div>
  `
};

function openRoutine(day) {
  document.getElementById("modalBody").innerHTML = routines[day];
  document.getElementById("routineModal").style.display = "flex";
}

function closeRoutine() {
  document.getElementById("routineModal").style.display = "none";
}
