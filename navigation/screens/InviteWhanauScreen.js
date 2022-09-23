import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  FlatList,
  View,
  Button,
  Alert,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import Contact from "../../FriendList/dummy_data/friends";
import Checkbox from "expo-checkbox";
import { saveData } from "./WhanauScreen";

/*Addtional features to work on: 
//Need to change used data to friend's screen data to sync updates of friends data and invite list data.
//No checking of friends already in Whanau.
//Disable invite button when no checkboxes are selected??
*/

export default function InviteWhanauScreen({ navigation: { goBack } }) {
  const [data, setdata] = useState(Contact);
  const [isdisabled, setisdisabled] = useState(false); //For disabling button

  const onChangeValue = (item) => {
    const newData = data.map((newItem) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          selected: !newItem.selected,
        };
      }
      return {
        ...newItem,
        selected: newItem.selected,
      };
    });
    setdata(newData);
  };

  const update = () => {
    const selected = data.filter((item) => item.selected === true);
    if (selected.length > 0) {
      let newMembers = [];
      selected.forEach((element) => {
        delete element.selected;
        element.role = "Member";
        newMembers.push(element);
      });
      saveData(newMembers);
      goBack();
    } else {
      Alert.alert("Warning", "No users selected");
    }
  };

  // INCOMPLETE
  // Code to disable button if no check boxes are selected
  // const isEnabled = () => {
  //   const selected = data.filter((item) => item.selected === true);
  //   console.log(selected.length);
  //   if (selected.length < 1) {
  //     setisdisabled(false);
  //   } else {
  //     setisdisabled(true);
  //   }
  // };

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.header}>Choose new members to invite</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item, index }) => (
          <Text>
            <View>
              <Checkbox
                style={styles.ckItem}
                disabled={false}
                value={item.selected}
                onValueChange={() => {
                  onChangeValue(item);
                  // isEnabled();
                }}
              />
            </View>
            <View style={styles.avatarBox}>
              <UserAvatar
                size={32}
                name={item.firstName + " " + item.lastName}
              />
            </View>
            <View>
              <Text style={styles.nameBox}>
                {item.firstName + " " + item.lastName}
              </Text>
            </View>
          </Text>
        )}
      />
      <Button
        title="Invite"
        color="tomato"
        disabled={isdisabled}
        onPress={() => {
          update();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    padding: 10,
    backgroundColor: "tomato",
  },
  nameBox: {
    paddingLeft: 10,
    paddingBottom: 7,
  },
  avatarBox: {
    alignContent: "center",
    paddingTop: 10,
  },
  ckItem: {
    marginHorizontal: 10,
    marginBottom: 7,
  },
});
