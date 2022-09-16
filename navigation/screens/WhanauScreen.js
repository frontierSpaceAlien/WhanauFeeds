import React, { useState} from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Member from "../../Whanau/AUT Whanau/WhanauMembers";
// for now, shall have only one whanau

export default function WhanauScreen({ navigation }) {
  const [memberState, setMember] = useState(Member);

  // change to be more efficient
  const changeRole = id => {
    const filteredData = contactState.filter(item => item.id !== id);
    var arr = [...contactState, {id: id, firstName: first_Name, lastName: last_Name}]
    setContact(arr);
  }


  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>WF Whanau</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "56",
  },
});
