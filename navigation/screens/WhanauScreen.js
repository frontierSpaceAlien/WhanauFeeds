import * as React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";

export default function WhanauScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text>Whanua Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
