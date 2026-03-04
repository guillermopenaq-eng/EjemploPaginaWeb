// Interacción mínima, perfecta para mostrar 'cambio visible' + redeploy
let clicks = 0;

const statusEl = document.getElementById("status");
const btn = document.getElementById("btnAction");

function render() {
  const plural = clicks === 1 ? "vez" : "veces";
  statusEl.textContent = `Estado: hiciste click ${clicks} ${plural}.`;
}

btn.addEventListener("click", () => {
  clicks++;
  render();

  // Micro detalle para que se sienta vivo
  btn.textContent = clicks === 1 ? "Otra vez" : "Más magia";
});
