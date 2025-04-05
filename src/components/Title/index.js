import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Title() {
  return (
    <View >
      <Text>
        Tela do Title - Conversor de Moeda v1.0
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({

    textTitle:{
        color: "#1967d2",
        fontSize: 24,
        fontWeight: "bold"
    },
    boxTitle: {
        alignItems: "center",
        justifyContent: "center"
    }

});


