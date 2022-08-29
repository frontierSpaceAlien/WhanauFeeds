import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Sceens
// - to add another screen make one and import as so
import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import RecipeScreen from "./screens/RecipeScreen";
import PeopleScreen from "./screens/PeopleScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Screen names
// - then declare a name for the label
const homeName = "Home";
const calendarName = "Calendar";
const recipeName = "Recipes";
const peopleName = "People";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initualRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            // Controls the navigation tabs
            // - add another else if(routeName === newScreenName)
            // - define its icons, pick from this website
            // - https://oblador.github.io/react-native-vector-icons/
            if (routeName === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === calendarName) {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (routeName === recipeName) {
              iconName = focused ? "nutrition" : "nutrition-outline";
            } else if (routeName === peopleName) {
              iconName = focused ? "people" : "people-outline";
            } else if (routeName === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 5, fontSize: 10 }, // Styling for the text under icons
          style: { padding: 10, height: 100 }, // Styling for the navbar itself
        }}
      >
        {/* if adding a new page, lastly add another <Tab.Screen />
            the order of the <Tab.Screen /> components determines the order in the app*/}
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={calendarName} component={CalendarScreen} />
        <Tab.Screen name={recipeName} component={RecipeScreen} />
        <Tab.Screen name={peopleName} component={PeopleScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
