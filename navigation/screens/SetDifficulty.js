import * as React from "react";
import { StyleSheet, StatusBar, View, Text, Image, Pressable } from "react-native";
import { saveData, saveRecipeDifficulty } from "./RecipeScreen";

var IDpass = ""
var recipe_name = ""
var recipe_tag = ""
var recipe_desc = ""


export default function SetDifficulty({ navigation: {goBack} }) {
  return (
    <View style={styles.container}>
          <View style={styles.header}></View>
          <Image
            source={require("../../assets/favicon.png")}
            style = {styles.image}
          />
          <View style={styles.body}>
            <Text style={styles.name}>{recipe_name}</Text>
            <Text style={styles.info}>{recipe_tag}</Text>
            <Text style={styles.description}>{recipe_desc}</Text>
            <View
            style={{
              height: 2,
              width: "60%",
              backgroundColor: "tomato",
              marginStart: "20%",
              right: 32
            }}
            />
            <Text style={styles.setDiffStyle}>Set Difficulty</Text>
            <Pressable style={styles.easyButton} onPress={() => {
              saveRecipeDifficulty(IDpass,"Easy") 
              goBack()
            }}>
              <Text style={styles.text} >Easy</Text>
            </Pressable>
            <Pressable style={styles.mediumButton}  onPress={() => {
              saveRecipeDifficulty(IDpass,"Medium") 
              goBack()
            }}>
              <Text style={styles.text}>Medium</Text>
            </Pressable>
            <Pressable style={styles.hardButton}  onPress={() => {
              saveRecipeDifficulty(IDpass,"Hard") 
              goBack()
            }}>
              <Text style={styles.text}>Hard</Text>
            </Pressable>
        </View>
      </View>
  );
}

export function PassRecipeData(saveID, rName, rTag, rDesc){
  IDpass = saveID
  recipe_name = rName
  recipe_tag = rTag
  recipe_desc = rDesc
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  header:{
    backgroundColor: 'transparent',
    height:200,
  },
  image: {
    width: 130,
    height: 130,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    bottom: 530
  },
  body:{
    marginTop:40,
    alignItems: 'center'
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    bottom: 30,
    color: "black",
    fontWeight: "600",
  },
  info:{
    fontSize:16,
    bottom: 40,
    color: "black",
    marginTop:10
  },
  description:{
    fontSize:16,
    bottom: 20,
    color: "black",
    textAlign: 'center'
  },
  setDiffStyle:{
    fontSize:28,
    top: 20,
    color: "black",
    fontWeight: "600",
  },
  easyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'tomato',
    top: 40
  },
  mediumButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'tomato',
    top: 60
  },
  hardButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'tomato',
    top: 80
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
