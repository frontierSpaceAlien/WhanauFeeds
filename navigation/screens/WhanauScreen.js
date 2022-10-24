import * as React from "react";
import {
  StyleSheet,
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
import { PassID } from "./OtherProfile";
import { getWhanauName } from "./WhanauDetailsScreen";

/*Additional features to work on: 
// Currently only able to add to My Whanau
*/

//Dummy data for current user
const user = {
  id: "1342",
  firstName: "My",
  lastName: "Name",
};

let chosenWhanau = "";
let newWhanau = "";
let updatedWhanau = "";

export const saveNewWhanau = (whanauName) => {
  newWhanau = whanauName;
};

// export const saveData = (newlist) => {
//   newMembers = [...newlist];
// };

export const saveWhanauDetails = (whanau) => {
  updatedWhanau = whanau;
};

export default function WhanauScreen({ navigation }) {
  const [data, setData] = useState(WHANAU);

  const addWhanau = () => {
    let newData = [
      ...data,
      {
        title: newWhanau,
        data: [
          {
            id: 1342,
            firstName: "My",
            lastName: "Name",
            role: "Owner",
          },
        ],
      },
    ];

    setData(newData);
  };

  const updateWhanauDetails = () => {
    let whanauIndex = data.findIndex((item) => {
      return updatedWhanau.title == item.title;
    });

    let newData = [...data];
    newData[whanauIndex] = { ...updatedWhanau };

    setData(newData);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (newWhanau != "") {
        addWhanau();
        newWhanau = "";
      } else if (updatedWhanau != "") {
        updateWhanauDetails();
        updatedWhanau = "";
      }
    })
  );

  const deleteWhanau = (title) => {
    const filteredData = data.filter((item) => item.title !== title);
    setData(filteredData);
  };

  const onPressGoTo = (id, fName, lName) => {
    PassID(id, fName, lName);
    navigation.navigate("Other Profile", {
      fullName: fName + " " + lName,
    });
  };

  const goToWhanauDetails = () => {
    getWhanauName(
      data.find((item) => {
        return chosenWhanau == item.title;
      })
    );
    navigation.navigate("Whanau Details");
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => onPressGoTo(title.id, title.firstName, title.lastName)}
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
          <TouchableOpacity
            onPress={() => {
              chosenWhanau = title;
              goToWhanauDetails();
            }}
            onLongPress={() => {
              let whanauIndex = data.findIndex((item) => {
                return item.title == title;
              });
              let accIndex = data[whanauIndex].data.findIndex((item) => {
                //Need to change code when accounts have been implemented
                return item.id == user.id;
              });
              if (data[whanauIndex].data[accIndex].role == "Owner") {
                Alert.alert(
                  "Confirm",
                  "Are you sure you want to delete this whanau?",
                  [
                    {
                      text: "Yes",
                      onPress: () => deleteWhanau(title),
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
              }
            }}
          >
            <Text style={styles.header}>{title}</Text>
          </TouchableOpacity>
        )}
      />

      <FloatingAction
        actions={actions}
        color="tomato"
        overlayColor="transparent"
        onPressItem={(name) => {
          //Pass data to InviteWhanau Screen here to compare friends already in the Whanau
          if (name === "bt_create") {
            navigation.navigate("Create Whanau");
          }
        }}
      />
    </SafeAreaView>
  );
}

const actions = [
  {
    text: "Create Whanau",
    name: "bt_create",
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
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "56",
  },
});
