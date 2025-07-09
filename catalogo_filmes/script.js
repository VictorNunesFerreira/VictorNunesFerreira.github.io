filmes.forEach(filme =>
{
    criarFilme(filme);

});

function criarFilme(filme)
{
    const catalogo = document.querySelector(".pagina-filmes");
    
    const paginaFilme = criarDiv("pagina-filme");
    catalogo.appendChild(paginaFilme);

    const filmeInformacoes = criarDiv("filme-informacoes");
    paginaFilme.appendChild(filmeInformacoes);

    const informacoesImagem = criarDiv("informacoes-imagem");
    informacoesImagem.appendChild(criarImagem(filme.figura));
    filmeInformacoes.appendChild(informacoesImagem);

    const informacoesTexto = criarDiv("informacoes-texto");
    filmeInformacoes.appendChild(informacoesTexto);

    const textoTitulo = criarDiv("texto-titulo");
    textoTitulo.appendChild(criarElemento("h2", filme.titulo));
    informacoesTexto.appendChild(textoTitulo);

    const textoGenero = criarDiv("texto-genero");
    textoGenero.appendChild(criarGeneros("h3", filme.generos));
    informacoesTexto.appendChild(textoGenero);
    
    const textoElenco = criarDiv("texto-elenco");
    textoElenco.appendChild(criarElenco("h3", filme.elenco));
    informacoesTexto.appendChild(textoElenco);

    const informacoesAvaliacao = criarDiv("informacoes-avaliacao");
    filmeInformacoes.appendChild(informacoesAvaliacao);

    const avaliacaoClassificacao = criarDiv("avaliacao-classificacao");
    avaliacaoClassificacao.appendChild(criarClassificacao(filme.classificacao));
    informacoesAvaliacao.appendChild(avaliacaoClassificacao);

    const avaliacaoNota = criarDiv("avaliacao-nota");
    avaliacaoNota.appendChild(criarNota(filme.opinioes));
    informacoesAvaliacao.appendChild(avaliacaoNota);

    const filmeDescricao = criarDiv("filme-descricao");
    filmeDescricao.appendChild(criarElemento("p", filme.resumo));
    paginaFilme.appendChild(filmeDescricao);

    const filmeSemelhantes = criarDiv("filme-semelhantes");
    filmeSemelhantes.appendChild(criarElemento("h4", "Títulos similares"))
    paginaFilme.appendChild(filmeSemelhantes);

    const semelhantesImagens = criarDiv("semelhantes-imagens");
    filmeSemelhantes.appendChild(semelhantesImagens);

}

function criarDiv(classe)
{
    const div = document.createElement("div");
    div.classList.add(classe)
    return div;

}

function criarImagem(valor)
{
    const figura = document.createElement("img");
    figura["src"] = valor;
    return figura;

}

function criarElemento(html, valor)
{
    const elemento = document.createElement(html);
    elemento.innerText = valor;
    return elemento;

}

function criarGeneros(html, valores)
{
    const elemento = document.createElement(html);
    valores.forEach((valor, index) =>
    {
        if(index != valores.length - 1)
            elemento.innerText = elemento.innerText + valor + ", ";
        else
            elemento.innerText = elemento.innerText + valor;

    });
    return elemento;

}

function criarElenco(html, valores)
{
    const elemento = document.createElement(html);
    elemento.append(criarElemento("span", "Elenco: "));
    valores.forEach((valor, index) =>
    {
        if(index != valores.length - 1)
            elemento.innerText = elemento.innerText + valor + ", ";
        else
            elemento.innerText = elemento.innerText + valor;

    });
    return elemento;

}

function criarClassificacao(valor)
{   
    const classific = document.createElement("span");

    if(valor == 0)
        classific.innerText = "Livre";
    else
        classific.innerText = valor;

    if(valor <= 14)
        classific.classList.add("verde")
    else if(valor > 14 && valor < 18)
        classific.classList.add("amarelo")
    else
        classific.classList.add("vermelho")

    return classific;

}

function criarNota(opinioes)
{
    let soma = 0;
    let contador = 0;

    opinioes.forEach(opiniao =>
    {
        soma = soma + opiniao.rating;
        contador++;

    });

    const nota = document.createElement("span");
    nota.innerText = `Nota: ${soma / contador}/5`;
    return nota;

}
