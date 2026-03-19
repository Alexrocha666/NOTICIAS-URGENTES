```javascript
let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

function carregar() {
  const area = document.getElementById("noticias");
  area.innerHTML = "";

  noticias.slice().reverse().forEach(n => {
    area.innerHTML += `
      <div class="noticia">
        <img src="${n.imagem}">
        <h2>${n.titulo}</h2>
        <p>${n.conteudo}</p>
      </div>
    `;
  });
}

carregar();
```
