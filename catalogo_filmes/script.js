filmes.forEach(function(filme)
{
    criarFilme(filme);

})

function criarFilme(filme)
{
    const catalogo = document.querySelector(".pagina-filmes");
    
    const paginaFilme = criarDiv("pagina-filme");
    catalogo.appendChild(paginaFilme);

    const filmeInformacoes = criarDiv("filme-informacoes");
    paginaFilme.appendChild(filmeInformacoes);

    const informacoesImagem = criarDiv("informacoes-imagem");
    informacoesImagem.appendChild(criarImagem("img", "src", filme.figura));
    filmeInformacoes.appendChild(informacoesImagem);

    const informacoesTexto = criarDiv("informacoes-texto");
    filmeInformacoes.appendChild(informacoesTexto);

    const textoTitulo = criarDiv("texto-titulo");
    textoTitulo.appendChild(criarElemento("h2", filme.titulo));
    informacoesTexto.appendChild(textoTitulo);

    const textoGenero = criarDiv("texto-genero");
    informacoesTexto.appendChild(textoGenero);

    const textoElenco = criarDiv("texto-elenco");
    informacoesTexto.appendChild(textoElenco);

    const informacoesClassificacao = criarDiv("informacoes-classificacao");
    filmeInformacoes.appendChild(informacoesClassificacao);

}

function criarDiv(classe)
{
    const div = document.createElement("div");
    div.classList.add(classe)
    return div;

}

function criarImagem(html, atributo, valor)
{
    const figura = document.createElement(html);
    figura[atributo] = valor;
    return figura;

}

function criarElemento(html, valor)
{
    const titulo = document.createElement(html);
    titulo.innerText = valor;
    return titulo;

}
