document.addEventListener('DOMContentLoaded', function () {
    const API_URL = 'https://api-receitas-x7po.onrender.com';
    let receitas = []; 

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


    searchInput.addEventListener('input', function () {
        filterAndDisplay();
    });

  
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            filterAndDisplay();
        }
    });


    function filterAndDisplay() {
        const query = searchInput.value.trim().toLowerCase();

        
        if (query === '') {
            displayRecipes(receitas);
            return;
        }

        const filteredRecipes = receitas.filter(receita =>
            receita.nome.toLowerCase().includes(query)
        );

        displayRecipes(filteredRecipes);
    }

    
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
                <a href="${receita.link}" target="_blank">
                    <img src="https://api-receitas-x7po.onrender.com${receita.imagem}" alt="${receita.nome}">
                </a>
                <h2>${receita.nome}</h2>
                <p>${receita.descricao}</p>
            `;
            recipesList.appendChild(listItem);
        });
    }
});

