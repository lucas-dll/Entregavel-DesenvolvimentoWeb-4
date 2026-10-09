# Blog do Lucas

Entregável de Desenvolvimento Web da Semana 04, com exercícios de arrays, manipulação do DOM e eventos em JavaScript.

## Como executar

Abra o arquivo `index.html` no navegador, mantendo o `app.js` na mesma pasta. Pressione F12 e selecione a aba Console para acompanhar os resultados. Não é necessário instalar dependências.

## Métodos de array

- `forEach`: percorre os elementos para executar uma ação, como imprimir nomes e produtos ou criar itens na lista.
- `map`: transforma cada elemento e retorna um novo array. Foi usado para converter nomes em maiúsculas e extrair os nomes dos produtos.
- `filter`: retorna um novo array com os elementos que atendem a uma condição. Foi usado para selecionar preços acima de 20 e produtos abaixo de 50.
- `reduce`: acumula os elementos em um único resultado. Foi usado para somar os preços, começando com o acumulador em zero.

As operações com `map` e `filter` usadas no projeto não modificam os arrays originais. A soma do array `precos` é 140, e a dos produtos é 100.

## Manipulação do DOM

O `querySelector` seleciona um elemento, e o `querySelectorAll` seleciona todos os elementos correspondentes. O script altera o título e imprime o conteúdo dos parágrafos.

O `innerHTML` substitui os três itens iniciais do HTML por dois itens. Em seguida, `createElement` e `append` adicionam o terceiro item e as três tarefas, totalizando seis itens nesse momento. O bloco de eventos acrescenta mais um item, deixando sete itens visíveis ao abrir a página.

O `textContent` insere texto sem interpretar tags HTML. O `classList` aplica o destaque ao terceiro item e marca o primeiro como feito. A classe `feito` risca o texto do item.

## Eventos e Event Delegation

O botão registra cliques no console e muda seu texto ao passar o mouse. O campo de nome imprime seu valor a cada tecla solta (`keyup`).

A lista usa um único listener de clique no elemento `ul`. Os eventos dos itens chegam à lista por propagação. A verificação `e.target.tagName === "LI"` identifica se o clique foi em um item antes de alternar a classe `feito` e imprimir seu texto.

Essa delegação evita criar um listener para cada item, reduzindo o uso de memória e o trabalho de registrar eventos em listas grandes. Também permite que os itens criados depois pelo JavaScript ou pelo formulário respondam aos cliques automaticamente.

No formulário, `preventDefault()` impede o recarregamento da página. O `trim()` remove espaços das extremidades do texto. Entradas vazias são ignoradas; entradas válidas viram novos itens, e o campo é limpo.

## Como testar

1. Confira as saudações, os arrays, as somas e a contagem de seis itens no console.
2. Passe o mouse sobre o botão e clique nele.
3. Digite no campo Nome e acompanhe os valores no console.
4. Clique nos itens, incluindo o criado pelo JavaScript, para marcar e desmarcar.
5. Adicione uma tarefa pelo formulário e clique nela para testar a delegação.
6. Tente enviar o formulário vazio ou apenas com espaços: nenhum item será adicionado.

As alterações ficam apenas na página atual e são reiniciadas ao recarregar.
