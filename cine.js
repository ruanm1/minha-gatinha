const escolhas = {
    anime: "",
    filme: "",
    jantar: "",
    bebida: "",
    sobremesa: ""
};

const botoes = document.querySelectorAll(".escolher");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const tipo = botao.dataset.tipo;
        const nome = botao.dataset.nome;

        // Remove seleção da mesma categoria
        document.querySelectorAll(`button[data-tipo="${tipo}"]`).forEach(b => {

            b.classList.remove("selecionado");
            b.textContent = "Escolher";

        });

        botao.classList.add("selecionado");
        botao.textContent = "✔ Selecionado";

        escolhas[tipo] = nome;

        atualizarIngresso();
        atualizarSaldo();

    });

});

function atualizarIngresso(){

    if(document.getElementById("animeEscolhido"))
        document.getElementById("animeEscolhido").textContent =
            escolhas.anime || "Aguardando escolha...";

    document.getElementById("filmeEscolhido").textContent =
        escolhas.filme || "Aguardando escolha...";

    document.getElementById("jantarEscolhido").textContent =
        escolhas.jantar || "Aguardando escolha...";

    document.getElementById("bebidaEscolhida").textContent =
        escolhas.bebida || "Aguardando escolha...";

    document.getElementById("sobremesaEscolhida").textContent =
        escolhas.sobremesa || "Aguardando escolha...";

}

function atualizarSaldo(){

    let saldo = 400;

    if(escolhas.jantar) saldo -= 200;

    if(escolhas.bebida) saldo -= 50;

    if(escolhas.sobremesa) saldo -= 150;

    document.getElementById("saldo").textContent = saldo;

}

document.getElementById("confirmar").addEventListener("click", () => {

    if(
        !escolhas.anime ||
        !escolhas.filme ||
        !escolhas.jantar ||
        !escolhas.bebida ||
        !escolhas.sobremesa
    ){

        alert("Escolha todas as opções antes de confirmar.");

        return;

    }

    const mensagem =
`🎬 CineTuxo

Minha sessão está pronta!

🎌 Anime: ${escolhas.anime}

🎬 Filme: ${escolhas.filme}

🍔 Jantar: ${escolhas.jantar}

🥤 Bebida: ${escolhas.bebida}

🍨 Sobremesa: ${escolhas.sobremesa}

❤️ Estou pronta para nossa sessão!`;

    window.open(
        "https://wa.me/5583993311221?text=" +
        encodeURIComponent(mensagem),
        "_blank"
    );

});