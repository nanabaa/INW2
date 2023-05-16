const url = "http://localhost:3000/produtos"

fetch(url)
.then((req)=>req.json())
.then((data)=>mostraProdutos(data));

function mostraProdutos(produtos){
    const htmlProdutos = produtos.map(
        (produto)=>`
        <img src=${produto.imagem} widht=100 height=50><br>
        </h2>${produto.descricao}</h2>
        <h4>valor: ${produto.valor}</h4>`
    );
    document.getElementById("app").innerHTML=htmlProdutos;
}