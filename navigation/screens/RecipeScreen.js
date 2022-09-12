import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Image,
} from "react-native";
import Recipes from "../../DummyData/RecipeData";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { FloatingAction } from "react-native-floating-action";

var saveID = "";
var recipe_Name = "";
var recipe_Desc = "";
var recipe_Tags = "";

export default function RecipeScreen({ navigation }) {
  const [recipeState, setRecipe] = useState(Recipes);

  const removeItem = (id) => {
    const filteredData = recipeState.filter((item) => item.id !== id);
    setRecipe(filteredData);
  };

  const addItem = () => {
    var arr = [
      ...recipeState,
      {
        id: saveID,
        recipeName: recipe_Name,
        recipeDescription: recipe_Desc,
        recipeTags: recipe_Tags,
      },
    ];
    setRecipe(arr);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (saveID == "" || recipe_Name == "" || recipe_Desc == "") {
        // do nothing
        // probably remove console.log if it gets too annoying in terminal
        console.log("No data in form");
      } else {
        addItem();
        saveID = "";
        recipe_Name = "";
        recipe_Desc = "";
        recipe_Tags = "";
      }
    })
  );

  return (
    <React.Fragment>
      <View style={styles.FriendCard}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={recipeState}
          extraData={recipeState}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => {
                Alert.alert(
                  "Confirm",
                  "Are you sure you want to delete this friend?",
                  [
                    {
                      text: "Yes",
                      onPress: () => removeItem(item.id),
                      style: "default",
                    },
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                  ],
                  {
                    cancelable: true,
                  }
                );
              }}
            >
              <Text>
                <View style={styles.recipeTitle}>
                  <Image
                    source={require("../../assets/favicon.png")}
                    style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                  />
                  <Text style={{ paddingLeft: 100 }}>
                    {item.id + 1 + ". " + item.recipeName}
                  </Text>
                </View>
                <View>
                  <Text>{item.recipeDescription}</Text>
                </View>
                <View>
                  <Text>{item.recipeTags}</Text>
                </View>
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ backgroundColor: "white" }}
        />
        <FloatingAction
          actions={actions}
          color="tomato"
          overlayColor="transparent"
          onPressItem={(name) => {
            navigation.navigate("Add Friend");
          }}
        />
      </View>
    </React.Fragment>
  );
}

export function saveData(id, recipeName, recipeDescription, recipeTags) {
  saveID = id;
  recipe_Name = recipeName;
  recipe_Desc = recipeDescription;
  recipe_Tags = recipeTags;
}

const actions = [
  {
    text: "Add Recipe",
    name: "bt_friend",
    color: "tomato",
    icon: <Ionicons name="ios-person-add-outline" />,
    position: 1,
  },
];

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  FriendCard: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  nameBox: {
    paddingLeft: 10,
    paddingBottom: 7,
  },
  avatarBox: {
    alignContent: "center",
    paddingTop: 10,
  },
  recipeTitle: {
    paddingLeft: 10,
    paddingBottom: 10,
    flexDirection: "row",
    allignItems: "center",
    justifyContent: "center",
  },
  recipeDesc: {},
  recipeTagStyle: {},
});
