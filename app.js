document.addEventListener('DOMContentLoaded', function () {
    const API_URL = 'http://localhost:4000/api/receitas';
    let receitas = []; // Armazena a lista de receitas

    // Busca as receitas do backend
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            receitas = data;
            displayRecipes(receitas);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });

    const searchInput = document.getElementById('search-input');

    // Evento de busca ao digitar
    searchInput.addEventListener('input', function () {
        filterAndDisplay();
    });

    // Evento de busca ao pressionar Enter
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão do Enter
            filterAndDisplay();
        }
    });

    // Função para filtrar receitas e exibir
    function filterAndDisplay() {
        const query = searchInput.value.trim().toLowerCase();

        // Se a barra de pesquisa estiver vazia, mostra todas as receitas
        if (query === '') {
            displayRecipes(receitas);
            return;
        }

        const filteredRecipes = receitas.filter(receita =>
            receita.nome.toLowerCase().includes(query)
        );

        displayRecipes(filteredRecipes);
    }

    // Função para exibir receitas na tela
    function displayRecipes(receitas) {
        const recipesList = document.getElementById('recipes-list');
        recipesList.innerHTML = '';

        if (receitas.length === 0) {
            recipesList.innerHTML = '<li>Nenhuma receita encontrada.</li>';
            return;
        }

        receitas.forEach(receita => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="http://localhost:4000${receita.imagem}" alt="${receita.nome}">
                <h2>${receita.nome}</h2>
                <p>${receita.descricao}</p>
            `;
            recipesList.appendChild(listItem);
        });
    }
});

