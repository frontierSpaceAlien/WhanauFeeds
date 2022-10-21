import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  NativeModules,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { saveNewWhanau } from "./WhanauScreen";
import WHANAU from "../../WhanauDummyData/whanauData";

let whanauName = "";
let whanauList = [...WHANAU];

const onPressGoTo = (id, fName, lName) => {
  PassID(id, fName, lName);
  navigation.navigate("Other Profile", {
    fullName: fName + " " + lName,
  });
};

/*
Code currently doesn't check if whanau name already exists
*/
export default function CreateWhanauScreen({ navigation: { goBack } }) {
  const {
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      whanauName: "",
    },
  });

  const checkName = () => {
    let invalid = true;
    for (let i = 0; i < WHANAU.length; i++) {
      if (whanauList[i].title == whanauName || whanauName == "") {
        console.log(whanauList[i].title);
        console.log(whanauName);
        return invalid;
      } else {
        invalid = false;
      }
    }
    return invalid;
  };

  const onSubmit = () => {
    saveNewWhanau(whanauName);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>*Whanau name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="whanauName"
        rules={{ required: true }}
      />
      {errors.firstName && (
        <Text style={{ color: "red" }}>* Whanau name is required.</Text>
      )}
      <View style={styles.button}>
        <Button
          color="tomato"
          title="Add"
          onPress={handleSubmit(() => {
            whanauName = getValues("whanauName");
            if (!checkName()) {
              whanauList.push({ title: whanauName, data: [] });
              onSubmit();
              goBack();
            } else {
              Alert.alert("Error", "Whanau Name invalid");
            }
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "tomato",
    height: 40,
    backgroundColor: "tomato",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    paddingBottom: 150,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "whitesmoke",
    borderColor: "black",
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
});
