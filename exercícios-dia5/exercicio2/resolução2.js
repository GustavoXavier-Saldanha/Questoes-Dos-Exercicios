var pessoa = {
    nome: prompt("Digite seu nome"),
    idade: prompt("Digite sua idade"),
    sexo: prompt("Digite seu sexo\n M - Masculino \n F - Feminino")
};

let alteracoes = [pessoa];

const quantidadeDeVezes = 5;
let contador = 0;

while (contador < quantidadeDeVezes) {

    let alterar = prompt('Deseja alterar alguma informação na pessoa?\nS - Sim\nN - Não');

    if (alterar.toLowerCase() = 's'){
        pessoa = {
            nome: prompt("Digite seu nome"),
            idade: prompt("Digite sua idade"),
            sexo: prompt("Digite seu sexo\n M - Masculino \n F - Feminino")
        }

            alteracoes.push(pessoa);

            contador++;

    }
    else{
        contador = 5
    }

}

document.write("<h1> Pessoas informadas para o site</h1>");

for(var posicao in alteração ){
   let antes = alteracoes[posicao]; 

   let novaPosicao = (posicao == alteracoes.legth - 1)? posicao: parseInt(posicao) + 1;

   let depois = alteracoes[novaPosicao + 1];  

   document.write(`<p>Antes:Nome ${antes.nome} - Idade: ${antes.idade} - Sexo: ${antes.sexo}</p>`);
   document.write(`<p>Depois:Nome ${depois.nome} - Idade: ${depois.idade} - Sexo: ${depois.sexo}</p>`)
}


console.log(alteracoes)