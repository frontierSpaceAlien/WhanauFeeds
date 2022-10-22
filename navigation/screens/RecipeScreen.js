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
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Recipes from "../../DummyData/RecipeData";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AirbnbRating } from 'react-native-ratings';
import { useFocusEffect } from "@react-navigation/native";
import { FloatingAction } from "react-native-floating-action";
import { PassRecipeData } from "./SetDifficulty";

var saveID = "";
var saveItemID = "";
var recipe_Name = "";
var recipe_Desc = "";
var recipe_Tags = "";
var recipe_Difficulty = "";

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
        recipeDifficulty: "No Difficulty Set",
      },
    ];
    setRecipe(arr);
  };

// Updates the difficulty of the recipe in the state array.
// Finds the recipe based on id.
  function handleDifficultyChange(id){
    const newDiff = recipeState.map(item => {
      if (item.id == id){
        return {...item, recipeDifficulty: recipe_Difficulty}
      }
      return item;
    })
    setRecipe(newDiff)
  }

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
      if (recipe_Difficulty == ""){
        console.log("No difficulty data")
      }else {
        handleDifficultyChange(saveItemID)
        recipe_Difficulty = ""
      }
    })
  );

  // On press, this moves to the SetDifficulty class
  // At the same time it passes the necessary data to display
  // in SetDifficulty class
  const onPressGoTo = (id, rName, rTag, rDesc) => {
    PassRecipeData(id,rName, rTag, rDesc);
    navigation.navigate('Set Difficulty')
  }

  const ItemSerparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: 220,
          backgroundColor: "tomato",
          marginStart: 70,
        }}
      />
    );
  };

  // The Edit text is awkwardly placed on the near the top right because of the floating action button.
  // If there are more recipes added to the flatlist, then there needs to be a way
  // to get rid of the floating action button to access the edit text.

  return (
    <React.Fragment>
      <View style={styles.RecipeCard}>
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
                    style={{ width: 60, height: 60, borderRadius: 30 }}
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
                  <Text style = {styles.difficultyStyle}>
                    {"\n\nDifficulty: "+item.recipeDifficulty}
                  </Text>
                  </Text>
                </View>
              </Text>
              <Text style = {styles.editOption}>
                <Menu>
                  <MenuTrigger text='Edit' />
                  <MenuOptions>
                    <MenuOption onSelect={() => {
                      onPressGoTo(item.id, item.recipeName, item.recipeTags, item.recipeDescription)
                      }} 
                      text='Set Difficulty' 
                      />
                  </MenuOptions>
                </Menu>
              </Text>
              <AirbnbRating 
              starContainerStyle = {styles.starStyle}
              size = {20}
              defaultRating={0}
              showRating={false}/>
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

// Saves data from SetDifficulty class
// This is to ensure the passing of data from that class
// to update the state array
export function saveRecipeDifficulty(id, recipeDifficulty){
  saveItemID = id
  recipe_Difficulty = recipeDifficulty
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
  editOption:{
    bottom: 120,
    left: 300
  },
  difficultyStyle:{
    bottom: 32
  },
  starStyle:{
    bottom: 30
  }
});
