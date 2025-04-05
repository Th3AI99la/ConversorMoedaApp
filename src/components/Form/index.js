import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./style";
import { Result } from "./Result";
import services from "../../../services/Api";
import getCotacao from "../../../services/Api";


export default function Form() {
  // Declaracao de variaveis

  const [real, setReal] = useState(null);
  const [msg, setMsg] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [cotacao, setCotacao] = useState(null);

  // funcao chamada ao clicar no botao

  function validar() {
    if (real != null) {
      converter();
      setReal(null);
    } else {
      setMsg("Informe um valor válido");
      setResultado(null);
    }

    //funcao de conversao

    async function converter() {
      const data = await getCotacao()

        setCotacao(data[0])
        setMsg(data[1])

        console.log("Conversao")
        console.log(cotacao)
        console.log(msg)
        console.log(real)

      setResultado((real / cotacao).toFixed(2));
    }

    //Dev
    return (

      <View styles={styles.formContext}>

          <Text style={styles.formLabel}>Real: </Text>

          <TextInput />
          style={styles.TextInput}
          keyboardType="numeric" value={real}
          onChangeText={setReal}
          placeholder="R$: 10,00"
          <TextInput />

          <TouchableOpacity>

            style={styles.button}
            onPress=
            {() => {
              validar();
            }}
            <Text style={styles.TextButton}>Converter para USS</Text>
          </TouchableOpacity>

          <Result msg={msg} valor={resultado} />

      </View>
    );
  }
}
