import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import { FloatingAction } from "react-native-floating-action";
import AntDesign from "react-native-vector-icons/AntDesign";
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

let newMembers = [];

export function getWhanauName(data) {
  whanauData = data;
}

export function saveChanges(data) {
  changes = data;
}
export const saveData = (newlist) => {
  newMembers = [...newlist];
};

export default function WhanauDetailsScreen({ navigation }) {
  const [whanauDetails, setWhanauDetails] = useState(whanauData);

  useFocusEffect(
    React.useCallback(() => {
      if (newMembers.length != 0) {
        updateData();
        saveWhanauDetails({ ...whanauDetails });
        newMembers = [];
      } else if (changes.id != "") {
        updateDetails();
        saveWhanauDetails({ ...whanauDetails });
        changes = { id: "", firstName: "", lastName: "", role: "" };
      }
    })
  );

  const removeItem = (title) => {
    const filteredWhanau = whanauDetails.data.filter(
      (item) => item.id !== title.id
    );
    whanauDetails.data = [...filteredWhanau];

    setWhanauDetails({ ...whanauDetails });
  };

  const updateData = () => {
    newMembers.forEach((element) => {
      whanauDetails.data.push(element);
    });

    setWhanauDetails({ ...whanauDetails });
  };

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
      <TouchableOpacity
        onPress={() => goToMemberDetails(title)}
        onLongPress={() => {
          let userRole = whanauData.data.find((item) => {
            return user.id == item.id;
          });
          if (title.role != "Owner" && userRole.role != "Member") {
            Alert.alert(
              "Confirm",
              "Are you sure you want to delete this member?",
              [
                {
                  text: "Yes",
                  onPress: () => {
                    removeItem(title);
                    saveWhanauDetails({ ...whanauDetails });
                  },
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
            Alert.alert("ERROR", "Unable to delete member");
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

          <FloatingAction
            actions={actions}
            color="tomato"
            overlayColor="transparent"
            onPressItem={(name) => {
              //Pass data to InviteWhanau Screen here to compare friends already in the Whanau
              if (name === "bt_whanau") {
                navigation.navigate("Invite Whanau");
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const actions = [
  {
    text: "Invite members",
    name: "bt_whanau",
    color: "tomato",
    icon: <AntDesign name="addusergroup" />,
    position: 1,
  },
];

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
