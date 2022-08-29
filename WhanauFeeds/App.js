import * as React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import MainContainer from "./navigation/MainContainer";

export default function App() {
  return (
    // Returns the main screen with a nav bar ontop of it
    <MainContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
