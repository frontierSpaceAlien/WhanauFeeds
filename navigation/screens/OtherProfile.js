import React, {useState} from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from "react-native";
import { Contact } from '../../FriendList/dummy_data/friends';
import UserAvatar from 'react-native-user-avatar';

var IDpass = ""
var firstName =""
var lastName = ""

export default function OtherProfile({ navigation }) {
  const [contactState, setContact] = useState(Contact);

  return (
    <View style = {styles.background}>
    </View>
  );
}

export function PassID(saveID, fname, lname){
  IDpass = saveID
  firstName = fname
  lastName = lname
  console.log(IDpass)
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
