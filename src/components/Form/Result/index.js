import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./style";


export default function Result({ msg, result }) {
  //Dev
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>{msg}</Text>
      <Text style={styles.formValor}>{result}</Text>
    </View>
  );
}
