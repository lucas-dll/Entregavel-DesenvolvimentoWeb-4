// Bloco 1 - Arrays e métodos
const nomes = ["Lucas", "Ana", "Pedro"];

nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];
const precosAcimaDe20 = precos.filter((preco) => preco > 20);
const totalPrecos = precos.reduce((total, preco) => total + preco, 0);

console.log("Preços acima de 20:", precosAcimaDe20);
console.log("Soma dos preços:", totalPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 5 },
    { nome: "Mochila", preco: 80 }
];

const nomesProdutos = produtos.map((produto) => produto.nome);
const produtosAbaixoDe50 = produtos.filter((produto) => produto.preco < 50);
const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos abaixo de 50:", produtosAbaixoDe50);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach((produto) => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});

// Bloco 2 - Manipulação do DOM
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Lucas";

const textos = document.querySelectorAll(".texto");
textos.forEach((texto) => {
    console.log(texto.textContent);
});

const lista = document.querySelector("#lista");
lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);
terceiroItem.classList.add("destaque");
console.log("Terceiro item tem destaque:", terceiroItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach((tarefa) => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});

lista.querySelector("li").classList.add("feito");
console.log("Total de itens da lista:", lista.querySelectorAll("li").length);

// Bloco 3 - Eventos e delegação
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
    console.log(campoNome.value);
});

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

const novoItem = document.createElement("li");
novoItem.textContent = "Item criado pelo JavaScript";
lista.append(novoItem);

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const tarefa = campoTarefa.value.trim();

    if (tarefa === "") {
        return;
    }

    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
    campoTarefa.value = "";
});
