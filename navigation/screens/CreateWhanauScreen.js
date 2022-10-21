import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  NativeModules,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { saveNewWhanau } from "./WhanauScreen";
import WHANAU from "../../WhanauDummyData/whanauData";

export const checkName = (newWhanauName) => {
  for (let i = 0; i < WHANAU.length; i++) {
    if (WHANAU[i].title === newWhanauName || newWhanauName === "") {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = checkName;

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

  const onSubmit = () => {
    saveNewWhanau(getValues("whanauName"));
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  // replace the code in the future if implementing a database that searches for users
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
        name="whanuName"
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
            if (!checkName(getValues("whanauName"))) {
              onSubmit();
              // probably add alert or something idk
              goBack();
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
