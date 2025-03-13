const express = require('express');
const cors = require('cors');
const path = require('path');  

const app = express();
const port = 4000;


app.use(cors({
    origin: '*',  
    methods: ['GET']  
}));

app.use('/img', express.static(path.join(__dirname, 'img')));


const receitas = [
    {
        id: 1,
        nome: 'Lasanha',
        descricao: 'Uma deliciosa lasanha com molho de tomate e queijo.',
        imagem: '/img/lasanha.jpg'  
    },
    {
        id: 2,
        nome: 'Bolo de Chocolate',
        descricao: 'Bolo fofinho de chocolate com cobertura cremosa.',
        imagem: '/img/08-bolo-chocolate.png'
    },
    {
        id: 3,
        nome: 'Salada Caesar',
        descricao: 'Salada com alface, frango grelhado e molho especial.',
        imagem: '/img/salada_ceasar.jpg'
    },
    {
        id: 4,
        nome: 'Carne Louca',
        descricao: 'Carne saborosa desfiada.',
        imagem: 'carne.webp'
    },
    {
        id: 5,
        nome: 'Pavê',
        descricao: 'Sobremesa tradicional brasileira, com biscoito e creme.',
        imagem: '/img/pavê.jpeg'
    },
    {
        id: 6,
        nome: 'Escondidinho',
        descricao: 'Um purê de macaxeira recheado com charque .',
        imagem: '/img/escondidinho.jpg'
    },
    {
        id: 7,
        nome: 'Arroz á grega',
        descricao: 'Um arroz rico, ótima opção para festas de fim de ano.',
        imagem: '/img/arroz.jpg'
    },
    {
        id: 8,
        nome: 'Camarão na Moranga',
        descricao: 'Camarão feito com creme de abóbora servido na mesma.',
        imagem: '/img/camarao.webp'
    },
    {
        id: 9,
        nome: 'Picolé gourmet',
        descricao: 'Picolé cremoso, uma ótima opção para renda extra.',
        imagem: '/img/picole.jpg'
    },
    {
        id: 10,
        nome: 'Soda italiana',
        descricao: 'Bebida fácil e refrescante.',
        imagem: '/img/soda1.jpg'
    },
    {
        id: 11,
        nome: 'Feijoada',
        descricao: 'Feijão preto com carne de porco, ícone nacional.',
        imagem: '/img/feijuca.webp'
    },
];


app.get('/api/receitas', (req, res) => {
    res.json(receitas);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
