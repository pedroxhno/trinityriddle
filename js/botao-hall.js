const abrir = document.getElementById("abrirHall");
const fechar = document.getElementById("fecharHall");
const hall = document.getElementById("hall");

abrir.addEventListener("click", () => {
    hall.classList.add("ativo");
});

fechar.addEventListener("click", () => {
    hall.classList.remove("ativo");
});