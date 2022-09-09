import * as React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function AddFriendScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text onPress={() => alert("this is the settings screen")}>
        Add Friend Screen
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
