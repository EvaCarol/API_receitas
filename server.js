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
        imagem: '/img/lasanha.jpg' ,  // O caminho para a imagem agora será acessível via '/img'
        link: 'https://www.tudogostoso.com.br/receita/876-lasanha-de-carne-moida.html',
    },
    {
        id: 2,
        nome: 'Bolo de Chocolate',
        descricao: 'Bolo fofinho de chocolate com cobertura cremosa.',
        imagem: '/img/08-bolo-chocolate.png',
        link: 'https://www.tudogostoso.com.br/receita/309779-bolo-de-chocolate-simples.html',
    },
    {
        id: 3,
        nome: 'Salada Caesar',
        descricao: 'Salada com alface, frango grelhado e molho especial.',
        imagem: '/img/salada_ceasar.jpg',
        link: 'https://www.tudogostoso.com.br/receita/7329-salada-caesar.html',
    },
    {
        id: 4,
        nome: 'Carne Louca',
        descricao: 'Carne saborosa desfiada.',
        imagem: '/img/carne2.jpg',
        link: 'https://www.tudogostoso.com.br/receita/71309-carne-louca-de-festa.html',
    },
    {
        id: 5,
        nome: 'Pavê',
        descricao: 'Sobremesa tradicional brasileira, com biscoito e creme.',
        imagem: '/img/pave.jpg',
        link: 'https://www.tudogostoso.com.br/receita/15939-pave-de-chocolate.html',
    },
    {
        id: 6,
        nome: 'Escondidinho',
        descricao: 'Um purê de macaxeira recheado com charque .',
        imagem: '/img/escondidinho.jpg',
        link: 'https://www.tudogostoso.com.br/receita/141866-escondidinho-de-charque-nordestino.html',
    },
    {
        id: 7,
        nome: 'Arroz á grega',
        descricao: 'Um arroz rico, ótima opção para festas de fim de ano.',
        imagem: '/img/arroz.jpg',
        link: 'https://www.tudogostoso.com.br/receita/28-arroz-a-grega.html',
    },
    {
        id: 8,
        nome: 'Camarão na Moranga',
        descricao: 'Camarão feito com creme de abóbora servido na mesma.',
        imagem: '/img/camar.webp',
        link: 'https://www.tudogostoso.com.br/receita/1106-camarao-na-moranga.html',
    },
    {
        id: 9,
        nome: 'Picolé gourmet',
        descricao: 'Picolé cremoso, uma ótima opção para renda extra.',
        imagem: '/img/picole.jpg',
        link: 'https://receitas.globo.com/regionais/rpc/estudio-c/aprenda-a-fazer-geladinho-gourmet-caseiro-de-forma-facil-e-rapida-g.ghtml',
    },
    {
        id: 10,
        nome: 'Soda italiana',
        descricao: 'Bebida fácil e refrescante.',
        imagem: '/img/soda1.jpg',
        link: 'https://www.tudogostoso.com.br/receita/159399-soda-italiana-de-maca-verde.html',
    },
    {
        id: 11,
        nome: 'Feijoada',
        descricao: 'Feijão preto com carne de porco, ícone nacional.',
        imagem: '/img/feijuca.webp',
        link: 'https://www.tudogostoso.com.br/receita/2998-feijoada.html',
    },
];

app.get('/api/receitas', (req, res) => {
    res.json(receitas);
});


app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`);
});

