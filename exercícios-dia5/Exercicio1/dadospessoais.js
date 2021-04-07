var nome = prompt("Digite aqui o seu nome");
var idade = prompt("Digite aqui a sua idade");
var sexo = prompt("Digite aqui qual é o seu sexo. Ex: Homem ou Mulher");
var pessoa = {
        nome: nome,
        idade: idade,
        sexo: sexo
};
//var pessoa2 = object.assign({},pessoa);

document.write(`Seu nome é: ${nome}.<br>`);
document.write(`Sua idade é: ${idade}.<br>`);
document.write(`Seu sexo é: ${sexo}.<br>`);

