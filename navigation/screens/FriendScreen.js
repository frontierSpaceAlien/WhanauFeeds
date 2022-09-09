import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Button } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import { FloatingAction } from "react-native-floating-action";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FriendScreen({ navigation }) {  
  const [Contact, setContact] = useState([
    {
      id : 1,
      firstName: "Illana",
      lastName: "Torres",
    },
    {
      id : 2,
      firstName: "Rogan",
      lastName: "Mcleod",
    },
    {
      id : 3,
      firstName: "Joy",
      lastName: "Blackwell",
    },
    {
      id : 4,
      firstName: "Brent",
      lastName: "Frazier",
    },
    {
      id : 5,
      firstName: "Cathleen",
      lastName: "Holloway",
    },
    {
      id : 6,
      firstName: "Ashton",
      lastName: "Bean",
    },
    {
      id : 7,
      firstName: "Brianna",
      lastName: "Knox",
    },
    {
      id : 8,
      firstName: "Shafira",
      lastName: "Hester",
    },
    {
      id : 9,
      firstName: "Eric",
      lastName: "Blanchard",
    },
    {
      id : 10,
      firstName: "Brenda",
      lastName: "Charles",
    },
    {
      id : 11,
      firstName: "Malachi",
      lastName: "Blankenship",
    },
    {
      id : 12,
      firstName: "Jillian",
      lastName: "Burt",
    },
    {
      id : 13,
      firstName: "Elton",
      lastName: "Harris",
    },
    {
      id : 14,
      firstName: "Brody",
      lastName: "Lyons",
    },
  ]);

// Need a database to make deleting friends permanent
// currently the array is only stored temporarily into memory at runtime
// will reset upon recompiling
  const removeItem = id => {
    const filteredData = Contact.filter(item => item.id !== id);
    setContact(filteredData);
  }

  const addItem = () => {
    var arr = [...Contact , {id: 15, firstName: "Josh", lastName: "Smith"}];
    setContact(arr);
  }

  return (
    <React.Fragment>
    <View style = {styles.FriendCard}>
      <FlatList
      data={Contact}
      renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => {
                Alert.alert(
                  "Confirm",
                  "Are you sure you want to delete this friend?",
                  [
                    {
                      text: "Yes",
                      onPress: () => removeItem(item.id),
                      style: "default",
                    },
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                  ],
                  {
                    cancelable: true
                  }
                )
              }}>
              <Text>
              <View style = {styles.avatarBox}>
                <UserAvatar 
                size = {32} 
                name = {item.firstName +" "+ item.lastName}
                />            
              </View>
                <View>
                    <Text style = {styles.nameBox}>
                      {item.firstName +" "+ item.lastName}
                    </Text>
                </View>
              </Text>
            </TouchableOpacity>
        )}
        contentContainerStyle ={{backgroundColor: 'white'}}
        />
        <FloatingAction
          actions={actions}
          color = 'tomato'
          overlayColor="transparent"
          onPressItem ={name => {
            navigation.navigate('Add Friend')
          }}
          />
    </View>
    </React.Fragment>
  );
};


const actions = [
  {
    text: "Add Friend",
    name: "bt_friend",
    color : 'tomato',
    icon: <Ionicons name = 'ios-person-add-outline'/>,
    position: 1
  }
]

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
    fontWeight : "bold",
  },
  nameBox: {
    paddingLeft : 10,
    paddingBottom: 7
  },
  avatarBox : {
    alignContent : 'center',
    paddingTop: 10
  },
  centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
