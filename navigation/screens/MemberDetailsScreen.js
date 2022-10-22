import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import UserAvatar from "react-native-user-avatar";

let user;
let memberDetails;

// for some reason, everytime this class is saved, the user avatar breaks upon fast refresh through expo
// this only happens during development.
// upon rebuilding the app, the user avatar works.
export default function MemberDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <UserAvatar
        style={styles.avatar}
        name={memberDetails.firstName + " " + memberDetails.lastName}
        size={64}
      />
      <View style={styles.body}>
        <Text style={styles.name}>
          {memberDetails.firstName + " " + memberDetails.lastName}
        </Text>
        <Text style={styles.info}>{memberDetails.role}</Text>
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
              memberDetails.role == "Owner" ||
              memberDetails.role == user.role
            ) {
              Alert.alert("Cannot change member roles");
            } else {
              Alert.alert(
                "Change Role",
                "Change this person's role?",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Yes", style: "default", onPress: () => {} },
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
