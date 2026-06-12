console.log("Perfil carregado!");

const favoritos = JSON.parse(
localStorage.getItem("favoritos")
) || [];

const historico = JSON.parse(
localStorage.getItem("historico")
) || [];

console.log("Favoritos:", favoritos);
console.log("Histórico:", historico);