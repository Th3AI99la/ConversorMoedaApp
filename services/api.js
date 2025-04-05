import axios from "axios";

// Função Assincrona getCotacao
export default async function getCotacao() {
  var url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
  var resuts = [];

  // Fazendo a requisição para a API
  await axios
    .get(url)

    .then(function (response) {
      // recupera os dados da resposta, metodo GET
      const data = response.data;

      const ask = data.USDBRL.ask; // valor de venda
      const name = data.USDBRL.name; // nome da moeda

      resuts = [
        ask,
        name
      ];

      // teste
      console.log("cotacao do dia:");
      console.log(ask);
      console.log(name);
    }) 
    
    // Se a requisição falhar
    .catch(function (error) {
      console.log(error);
    });

  // Retorna os resultados
  return resuts;
}
