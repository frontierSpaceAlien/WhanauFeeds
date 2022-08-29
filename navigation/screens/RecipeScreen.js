import * as React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";

export default function RecipeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text onPress={() => alert("this is the recipe screen")}>
        Recipe Screen
      </Text>
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
