import * as React from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  SectionList,
  View,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import WHANAU from "../../WhanauDummyData/whanauData";
import UserAvatar from "react-native-user-avatar";
import { useFocusEffect } from "@react-navigation/native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text>
      <View style={styles.avatarBox}>
        <UserAvatar size={32} name={title.firstName + " " + title.lastName} />
      </View>
      <View>
        <Text style={styles.nameBox}>
          {title.role !== "Member"
            ? title.firstName + " " + title.lastName + " (" + title.role + ")"
            : title.firstName + " " + title.lastName}
        </Text>
      </View>
    </Text>
  </View>
);

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
