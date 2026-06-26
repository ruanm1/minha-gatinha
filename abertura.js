const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");

const cenas = [
    {
        titulo: "CineTuxo",
        subtitulo: "Transformando coincidências em amor desde 2025."
    },
    {
        titulo: "",
        subtitulo: "Inspirado em uma história real."
    },
    {
        titulo: "",
        subtitulo: "Duas pessoas."
    },
    {
        titulo: "",
        subtitulo: "Muitas coincidências."
    },
    {
        titulo: "",
        subtitulo: "Uma sessão especial."
    },
    {
        titulo: "",
        subtitulo: "Boa sessão"
    }
];

let indice = 0;

function mostrarCena() {

    titulo.style.opacity = 0;
    subtitulo.style.opacity = 0;

    setTimeout(() => {

        titulo.textContent = cenas[indice].titulo;
        subtitulo.textContent = cenas[indice].subtitulo;

        titulo.style.opacity = 1;
        subtitulo.style.opacity = 1;

        indice++;

        if (indice < cenas.length) {

            setTimeout(mostrarCena, 3000);

        } else {

            setTimeout(() => {

                window.location.href = "cine.html";

            }, 3000);

        }

    }, 800);

}

mostrarCena();