```javascript
const SENHA = "1234";

function login() {
  let senha = document.getElementById("senha").value;

  if (senha === SENHA) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("painel").classList.remove("hidden");
  } else {
    alert("Senha incorreta");
  }
}

function publicar() {
  let titulo = document.getElementById("titulo").value;
  let conteudo = document.getElementById("conteudo").value;
  let imagem = document.getElementById("imagem").value;

  let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

  noticias.push({ titulo, conteudo, imagem });

  localStorage.setItem("noticias", JSON.stringify(noticias));

  alert("Notícia publicada!");
}
```
