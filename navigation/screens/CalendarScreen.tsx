import React, {useState, Fragment, useCallback, useMemo, useRef} from 'react';
import {StyleSheet,Modal, View, ScrollView, Text, TouchableOpacity, Alert, Pressable} from 'react-native';
import {Calendar, CalendarUtils} from 'react-native-calendars';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import testIDs from '../testIDs';
import WHANAU from '../../WhanauDummyData/whanauData';
import Recipes from '../../DummyData/RecipeData';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';

const INITIAL_DATE = new Date().toDateString();
let meals = [];
let events = [];
let datesToMark = {};
let event = {
  date: "",
  title: "",
  description: "",
  whanau: "",
  meals: [],
}

const CalendarScreen = ({navigation}) => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [eventModal, setEventModal] = useState(false)
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [selectedWhanau, setSelectedWhanau] = useState(WHANAU[0].title)
  const [data, setData] = useState(Recipes);

  // const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  // Get the date chosen
  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        selectedColor: 'orange',
        selectedTextColor: 'red'
      }
    };
  }, [selected]);

  const renderFinalCalendar = () => {

    const onChangeValue = (item) => {
      const newData = data.map((newItem) => {
        if (newItem.id == item.id) {
          return {
            ...newItem,
            selected: !newItem.selected,
          };
        }
        return {
          ...newItem,
          selected: newItem.selected,
          };
        });
        setData(newData);
    };

    return (
      <Fragment>
        <View>
          <View>
            <Text style={styles.text}>Final Calendar</Text>
            <Calendar
              style={styles.calendar}
              current={INITIAL_DATE}
              onDayPress= {(day) => {onDayPress(day), event.date = day.dateString; setModal1Visible(!modal1Visible)}}
              onDayLongPress = {(day) =>{
                onDayPress(day)
                 event = events.find((item) => {
                  return item.date == day.dateString;
                })

                console.log(event)

                if(event != undefined){
                  setEventModal(!eventModal)
                } else {
                  Alert.alert("No Event")
                  event = {
                  date: "",
                  title: "",
                  description: "",
                  whanau: "",
                  meals: [],
                  }
                }
              }}
              firstDay={1}
              markedDates={datesToMark}
            />
          </View>

          <View>
            <Modal
            animationType='fade'
            transparent={true}
            visible={modal1Visible}
            onRequestClose={() => {
              setModal1Visible(!modal1Visible);
            }}
            >
              <View style={styles.centeredView}>
                <Pressable
                onPress={() => {
                  setModal1Visible(!modal1Visible)}}
                > 
                  <Text style={styles.button}>Cancel</Text>
                </Pressable>
                <Pressable
                onPress={() => {
                  setModal1Visible(!modal1Visible)
                  setModal2Visible(!modal2Visible)
                  }}
                > 
                  <Text style={styles.button}>Create Event</Text>
                </Pressable>
              </View>
            </Modal>
          </View>

          <View>
            <Modal
            animationType='slide'
            transparent={false}
            visible={modal2Visible}
            onRequestClose={() => {
              setModal2Visible(!modal2Visible);
            }}
            >
               <View style={styles.modal2View}>
                <TextInput 
                  style={styles.inputs}
                  placeholder='Event Name'
                  onChangeText={newText => setText(newText)}
                  />

                <TextInput 
                  style={styles.inputs}
                  placeholder='Description'
                  onChangeText={newComment => setDescription(newComment)}
                  />

                <Picker 
                  style={styles.picker}
                  selectedValue={selectedWhanau}
                  onValueChange={whanau => setSelectedWhanau(whanau)}
                  itemStyle = {styles.item}>
                  <Picker.Item label={WHANAU[0].title} value={WHANAU[0].title}/>
                  <Picker.Item label={WHANAU[1].title} value={WHANAU[1].title}/>
                </Picker>

                <FlatList
                keyExtractor={(item) => item.id + "A"}
                data = {data}
                renderItem={({item}) => (
                  <Text style = {{backgroundColor: "white"}}>
                    <View>
                      <Checkbox
                        style={styles.ckBox}
                        value = {item.selected}
                        onValueChange = {() => onChangeValue(item)}
                      />
                    </View>
                    <View>
                      <Text style={styles.ckBoxItem}>{item.recipeName}</Text>
                    </View>
                  </Text>      
                  )}
                />

                 
                <View style={{flexDirection: "row"}}>
                  <Pressable
                  onPress={() => {
                    setModal2Visible(!modal2Visible)}}
                  > 
                    <Text style={styles.button}>Cancel</Text>
                  </Pressable>
                  <Pressable
                  onPress={() => {
                    setModal2Visible(!modal2Visible)
                    // console.log(text);
                    event.title = text;
                    // console.log(selectedWhanau)
                    event.whanau = selectedWhanau;
                    // console.log(description)
                    event.description = description;
                    let mealsData = data.filter((item) => item.selected === true)
                    mealsData.forEach((meal) => {
                      event.meals.push(meal.recipeName)
                    })

                    // console.log(meals[0].recipeName)
                    console.log(event)
                    events.push(event);

                    datesToMark = {...datesToMark, [event.date]: {
                      marked: true,
                    }}

                    event = {
                      date: "",
                      title: "",
                      description: "",
                      whanau: "",
                      meals: [],
                    }

                    setText("")
                    setSelectedWhanau(WHANAU[0].title)
                    setDescription("")
                    setData(Recipes)
                    Alert.alert("Event Created")
                    }}
                  > 
                    <Text style={styles.button}>Save</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <View>
            <Modal 
            animationType='slide'
            transparent={false}
            visible={eventModal}
            onRequestClose={() => {
              setEventModal(!eventModal);
            }}
            >
              <View style={styles.modal2View}>
                <Text style = {styles.item}> EVENT DETAILS</Text>
                <Text style = {styles.item}> Title: {event.title}</Text>
                <Text style = {styles.item}> Description: {event.description}</Text>
                <Text style = {styles.item}> Invited Whanau: {event.whanau}</Text>
                <Text style = {styles.item}> Planned Meals: {event.meals}</Text>

                <View style={{flexDirection: "row"}}>
                  <Pressable
                  style = {styles.button }
                  onPress={()=>{setEventModal(!eventModal)  
                    event = {
                      date: "",
                      title: "",
                      description: "",
                      whanau: "",
                      meals: [],
                    }}}
                  >
                    <Text>Back</Text>
                </Pressable>
                <Pressable
                  style = {styles.button }
                  onPress={()=>{
                    Alert.alert("Warning", "Do you want to delete this event?",               
                    [
                  {
                  text: "Yes",
                  onPress: () => {

                    delete datesToMark[event.date]
                    console.log(datesToMark)
                    events = events.filter((item) => {
                      event.date == item.date
                    })
                    
                    event = {
                      date: "",
                      title: "",
                      description: "",
                      whanau: "",
                      meals: [],
                    }
                    Alert.alert("", "Event deleted")
                    setEventModal(!eventModal)
                  },
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
                    )}}
                  >
                    <Text>Delete</Text>
                </Pressable>
                </View>

              </View>
              
            </Modal>
          </View>
    
        </View>
      </Fragment>
    );
  };

  const renderExamples = () => {
    return (
      <Fragment>
        {renderFinalCalendar()}
      </Fragment>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={true} testID={testIDs.calendars.CONTAINER}>
      {renderExamples()}
    </ScrollView>
  );
};


export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  switchText: {
    margin: 10,
    fontSize: 16
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  disabledText: {
    color: 'grey'
  },
  defaultText: {
    color: 'purple'
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  customDay: {
    textAlign: 'center'
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8
  },
  customTitleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2'
  }, centeredView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 300,
  },button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    fontSize: 20,
    margin: 5,
    backgroundColor: "tomato"
  }, modal2View: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 300,
    backgroundColor: "grey"
  }, inputs:{
    fontSize: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginBottom: 5,
  }, picker:{
    backgroundColor: "white",
    width: 200, 
    height: 10,
    margin: 5,
  }, item: {
    fontSize: 20,
  }, ckBox: {
    marginHorizontal: 10,
    marginBottom: 7,
    backgroundColor: "white"
  }, ckBoxItem: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 7,
  }
});