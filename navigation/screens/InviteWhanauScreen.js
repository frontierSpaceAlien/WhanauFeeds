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

export default function InviteWhanauScreen({ navigation }) {
  const [data, setdata] = useState(Contact);

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
    const newData = selected.map((newItem) => {
      console.log("Inviting??");
      return {
        ...newItem,
      };
    });

    newData.forEach((element) => {
      navigation.navigate("People", {
        screen: "Whanau",
        params: { firstName: "HEllo" },
      });
    });
  };

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.header}>Choose friends to invite</Text>
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
        disabled={false}
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
