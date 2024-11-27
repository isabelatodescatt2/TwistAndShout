function exibirProdutos(){
    
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let produto of produtos) {
    
    const li = document.createElement('li');
    li.classList.add('produto-img');

    const img = document.createElement('img');
    img.src = produto.urlImage;
    img.style.margin = '10px'; 
    img.style.width = '100px'; 
    img.style.height = 'auto';
    img.src = produto.urlImage;
    img.alt = produto.nome;
    img.classList.add('produto.img');

    const nome = document.createElement('p');
    nome.textContent = produto.nome;
    
    const preco = document.createElement('p');
    preco.innerHTML =  `<span>Preço:</span> R$${produto.preco}`;

    const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

    const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);  // Chama a função para editar o produto

    li.appendChild(img);
    li.appendChild(nome);
    li.appendChild(preco);


    listaProdutos.appendChild(li);

    }
}

window.onload = exibirProdutos;