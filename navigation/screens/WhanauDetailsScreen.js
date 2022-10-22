import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import { GetMemberDetails } from "./MemberDetailsScreen";
import { useFocusEffect } from "@react-navigation/native";
import { saveWhanauDetails } from "./WhanauScreen";

let user = {
  id: 1342,
  firstName: "My",
  lastName: "Name",
};

let changes = {
  id: "",
  firstName: "",
  lastName: "",
  role: "",
};

let whanauData = {
  title: "",
  data: [],
};

export function getWhanauName(data) {
  whanauData = data;
}

export function saveChanges(data) {
  changes = data;
}

export default function WhanauDetailsScreen({ navigation }) {
  const [whanauDetails, setWhanauDetails] = useState(whanauData);

  useFocusEffect(
    React.useCallback(() => {
      if (changes.id != "") {
        console.log(changes.role);
        updateDetails();
        saveWhanauDetails({ ...whanauDetails });
        changes = { id: "", firstName: "", lastName: "", role: "" };
      }
    })
  );

  const updateDetails = () => {
    let member = whanauDetails.data.find((item) => {
      return item.id == changes.id;
    });

    let memberIndex = whanauDetails.data.findIndex((item) => {
      return item.id == changes.id;
    });

    if (member.role != changes.role) {
      whanauDetails.data[memberIndex].role = changes.role;
    }

    setWhanauDetails({ ...whanauDetails });
  };

  const goToMemberDetails = (title) => {
    GetMemberDetails(
      whanauDetails.data.find((item) => {
        return title.id == item.id;
      }),
      whanauDetails.data.find((item) => {
        return item.id == user.id;
      })
    );
    navigation.navigate("Member Details");
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => goToMemberDetails(title)}>
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{whanauDetails.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
          electram expetendis, omittam deseruisse consequuntur ius an,
        </Text>
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={whanauDetails.data}
            renderItem={({ item }) => <Item title={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    paddingVertical: 20,
    flex: 3,
  },
  details: {
    fontSize: 20,
    textAlign: "center",
  },
  item: {
    padding: 5,
    marginVertical: 2,
    alignContent: "center",
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
