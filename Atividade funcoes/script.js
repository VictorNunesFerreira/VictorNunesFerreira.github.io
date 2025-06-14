function saudacao() {
    console.log("Olá, bem-vindo ao sistema!");    
}
    
saudacao();


function saudacaoPersonalizada(nome) {
    console.log(`Olá, ${nome}! Como vai?`);
}
    
saudacaoPersonalizada("Victor"); 


function somar(a, b) {
    return a + b;
}
    
let resultado = somar(7, 15);
console.log("Soma:", resultado);


function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
    
function verificarSituacao(media) {
    if (media >= 7) return "Aprovado";
    if (media >= 5) return "Em recuperação";
    return "Reprovado";
}
    
let media = calcularMedia(6.5, 8.0, 7.0);
console.log(`Média: ${media.toFixed(2)} - Situação: ${verificarSituacao(media)}`);



function mostrarHora()
{
    console.log(new Date());

}

mostrarHora();


function calcularAreaRetangulo(largura = 0, altura = 0)
{
    console.log(largura * altura);
    
}

calcularAreaRetangulo(5, 3);


function ehPar(numero)
{
    if(numero % 2 == 0)
        return true;
    else
        return false;

}

console.log(ehPar(4));
console.log(ehPar(7));


function avaliarAluno(nome, n1, n2, n3)
{
    let media = calcularMedia(n1, n2, n3);
    let situacao = verificarSituacao(media);

    console.log(`Nome: ${nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`);

}

avaliarAluno("Victor", 8.5, 9.2, 7);
