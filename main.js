function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(postagens) {
 console.log(postagens)
    linha = document.createElement("tr");
    tduserId = document.createElement("td");
    tdid = document.createElement("td");
    tdtitle = document.createElement("td");
    tdbody = document.createElement("td");
    tduserId.innerHTML = postagens.userId
    tdid.innerHTML = postagens.id
    tdtitle.innerHTML = postagens.title
    tdbody.innerHTML = postagens.body

    linha.appendChild(tduserId);
    linha.appendChild(tdid);
    linha.appendChild(tdtitle);
    linha.appendChild(tdbody);

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/posts");
    let postagens = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    postagens.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);

    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()