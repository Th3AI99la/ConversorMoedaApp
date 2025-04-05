import axios from "axios";

export default async function getCotacao() {

  
    var url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
    var results = []

    //Chamada da API
    await axios.get(url)
        .then(function(response){

            //recupera todo a resposta da chamada da api, metodo GET
            const data = response.data

            const ask = data.USDBRL.ask
            const name = data.USDBRL.name

            results = [ask, name]

            console.log("Cotacao do dia")
            console.log(ask)
            console.log(name)


        })
        .catch(function(error){
            console.log(error)
        })

        return results
}