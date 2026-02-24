const workouts = {
  A: [
    { name: "Supino Reto", img: "supino.jpg", reps: "4x8-12" },
    { name: "Supino Inclinado", img: "supino_inclinado.jpg", reps: "4x8-10" },
    { name: "Crucifixo Inclinado", img: "crucifixo.jpg", reps: "3x12-15" },
    { name: "Flexão Declinada", img: "flexao.jpg", reps: "3x15-20" }
  ],
  B: [
    { name: "Barra Fixa", img: "barra_fixa.jpg", reps: "4x8-12" },
    { name: "Remada Curvada", img: "remada.jpg", reps: "3x8-10" },
    { name: "Rosca Direta", img: "rosca.jpg", reps: "3x8-10" },
    { name: "Supino Declinado", img: "supino_declinado.jpg", reps: "3x12-15" }
  ],
  C: [
    { name: "Agachamento Livre", img: "agachamento.jpg", reps: "4x8-10" },
    { name: "Stiff", img: "stiff.jpg", reps: "3x8-10" },
    { name: "Prancha Abdominal", img: "prancha.jpg", reps: "3x30-60s" },
    { name: "Crucifixo Reto", img: "crucifixo_reto.jpg", reps: "3x12-15" }
  ]
};

let current = 0, selected = [];

function startWorkout(type) {
  selected = workouts[type];
  current = 0;
  showExercise();
  updateProgress();
}

function showExercise() {
  if (current < selected.length) {
    const ex = selected[current];
    document.getElementById("workout").innerHTML = `
      <div class="exercise">
        <h2>${ex.name}</h2>
        <img src="${ex.img}" alt="${ex.name}">
        <p><strong>Séries/Reps:</strong> ${ex.reps}</p>
        <button onclick="nextExercise()">Concluído</button>
      </div>
    `;
  } else {
    document.getElementById("workout").innerHTML = "<h2>Treino finalizado! 💪 Continue firme!</h2>";
  }
}

function nextExercise() {
  current++;
  showExercise();
  updateProgress();
}

function updateProgress() {
  const percent = (current / selected.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}
