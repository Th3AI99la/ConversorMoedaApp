import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Title from "./src/components/title";
import Form from "./src/components/form";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <Form/>
      
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
