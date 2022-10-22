import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import { useState } from "react";
import { saveChanges } from "./WhanauDetailsScreen";

let user = {
  id: "",
  firstName: "",
  lastName: "",
  role: "",
};
let memberDetails = {
  id: "",
  firstName: "",
  lastName: "",
  role: "",
};

// for some reason, everytime this class is saved, the user avatar breaks upon fast refresh through expo
// this only happens during development.
// upon rebuilding the app, the user avatar works.
export default function MemberDetailsScreen({ navigation }) {
  const [memberData, setMemberData] = useState(memberDetails);

  const editMemberData = (role) => {
    //Current changes to role don't change the UI of all screens just member details screen
    setMemberData({ ...memberData, role: role });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <UserAvatar
        style={styles.avatar}
        name={memberData.firstName + " " + memberData.lastName}
        size={64}
      />
      <View style={styles.body}>
        <Text style={styles.name}>
          {memberData.firstName + " " + memberData.lastName}
        </Text>
        <Text style={styles.info}>{memberData.role}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
          electram expetendis, omittam deseruisse consequuntur ius an,
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            if (
              user.role == "Member" ||
              memberData.role == "Owner" ||
              memberData.role == user.role
            ) {
              Alert.alert("Cannot change member roles");
            } else {
              Alert.alert(
                "Change Role",
                "Change this person's role?",
                [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Yes",
                    style: "default",
                    onPress: () => {
                      Alert.alert(
                        "New role",
                        "Choose new role",
                        [
                          {
                            text: "Cancel",
                            style: "cancel",
                          },
                          {
                            text: "Admin",
                            style: "default",
                            onPress: () => {
                              editMemberData("Admin"),
                                saveChanges({ ...memberData, role: "Admin" });
                            },
                            //{
                            //   console.log(memberDetails.role);
                            //   memberDetails.role = "Admin";
                            //   console.log(memberDetails.role);
                            // },
                          },
                          {
                            text: "Member",
                            style: "default",
                            onPress: () => {
                              editMemberData("Member"),
                                saveChanges({ ...memberData, role: "Member" });
                            },
                            // {
                            //   console.log(memberDetails.role);
                            //   memberDetails.role = "Member";
                            //   console.log(memberDetails.role);
                            // },
                          },
                        ],
                        {
                          cancelable: true,
                        }
                      );
                    },
                  },
                ],
                {
                  cancelable: true,
                }
              );
            }
          }}
          title="Change role"
        />
      </View>
    </SafeAreaView>
  );
}

export function GetMemberDetails(details, userDetails) {
  memberDetails = details;
  user = userDetails;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "tomato",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
    alignItems: "center",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    top: 20,
    color: "black",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    top: 10,
    color: "black",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    paddingTop: 100,
    color: "black",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    justifyContent: "flex-end",
  },
});
