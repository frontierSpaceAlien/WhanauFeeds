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

  const ItemSerparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "60%",
          backgroundColor: "tomato",
          marginStart: "20%",
        }}
      />
    );
  };

  return (
    <React.Fragment>
      <View style={styles.FriendCard}>
        <FlatList
          ItemSeparatorComponent={ItemSerparator}
          keyExtractor={(item) => item.id}
          data={recipeState}
          extraData={recipeState}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => {
                Alert.alert(
                  "Confirm",
                  "Are you sure you want to delete this recipe?",
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
              style={styles.RecipeCard}
            >
              <Text style={{ paddingVertical: 20 }}>
                <View style={styles.recipeTitle}>
                  <Image
                    source={require("../../assets/favicon.png")}
                    style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                  />
                  <Text
                    style={{
                      flexDirection: "column",
                      paddingHorizontal: 20,
                      maxWidth: 320,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      {item.recipeName}
                    </Text>
                    <Text>
                      {item.recipeTags === "" ? "" : ", " + item.recipeTags}
                    </Text>
                    {"\n" + item.recipeDescription}
                  </Text>
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
            navigation.navigate("Add Recipe");
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
    icon: <Ionicons name="fast-food-outline" />,
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
  RecipeCard: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  recipeTitle: {
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: "row",
    allignItems: "center",
    justifyContent: "center",
  },
});
