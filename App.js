import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./navigation/screens/LoginScreen";
import MainContainer from "./navigation/MainContainer";

const Stack = createNativeStackNavigator();
export { Stack };

export default function App() {
  return (
    
      <NavigationContainer independant={true}>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Main" component={MainContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    // Returns the main screen with a nav bar ontop of it
    //<MainContainer />
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
