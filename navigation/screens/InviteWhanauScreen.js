import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import Contact from "../../FriendList/dummy_data/friends";

export default function InviteWhanauScreen({ navigation }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.header}>Please choose members to invite</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Contact}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setIsActive((current) => !current);
            }}
          >
            <Text>
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
          </TouchableOpacity>
        )}
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
});
