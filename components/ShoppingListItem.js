import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShoppingListItem = (props) => {

    // Simple custom component to display shopping list items 
    return (
        <View style={styles.item}>
            <View style={styles.leftItems}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>                
            </View>  
            <View style={styles.circle}></View>          
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#E8EAED',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'tomato',
        opacity: .4,
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: 'tomato',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default ShoppingListItem;