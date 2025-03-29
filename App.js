import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// verificar maisculo ou minisculo dps

import Title from "./src/components/Title";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
      <Text>Teste do App.JS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d000ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
