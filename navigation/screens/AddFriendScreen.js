import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { saveData } from './FriendScreen';
import Contact from '../../FriendList/dummy_data/friends';
import Constants from 'expo-constants';

export default function AddFriendScreen({navigation: {goBack}}){
  const {getValues, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  
  const getRandNum = () => {
    const randomNumber = Math.floor(Math.random() * 10000) + 15;
    return randomNumber;
  }
  
  const onSubmit = () => {
    saveData(getRandNum(), getValues("firstName"), getValues("lastName"))
  };
  
  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  
  console.log('errors', errors);
  

  // replace the code in the future if implementing a database that searches for users
  return (
    <View style={styles.container}>
      <Text style={styles.label}>*First name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          />
          )}
          name="firstName"
          rules={{ required: true }}
          />
      {errors.firstName && <Text style = {{color: 'red'}}>* First name is required.</Text>}

      <Text style={styles.label}>*Last name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          />
          )}
          name="lastName"
          rules={{ required: true }}
          />
      {errors.lastName && <Text style = {{color: 'red'}}>* Last name is required.</Text>}
      <View style={styles.button}>
        <Button
          color = "tomato"
          title="Add"
          onPress={
            handleSubmit(()=>{
              onSubmit()
              goBack()
            })
          }
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'tomato',
    height: 40,
    backgroundColor: 'tomato',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 30,
    paddingBottom: 150,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'whitesmoke',
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
});
