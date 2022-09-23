import { saveData } from "./RecipeScreen";
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Recipes from "../../DummyData/RecipeData";
import Constants from 'expo-constants';

export default function AddRecipeScreen({navigation: {goBack}}) {
    const {getValues, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            recipeName: '',
            recipeDescription: '',
            recipeTags: '',
        }
    })

    const getRandNum = () => {
        const randomNumber = Math.floor(Math.random() * 10000) + 15;
        return randomNumber
    }
    
    const onSubmit = () => {
        saveData(getRandNum(), getValues("recipeName"), getValues("recipeDescription"), getValues("recipeTags"))
    }

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        }
    }

    console.log('errors', errors)

    //replace in futre with database implementation
    return (
        <View style={styles.container}>
          <Text style={styles.label}>*Recipe Title</Text>
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
              name="recipeName"
              rules={{ required: true }}
              />
          {errors.recipeName && <Text style = {{color: 'red'}}>* Title is required.</Text>}
    
          <Text style={styles.label}>*Recipe Description</Text>
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
              name="recipeDescription"
              rules={{ required: true }}
              />
          {errors.recipeDescription && <Text style = {{color: 'red'}}>* Description is required.</Text>}

          <Text style={styles.label}>Recipe Tags</Text>
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
              name="recipeTags"
              rules={{ required: false }}
              />
          {errors.recipeTags}

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
}

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