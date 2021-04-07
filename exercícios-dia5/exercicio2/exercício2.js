let nome = prompt("Digite aqui o seu nome");
let idade = prompt("Digite aqui a sua idade");
let sexo = prompt("Digite aqui qual é o seu sexo. Ex: Homem ou Mulher");
let contador = 0;
let pessoa =  [];
pessoa.push({nome:nome, idadede:idade, sexo:sexo});

document.write(`Nome: ${nome}.<br> Idade: ${idade}. <br> Sexo: ${sexo}<br><br><br>`);

    let mudanca = prompt("você deseja mudar de nome? (sim/não)");
while(contador <= 4)

    if (mudanca == "sim") {;
        nome = prompt("Digite aqui seu outro nome");
        idade = prompt("Digite aqui sua outra idade");
        sexo = prompt("Digite aqui seu outro sexo");
        document.write(`Nome: ${nome}.<br> Idade: ${idade}. <br> Sexo: ${sexo}<br><br><br>`);
        contador += 1
        pessoa.push({nome:nome, idadede:idade, sexo:sexo});
        mudanca = prompt("você deseja mudar de nome? (sim/não)");
    } else {
        break;
    }

//var pessoa2 = object.assign({},pessoa);
