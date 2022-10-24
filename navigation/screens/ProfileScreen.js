import * as React from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import DietaryRequirements from "../../DummyData/DietaryTags"; 

export default function ProfileScreen({ navigation }) {

  const dietTag = DietaryRequirements[Math.floor(Math.random() * DietaryRequirements.length)]
  console.log(dietTag)

    return (
      <View style={styles.container}>
            <View style={styles.header}></View>
            <UserAvatar style = {styles.avatar} name = {"Test User"}size = {64}/>
            <View style={styles.body}>
              <Text style={styles.name}>Test User</Text>
              <Text style={styles.info}>Food Connoisseur</Text>
              <Text style={styles.dietInfo}>{dietTag}</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
          </View>
        </View>
      );
      
    }

  const styles = StyleSheet.create({
    header:{
      backgroundColor: "tomato",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
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
      top: 20,
      color: "black",
      fontWeight: "600",
    },
    info:{
      fontSize:16,
      top: 10,
      color: "black",
      marginTop:10
    },
    description:{
      fontSize:16,
      paddingTop: 100,
      color: "black",
      marginTop:10,
      textAlign: 'center'
    },
    dietInfo:{
      fontSize:12,
      top: 10,
      color: "black",
      marginTop:10
    },
  });
