import * as React from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  SectionList,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import WHANAU from "../../WhanauDummyData/whanauData";
import UserAvatar from "react-native-user-avatar";
import { useFocusEffect } from "@react-navigation/native";

/*Additional features to work on: 
// Currently only able to add and delete users from My Whanau
*/

let newMembers = [];

export const saveData = (newlist) => {
  newMembers = [...newlist];
};

export default function WhanauScreen({ navigation }) {
  const [data, setdata] = useState(WHANAU);

  const updateData = () => {
    let newlist = [...data[0].data];

    newMembers.forEach((element) => {
      newlist.push(element);
    });

    let newData = [...data];
    newData[0].data = [...newlist];

    setdata(newData);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (newMembers.length != 0) {
        updateData();
        newMembers = [];
      }
    })
  );

  const removeItem = (title) => {
    const filteredMyWhanau = data[0].data.filter(
      (item) => item.id !== title.id
    );
    let newData = [...data];
    newData[0].data = [...filteredMyWhanau];
    setdata(newData);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onLongPress={() => {
          if (title.role != "Owner") {
            Alert.alert(
              "Confirm",
              "Are you sure you want to delete this member?",
              [
                {
                  text: "Yes",
                  onPress: () => removeItem(title),
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
          } else {
            Alert.alert(
              "ERROR",
              "Unable to delete yourself from your own Whanau"
            );
          }
        }}
      >
        <Text>
          <View style={styles.avatarBox}>
            <UserAvatar
              size={32}
              name={title.firstName + " " + title.lastName}
            />
          </View>
          <View>
            <Text style={styles.nameBox}>
              {title.role !== "Member"
                ? title.firstName +
                  " " +
                  title.lastName +
                  " (" +
                  title.role +
                  ")"
                : title.firstName + " " + title.lastName}
            </Text>
          </View>
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.background}>
      <SectionList
        sections={data}
        extraData={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />

      <FloatingAction
        actions={actions}
        color="tomato"
        overlayColor="transparent"
        onPressItem={(name) => {
          //Pass data to InviteWhanau Screen here to compare friends already in the Whanau
          navigation.navigate("Invite Whanau");
        }}
      />
    </SafeAreaView>
  );
}

const actions = [
  {
    text: "Invite Whanau",
    name: "bt_whanau",
    color: "tomato",
    icon: <AntDesign name="addusergroup" />,
    position: 1,
  },
];

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 5,
    marginVertical: 2,
    alignContent: "center",
  },
  header: {
    fontSize: 20,
    backgroundColor: "tomato",
    paddingHorizontal: 5,
  },
  nameBox: {
    paddingLeft: 10,
    paddingBottom: 5,
  },
  avatarBox: {
    alignContent: "center",
    paddingTop: 7,
  },
});
