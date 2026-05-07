let area = document.getElementById("areaSecreta");
let botaoSecreto = document.getElementById("botaoSecreto");

if (area && botaoSecreto) {
    area.addEventListener("mouseover", () => {
        botaoSecreto.style.opacity = 1;
    });

    area.addEventListener("mouseout", () => {
        botaoSecreto.style.opacity = 0;
    });
}
