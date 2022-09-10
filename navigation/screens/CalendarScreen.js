import * as React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";
import { Calendar } from 'react-native-calendario';

export default function CalendarScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text onPress={() => alert("this is the calendar screen")}>
        Calendar Screen
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
