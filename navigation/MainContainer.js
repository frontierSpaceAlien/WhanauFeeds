import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

// Sceens
// - to add another screen make one and import as so
import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import RecipeScreen from "./screens/RecipeScreen";
import PeopleScreen from "./screens/PeopleScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AddFriendScreen from "./screens/AddFriendScreen";
import InviteWhanauScreen from "./screens/InviteWhanauScreen";
import OtherProfileScreen from "./screens/OtherProfile";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import CreateWhanauScreen from "./screens/CreateWhanauScreen";
import WhanauDetailsScreen from "./screens/WhanauDetailsScreen";
import MemberDetailsScreen from "./screens/MemberDetailsScreen";

// Screen names
// - then declare a name for the label
const homeName = "Home";
const calendarName = "Calendar";
const recipeName = "Recipes";
const peopleName = "People";
const profileName = "Profile";
const settingsName = "Settings";
const AddFriendName = "Add Friend";
const InviteWhanauName = "Invite Whanau";
const CreateWhanauName = "Create Whanau";
const WhanauDetailsName = "Whanau Details";
const OtherProfileName = "Other Profile";
const AddRecipeName = "Add Recipe";
const MemberDetailsName = "Member Details";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // the code breaks if you remove 'name = ...'
        name="DO NOT DELETE"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={AddFriendName} component={AddFriendScreen} />
      <Stack.Screen name={InviteWhanauName} component={InviteWhanauScreen} />
      <Stack.Screen name={AddRecipeName} component={AddRecipeScreen} />
      <Stack.Screen name={CreateWhanauName} component={CreateWhanauScreen} />
      <Stack.Screen name={WhanauDetailsName} component={WhanauDetailsScreen} />
      <Stack.Screen name={MemberDetailsName} component={MemberDetailsScreen} />
      <Stack.Screen
        name={OtherProfileName}
        component={OtherProfileScreen}
        options={({ route }) => ({ title: route.params.fullName })}
      />
    </Stack.Navigator>
  );
}

const BottomNav = () => {
  return (
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
          } else if (routeName == profileName) {
            iconName = focused ? "person" : "person-outline";
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
      <Tab.Screen name={profileName} component={ProfileScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
