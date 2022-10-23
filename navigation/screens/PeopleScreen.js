import * as React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text, Button, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FriendScreen from "./FriendScreen.js";
import WhanauScreen from "./WhanauScreen";

const Tab = createMaterialTopTabNavigator();

export default function PeopleScreen({ navigation }) {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {backgroundColor: 'tomato'}
      }}>
      <Tab.Screen name="Friends" component={FriendScreen} />
      <Tab.Screen name="Whanau" component={WhanauScreen} />
    </Tab.Navigator>
  );
}
//may not need this...
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
});
