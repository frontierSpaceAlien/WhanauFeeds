import * as React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function CalendarScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text>Calendar Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
