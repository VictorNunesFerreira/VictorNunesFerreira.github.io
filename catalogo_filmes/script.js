const pagina = document.querySelector(".receitas");

receitas.forEach(function(receita)
{
    const receitaNome = document.createElement("h3");
    receitaNome.innerText = receita.nome;
    pagina.appendChild(receitaNome);

    const receitaDesc = document.createElement("h5");
    receitaDesc.innerText = receita.descricao;
    pagina.appendChild(receitaDesc);

    pagina.appendChild(criarElemento("img", "src", receita.foto));

    const receitaIngreds = document.createElement("ul");
    receita.ingredientes.forEach(function(item)
    {
        const ingrediente = document.createElement("li");
        ingrediente.innerText = item;
        receitaIngreds.appendChild(ingrediente);
        
    })
    pagina.appendChild(receitaIngreds);
    
    const receitaPreparo = document.createElement("ol");
    receita.preparo.forEach(function(item)
    {
        const preparo = document.createElement("li");
        preparo.innerText = item;
        receitaPreparo.appendChild(preparo);
        
    })
    pagina.appendChild(receitaPreparo);

})

function criarElemento(html, atributo, valor)
{
    const elemento = document.createElement(html);
    elemento[atributo] = valor;
    return elemento;

}
