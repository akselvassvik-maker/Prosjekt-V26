

const knapper = document.querySelectorAll(".knappen");
const tekster = document.querySelectorAll(".ekstra-tekst");

for (let i = 0; i < knapper.length; i++) {

    knapper[i].addEventListener("click", function () {

        if (tekster[i].style.display == "block") {

            tekster[i].style.display = "none";
            knapper[i].innerHTML = "Les mer ↓";

        } else {

            tekster[i].style.display = "block";
            knapper[i].innerHTML = "Les mindre ↑";

        }

    });

}

function byttModus() {

    document.body.classList.toggle("lys-modus");

}