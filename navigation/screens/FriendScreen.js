import React, { useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import { FloatingAction } from "react-native-floating-action";
import Ionicons from "react-native-vector-icons/Ionicons";
import Contact from "../../FriendList/dummy_data/friends";
import { useFocusEffect } from "@react-navigation/native";
import { PassID } from "./OtherProfile";

var saveID = ""
var first_Name = ""
var last_Name = ""

export default function FriendScreen({ navigation }) {  
  const [contactState, setContact] = useState(Contact);
  
  // Need a database to make deleting friends permanent
  // currently the array is only stored temporarily into memory at runtime
  // will reset upon recompiling

  // change to be more efficient
  const removeItem = id => {
    const filteredData = contactState.filter(item => item.id !== id);
    setContact(filteredData);
  }
  
  // change to be more efficient
  const addItem = () => {
    var arr = [...contactState, {id: saveID, firstName: first_Name, lastName: last_Name}]
    setContact(arr);
  }

  const onPressGoTo = (id,fName,lName) => {
    PassID(id,fName,lName);
    navigation.navigate('Other Profile', {
      fullName: fName+" "+lName
    })
  }


  useFocusEffect(
    React.useCallback(() => {
      if ( saveID == '' || first_Name == '' || last_Name == ''){
        // do nothing
        // probably remove console.log if it gets too annoying in terminal
        console.log("No data in form")
      }else{
        addItem()
        saveID = ''
        first_Name = ''
        last_Name = ''
      }
    })
  )
  
  return (
    <React.Fragment>
    <View style = {styles.FriendCard}>
      <FlatList
      keyExtractor={(item) => item.id}
      data={contactState}
      extraData={contactState}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => onPressGoTo(item.id, item.firstName, item.lastName)}
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
                cancelable: true
              }
              )
            }}>
              <Text>
              <View style = {styles.avatarBox}>
                <UserAvatar 
                size = {32} 
                name = {item.firstName +" "+ item.lastName}
                />            
              </View>
                <View>
                    <Text style = {styles.nameBox}>
                      {item.firstName +" "+ item.lastName}      
                    </Text>
                </View>
              </Text>
            </TouchableOpacity>
        )}
        contentContainerStyle ={{backgroundColor: 'white'}}
        />
        <FloatingAction
          actions={actions}
          color = 'tomato'
          overlayColor="transparent"
          onPressItem ={name => {
            navigation.navigate('Add Friend')
          }}
          />
    </View>
    </React.Fragment>
  );
};

export function saveData(id, firstName, lastName) {
  saveID = id 
  first_Name = firstName
  last_Name = lastName
}


const actions = [
  {
    text: "Add Friend",
    name: "bt_friend",
    color : 'tomato',
    icon: <Ionicons name = 'ios-person-add-outline'/>,
    position: 1
  }
]

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  FriendCard: {
    flex: 1,
    backgroundColor : "white",
    paddingHorizontal : 10,
    fontWeight : "bold",
  },
  nameBox: {
    paddingLeft : 10,
    paddingBottom: 7
  },
  avatarBox : {
    alignContent : 'center',
    paddingTop: 10
  },
});
