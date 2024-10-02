function mudarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "red";
}
function restaurarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "gray";
}
function Ola(){
	var nome = prompt("Digite seu nome!");
	if (nome !== null && nome !== ""){
		alert("Olá, " + nome + "! Bem-Vindo(a).");
	}
}



