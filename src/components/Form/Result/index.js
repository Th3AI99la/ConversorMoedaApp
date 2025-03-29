import React from "react";
import { View, Text, StyleSheet } from "react-native";

// verificar esse import
import styles from "/style";

export default function Result({ result }) {

  //Dev
  return (
    <View style={styles.container}>
    
      <Text style={styles.formLabel}>{props.msg}</Text>

      <Text style={styles.formValor}> {props.msg}</Text>
    </View>
  );
}
