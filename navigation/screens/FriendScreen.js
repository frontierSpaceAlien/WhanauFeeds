import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import {Contact}  from "../../FriendList/data/friends";
import UserAvatar from 'react-native-user-avatar';
import { FloatingAction } from "react-native-floating-action";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function FriendScreen({ navigation }) {

  return (
    <React.Fragment>
    <View style = {styles.FriendCard}>
      <FlashList
      data={Contact}
      renderItem={({ item }) => (
            <TouchableOpacity>
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
        estimatedItemSize={200}
        />
        <FloatingAction
          actions={actions}
          color = 'tomato'
          overlayColor="transparent"
          />
    </View>
    </React.Fragment>
  );
};

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
    fontWeight : "bold"
  },
  nameBox: {
    paddingLeft : 10,
    paddingBottom: 7
  },
  avatarBox : {
    alignContent : 'center',
    paddingTop: 10
  }
});
