import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text, KeyboardAvoidingView, TextInput, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShoppingListItem from "../../components/ShoppingListItem";

export default function ShoppingListScreen({ navigation }) {
  // State governing the item currently being added
  const [shoppingItem, setShoppingItem] = useState()
  // State governing the list of items
  const [shoppingItems, setShoppingItems] = useState([])

  // Function to add the item to the list
  const handleAddItem = () => {
    Keyboard.dismiss();
    if (shoppingItem !== null) {
      setShoppingItems([...shoppingItems, shoppingItem])
      setShoppingItem(null)
    }
  }

  // Function to remove items from the list via index
  const deleteShoppingItem = (index) => {
    let itemsCopy = [...shoppingItems]
    itemsCopy.splice(index, 1)
    setShoppingItems(itemsCopy)
  }

  return (

    // Overall view
    <View style={styles.container}>
      
      {/*Scroll view which covers all except the componenets responsible for adding new items */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.wrapper}>
        <View style={styles.items}>
          {
            // For each item in the list create and display a component accordingly
            // When a component is tapped it will be deleted
            shoppingItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteShoppingItem(index)}>
                  <ShoppingListItem text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      
      </ScrollView>

      {/*View that holds the components that add items to the list */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeWrapper}
        >
          {/*Text input box and addition button */}
          <TextInput style={styles.input} placeholder={'Write an ingredient'} value={shoppingItem} onChangeText={text => setShoppingItem(text)}/>
          <TouchableOpacity onPress={() => handleAddItem()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    paddingHorizontal: 20,    
  },
  items: {
    marginTop: 30,
  },
  writeWrapper: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#E8EAED',
    borderRadius: 80,
    borderColor: 'tomato',
    borderWidth: .6,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#E8EAED',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'tomato',
    borderWidth: .6,
  },
  addText: {},
});
