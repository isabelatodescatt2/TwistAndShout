function exibirProdutos(){

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById(listaProdutos);
    
    listaProdutos.innerHTML = '';
    for (let produto of produtos) {
    
    const li = document.createElement('li');
    li.classList.add('produto-img');

    const img = document.urlImage;
    img.src = produto.urlImage;
    img.alt = produto.nome;
    img.classList.add('produto.img');

    const nome = document.createElement('p');
    nome.textContent = produto.nome;
    
    const preco = document.createElement('p');
    preco.innerHTML =  `<span>Preço:</span> R$${produto.preco}`;



    li.appendChild(img);
    li.appendChild(nome);
    li.appendChild(preco);


    listaProdutos.appendChild(li);

    }
}

window.onload = exibirProdutos;