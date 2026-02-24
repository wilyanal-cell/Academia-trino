let workouts = {};
let current = 0, selected = [];

// Carregar configuração salva no navegador
window.onload = () => {
  const saved = localStorage.getItem("workouts");
  if (saved) {
    workouts = JSON.parse(saved);
  } else {
    // Treino padrão inicial
    workouts = {
      A: [
        { name: "Supino Reto", img: "https://via.placeholder.com/300x200?text=Supino+Reto", reps: "4x8-12" },
        { name: "Supino Inclinado", img: "https://via.placeholder.com/300x200?text=Supino+Inclinado", reps: "4x8-10" }
      ],
      B: [
        { name: "Barra Fixa", img: "https://via.placeholder.com/300x200?text=Barra+Fixa", reps: "4x8-12" }
      ],
      C: [
        { name: "Agachamento", img: "https://via.placeholder.com/300x200?text=Agachamento", reps: "4x8-10" }
      ]
    };
  }
  document.getElementById("configData").value = JSON.stringify(workouts, null, 2);
};

function showMenu() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("config").classList.add("hidden");
  document.getElementById("workout").innerHTML = "";
}

function showConfig() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("config").classList.remove("hidden");
  document.getElementById("workout").innerHTML = "";
}

function saveConfig() {
  try {
    workouts = JSON.parse(document.getElementById("configData").value);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    alert("Configuração salva com sucesso!");
  } catch (e) {
    alert("Erro ao salvar configuração. Verifique o formato JSON.");
  }
}

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
