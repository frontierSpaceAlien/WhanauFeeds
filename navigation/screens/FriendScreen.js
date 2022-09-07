import React from "react";
import { View, Text, StyleSheet, TouchableOpacityBase } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";
import {Contact}  from "../../FriendList/data/friends";


export default function FriendScreen({ navigation }) {
  return (
    <FlashList
      data={Contact}
      renderItem={({ item }) => (
          <View style = {styles.FriendCard}>
            <Text>
              {item.firstName} {item.lastName}
            </Text>
          </View>
      )}
      contentContainerStyle ={{backgroundColor: 'white'}}
      estimatedItemSize={200}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  FriendCard: {
    flex: 1,
    backgroundColor : "white",
    paddingHorizontal : 10,
    paddingVertical : 20,
    fontWeight : "bold"
  }
});
