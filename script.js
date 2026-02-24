let workouts = {};
let current = 0, selected = [];

// Carregar treinos do arquivo JSON
fetch("workouts.json")
  .then(response => response.json())
  .then(data => {
    workouts = data;
  })
  .catch(error => console.error("Erro ao carregar treinos:", error));

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
