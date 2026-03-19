db.collection("noticias").orderBy("data", "desc").onSnapshot(snapshot => {
  const area = document.getElementById("noticias");
  area.innerHTML = "";

  snapshot.forEach(doc => {
    let n = doc.data();

    area.innerHTML += `
      <div class="noticia">
        <h2>${n.titulo}</h2>
        <img src="${n.imagem}">
        <p>${n.conteudo}</p>
        <small>${new Date(n.data).toLocaleString()}</small>
      </div>
    `;
  });
});
