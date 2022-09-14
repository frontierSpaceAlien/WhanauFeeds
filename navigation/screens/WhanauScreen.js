import * as React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";

// for now, shall have only one whanau

export default function WhanauScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>AUT Whanau</Text>
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
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "56",
  },
});
