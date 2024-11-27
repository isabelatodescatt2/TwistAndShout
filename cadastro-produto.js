let produtoEditandoIndex = null;

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []; 
    const lista = document.getElementById('produtos');
    lista.innerHTML = '';  

    produtos.forEach(produto => { 
        const li = document.createElement('li'); 
        li.className = 'produto-card'; // Classe para estilização
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>Preço: R$${produto.preco}</p>
            </div>`;

        lista.appendChild(li); 
    });
}
        function criarProduto(event) {
            event.preventDefault(); 

            const nome = document.getElementById('nome').value.trim();
            const preco = document.getElementById('preco').value.trim();
            const categoria = document.getElementById('categoria').value;
            const descricao = document.getElementById('descricaoProduto').value.trim();
            const imageURL = document.getElementById('imagePreview').src;

            if (nome && preco && categoria && descricao) {
                const produto = {
                    nome: nome,
                    preco: preco,
                    categoria: categoria,
                    descricao: descricao,
                    imagem: imageURL
                };

                // Armazena o produto na categoria correspondente
                const produtosPorCategoria = JSON.parse(localStorage.getItem(categoria)) || [];
                produtosPorCategoria.push(produto);
                localStorage.setItem(categoria, JSON.stringify(produtosPorCategoria));

                // Exibe na lista geral
                const produtosTotais = JSON.parse(localStorage.getItem('produtos')) || [];
                produtosTotais.push(produto);
                localStorage.setItem('produtos', JSON.stringify(produtosTotais));

                limparFormulario();
                exibirProdutos();
            } else {
                alert('Preencha todos os campos para cadastrar o produto!');
            }
        }

        function limparFormulario() {
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('categoria').value = '';
            document.getElementById('descricaoProduto').value = '';
            document.getElementById('imagePreview').src = 'imagens/uploadImage.png'; // Reseta a imagem
        }

        function limparProdutos() {
            localStorage.removeItem('produtos');
            exibirProdutos();
        }

        function previewImage(event) {
            const imagePreview = document.getElementById('imagePreview');
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.src = e.target.result; // Define a imagem de pré-visualização
                }
                reader.readAsDataURL(file); // Lê o arquivo como URL
            }
        }

        function Menu() {
            let modal = document.getElementById('modal-menu');
            modal.classList.add('abrir');

            modal.addEventListener('click', (e) => {
                if(e.target.id == 'fechar-modal-menu' || e.target.id == 'modal-menu') {
                    modal.classList.remove('abrir');
                }
            });
        }

        function Editor() {
            window.location.href = "edicao.html";
        }

        function CLIENT() {
            window.location.href = "";
        }

       function Entrar(){
           window.location.href = "login.html";
       } 

       function Inicio() {
        window.location.href = "index.html"; // Redireciona para a página inicial
    }