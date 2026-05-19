

// ================= JAVASCRIPT =================


// LES MER / LES MINDRE

function lesMer(id, knapp) {

    const tekstEl = document.getElementById(id);

    if (tekstEl.style.display == "block") {

        tekstEl.style.display = "none";
        knapp.innerHTML = "Les mer ↓";

    }

    else {

        tekstEl.style.display = "block";
        knapp.innerHTML = "Les mindre ↑";

    }

}



// DARK MODE

function byttModus() {

    document.body.classList.toggle("lys-modus");

}