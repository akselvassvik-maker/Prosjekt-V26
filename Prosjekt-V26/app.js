

// --- LES MER 
function lesMer(id, knapp) {
    const ekstraTekst = document.getElementById(id);

    if (ekstraTekst.style.display === "block") {
        // Teksten er synlig → skjul den
        ekstraTekst.style.display = "none";
        knapp.textContent = "Les mer ↓";
    } else {
        // Teksten er skjult → vis den
        ekstraTekst.style.display = "block";
        knapp.textContent = "Les mindre ↑";
    }
}


// --- DARK MODE / LYS MODUS ---
const darkKnapp = document.querySelector(".dark-mode-knapp");

function byttModus() {
    document.body.classList.toggle("lys-modus");

    if (document.body.classList.contains("lys-modus")) {
        darkKnapp.textContent = "🌙";
    } else {
        darkKnapp.textContent = "☀️";
    }
}


// --- BURGER-MENY ---
function toggleMeny() {
    const meny = document.getElementById("navMeny");
    meny.classList.toggle("aktiv");
}

