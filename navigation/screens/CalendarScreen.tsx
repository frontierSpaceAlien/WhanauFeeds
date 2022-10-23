// import React, {useState} from 'react';
// import {View, TouchableOpacity, Text} from 'react-native';
// import {Agenda} from 'react-native-calendars';
// import {Card, Avatar} from 'react-native-paper';

// const timeToString = (time) => {
//   const date = new Date(time);
//   return date.toISOString().split('T')[0];
// };

// const Schedule: React.FC = () => {
//   const [items, setItems] = useState({});

//   const loadItems = (day) => {
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);
//         if (!items[strTime]) {
//           items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150)),
//             });
//           }
//         }
//       }
//       const newItems = {};
//       Object.keys(items).forEach((key) => {
//         newItems[key] = items[key];
//       });
//       setItems(newItems);
//     }, 1000);
//   };

//   const renderItem = (item) => {
//     return (
//       <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
//         <Card>
//           <Card.Content>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}>
//               <Text>{item.name}</Text>
//               <Avatar.Text label="J" />
//             </View>
//           </Card.Content>
//         </Card>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <Agenda
//         items={items}
//         loadItemsForMonth={loadItems}
//         selected={'2017-05-16'}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// export default Schedule;

  // const renderCalendarWithSelectableDate = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with selectable date</Text>
  //       <Calendar
  //         testID={testIDs.calendars.FIRST}
  //         enableSwipeMonths
  //         current={INITIAL_DATE}
  //         style={styles.calendar}
  //         onDayPress={onDayPress}
  //         markedDates={marked}
  //       />
  //     </Fragment>
  //   );
  // };


  // const renderCalendarWithWeekNumbers = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with week numbers</Text>
  //       <Calendar style={styles.calendar} hideExtraDays showWeekNumbers/>
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithMinAndMaxDates = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with min and max dates</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         hideExtraDays
  //         current={INITIAL_DATE}
  //         minDate={getDate(-6)}
  //         maxDate={getDate(6)}
  //         disableAllTouchEventsForDisabledDays
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithMarkedDatesAndHiddenArrows = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         current={INITIAL_DATE}
  //         hideExtraDays
  //         firstDay={1}
  //         markedDates={{
  //           [getDate(6)]: {selected: true, marked: true, disableTouchEvent: true},
  //           [getDate(7)]: {selected: true, marked: true, dotColor: 'red'},
  //           [getDate(8)]: {marked: true, dotColor: 'red', disableTouchEvent: true},
  //           [getDate(9)]: {marked: true},
  //           [getDate(10)]: {disabled: true, activeOpacity: 0, disableTouchEvent: false}
  //         }}
  //         hideArrows={true}
  //         // disabledByDefault={true}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithMultiDotMarking = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with multi-dot marking</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         current={INITIAL_DATE}
  //         markingType={'multi-dot'}
  //         markedDates={{
  //           [getDate(2)]: {
  //             selected: true,
  //             dots: [
  //               {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
  //               {key: 'massage', color: 'red', selectedDotColor: 'white'}
  //             ]
  //           },
  //           [getDate(3)]: {
  //             disabled: true,
  //             dots: [
  //               {key: 'vacation', color: 'green', selectedDotColor: 'red'},
  //               {key: 'massage', color: 'red', selectedDotColor: 'green'}
  //             ]
  //           }
  //         }}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithPeriodMarkingAndSpinner = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with period marking and spinner</Text>
  //       <Calendar
  //         // style={styles.calendar}
  //         current={INITIAL_DATE}
  //         minDate={getDate(-5)}
  //         displayLoadingIndicator
  //         markingType={'period'}
  //         theme={{
  //           calendarBackground: '#333248',
  //           textSectionTitleColor: 'white',
  //           textSectionTitleDisabledColor: 'gray',
  //           dayTextColor: 'red',
  //           todayTextColor: 'white',
  //           selectedDayTextColor: 'white',
  //           monthTextColor: 'white',
  //           indicatorColor: 'white',
  //           selectedDayBackgroundColor: '#333248',
  //           arrowColor: 'white',
  //           // textDisabledColor: 'red',
  //           stylesheet: {
  //             calendar: {
  //               header: {
  //                 week: {
  //                   marginTop: 30,
  //                   marginHorizontal: 12,
  //                   flexDirection: 'row',
  //                   justifyContent: 'space-between'
  //                 }
  //               }
  //             }
  //           }
  //         }}
  //         markedDates={{
  //           [getDate(-2)]: {disabled: true},
  //           [getDate(1)]: {textColor: 'pink'},
  //           [getDate(2)]: {textColor: 'pink'},
  //           [getDate(12)]: {startingDay: true, color: 'green', endingDay: true},
  //           [getDate(22)]: {startingDay: true, color: 'green'},
  //           [getDate(23)]: {endingDay: true, color: 'gray'},
  //           [getDate(25)]: {startingDay: true, color: 'gray'},
  //           [getDate(26)]: {color: 'gray'},
  //           [getDate(27)]: {endingDay: true, color: 'gray'}
  //         }}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithPeriodMarkingAndDotMarking = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with period marking and dot marking</Text>
  //       <Calendar
  //         current={INITIAL_DATE}
  //         minDate={getDate(-14)}
  //         markingType={'period'}
  //         markedDates={{
  //           [INITIAL_DATE]: {marked: true, dotColor: '#50cebb'},
  //           [getDate(4)]: {marked: true, dotColor: '#50cebb'},
  //           [getDate(9)]: {startingDay: true, color: '#50cebb', textColor: 'white'},
  //           [getDate(10)]: {
  //             color: '#70d7c7',
  //             customTextStyle: {
  //               color: '#FFFAAA',
  //               fontWeight: '700'
  //             }
  //           },
  //           [getDate(11)]: {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
  //           [getDate(12)]: {color: '#70d7c7', inactive: true},
  //           [getDate(13)]: {
  //             endingDay: true,
  //             color: '#50cebb',
  //             textColor: 'white',
  //             customContainerStyle: {
  //               borderTopRightRadius: 5,
  //               borderBottomRightRadius: 5
  //             }
  //           },
  //           [getDate(25)]: {inactive: true, disableTouchEvent: true}
  //         }}
  //         disabledDaysIndexes={[0, 6]}
  //         theme={{
  //           textInactiveColor: '#a68a9f',
  //           textSectionTitleDisabledColor: 'grey',
  //           textSectionTitleColor: '#319e8e',
  //           arrowColor: '#319e8e'
  //         }}
  //         onDayPress={(day) => console.warn(`${day.dateString} pressed`)}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithMultiPeriodMarking = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with multi-period marking</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         current={INITIAL_DATE}
  //         markingType={'multi-period'}
  //         markedDates={{
  //           [INITIAL_DATE]: {
  //             periods: [
  //               {startingDay: true, endingDay: false, color: 'green'},
  //               {startingDay: true, endingDay: false, color: 'orange'}
  //             ]
  //           },
  //           [getDate(1)]: {
  //             periods: [
  //               {startingDay: false, endingDay: true, color: 'green'},
  //               {startingDay: false, endingDay: true, color: 'orange'},
  //               {startingDay: true, endingDay: false, color: 'pink'}
  //             ]
  //           },
  //           [getDate(3)]: {
  //             periods: [
  //               {startingDay: true, endingDay: true, color: 'orange'},
  //               {color: 'transparent'},
  //               {startingDay: false, endingDay: false, color: 'pink'}
  //             ]
  //           }
  //         }}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithCustomMarkingType = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Custom calendar with custom marking type</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         hideExtraDays
  //         current={INITIAL_DATE}
  //         minDate={INITIAL_DATE}
  //         markingType={'custom'}
  //         markedDates={{
  //           [INITIAL_DATE]: {
  //             customStyles: {
  //               container: {
  //                 backgroundColor: 'white',
  //                 elevation: 2
  //               },
  //               text: {
  //                 color: 'red',
  //                 marginTop: 0
  //               }
  //             }
  //           },
  //           [getDate(8)]: {
  //             selected: true
  //           },
  //           [getDate(9)]: {
  //             customStyles: {
  //               container: {
  //                 backgroundColor: 'red',
  //                 elevation: 4
  //               },
  //               text: {
  //                 color: 'white'
  //               }
  //             }
  //           },
  //           [getDate(14)]: {
  //             customStyles: {
  //               container: {
  //                 backgroundColor: 'green'
  //               },
  //               text: {
  //                 color: 'white'
  //               }
  //             }
  //           },
  //           [getDate(15)]: {
  //             customStyles: {
  //               container: {
  //                 backgroundColor: 'black',
  //                 elevation: 2
  //               },
  //               text: {
  //                 color: 'yellow'
  //               }
  //             }
  //           },
  //           [getDate(21)]: {
  //             disabled: true
  //           },
  //           [getDate(28)]: {
  //             customStyles: {
  //               text: {
  //                 color: 'black',
  //                 fontWeight: 'bold'
  //               }
  //             }
  //           },
  //           [getDate(30)]: {
  //             customStyles: {
  //               container: {
  //                 backgroundColor: 'pink',
  //                 elevation: 4,
  //                 borderColor: 'purple',
  //                 borderWidth: 5
  //               },
  //               text: {
  //                 marginTop: 3,
  //                 fontSize: 11,
  //                 color: 'black'
  //               }
  //             }
  //           },
  //           [getDate(31)]: {
  //             customStyles: {
  //               container: {
  //                 backgroundColor: 'orange',
  //                 borderRadius: 0
  //               }
  //             }
  //           }
  //         }}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithCustomDay = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with custom day component</Text>
  //       <Calendar
  //         style={[styles.calendar, styles.customCalendar]}
  //         dayComponent={({date, state}) => {
  //           return (
  //             <View>
  //               <Text style={[styles.customDay, state === 'disabled' ? styles.disabledText : styles.defaultText]}>
  //                 {date?.day}
  //               </Text>
  //             </View>
  //           );
  //         }}
  //       />
  //     </Fragment>
  //   );
  // };

  // const renderCalendarWithCustomHeaderTitle = () => {
  //   const [selectedValue, setSelectedValue] = useState(new Date());

  //   const getNewSelectedDate = useCallback(
  //     (date, shouldAdd) => {
  //       const newMonth = new Date(date).getMonth();
  //       const month = shouldAdd ? newMonth + 1 : newMonth - 1;
  //       const newDate = new Date(selectedValue.setMonth(month));
  //       const newSelected = new Date(newDate.setDate(1));
  //       return newSelected;
  //     },
  //     [selectedValue]
  //   );
  //   const onPressArrowLeft = useCallback(
  //     (subtract, month) => {
  //       const newDate = getNewSelectedDate(month, false);
  //       setSelectedValue(newDate);
  //       subtract();
  //     },
  //     [getNewSelectedDate]
  //   );
  
  //   const onPressArrowRight = useCallback(
  //     (add, month) => {
  //       const newDate = getNewSelectedDate(month, true);
  //       setSelectedValue(newDate);
  //       add();
  //     },
  //     [getNewSelectedDate]
  //   );

  //   const CustomHeaderTitle = (
  //     <TouchableOpacity style={styles.customTitleContainer} onPress={() => console.warn('Tapped!')}>
  //       <Text style={styles.customTitle}>{selectedValue.getMonth() + 1}-{selectedValue.getFullYear()}</Text>
  //     </TouchableOpacity>
  //   );

  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with custom header title</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         customHeaderTitle={CustomHeaderTitle}
  //         onPressArrowLeft={onPressArrowLeft}
  //         onPressArrowRight={onPressArrowRight}
  //       />
  //     </Fragment>
  //   );
  // };

  // const customHeaderProps: any = useRef();

  // const setCustomHeaderNewMonth = (next = false) => {
  //   const add = next ? 1 : -1;
  //   const month = new Date(customHeaderProps?.current?.month);
  //   const newMonth = new Date(month.setMonth(month.getMonth() + add));
  //   customHeaderProps?.current?.addMonth(add);
  //   setCurrentMonth(newMonth.toISOString().split('T')[0]);
  // };
  // const moveNext = () => {
  //   setCustomHeaderNewMonth(true);
  // };
  // const movePrevious = () => {
  //   setCustomHeaderNewMonth(false);
  // };

  // const renderCalendarWithInactiveDays = () => {
  //   return (
  //     <Fragment>
  //       <Text style={styles.text}>Calendar with inactive days</Text>
  //       <Calendar
  //         style={styles.calendar}
  //         disableAllTouchEventsForInactiveDays
  //         current={INITIAL_DATE}
  //         markedDates={{
  //           [getDate(3)]: {
  //             inactive: true
  //           },
  //           [getDate(4)]: {
  //             inactive: true
  //           }
  //         }}
  //       />
  //     </Fragment>
  //   );
  // };


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
let newEvent = {
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
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [selectedWhanau, setSelectedWhanau] = useState(WHANAU[0].title)
  const [data, setData] = useState(Recipes);

  // const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

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
              onDayPress= {(day) => {onDayPress(day), newEvent.date = day.dateString; setModal1Visible(!modal1Visible)}}
              onDayLongPress = {(day) =>{
                onDayPress(day)
                let findEvent = events.find((item) => {
                  return item.date == day.dateString;
                })

                if(findEvent != undefined){
                  console.log(findEvent)
                } else {
                  console.log("No event today")
                }
              }}
              firstDay={1}
              markedDates={marked}
            />
          </View>

          <View>
            <Modal
            animationType='fade'
            transparent={true}
            visible={modal1Visible}
            onRequestClose={() => {
              Alert.alert("Model has been closed.");
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
              Alert.alert("Model has been closed.");
              setModal1Visible(!modal2Visible);
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
                    newEvent.title = text;
                    // console.log(selectedWhanau)
                    newEvent.whanau = selectedWhanau;
                    // console.log(description)
                    newEvent.description = description;
                    newEvent.meals = data.filter((item) => item.selected === true)
                    // console.log(meals[0].recipeName)
                    console.log(newEvent)
                    events.push(newEvent);

                    newEvent = {
                      date: "",
                      title: "",
                      description: "",
                      whanau: "",
                      meals: [],
                    }

                    setText("")
                    setSelectedWhanau("")
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
    
        </View>
      </Fragment>
    );
  };

  const renderExamples = () => {
    return (
      <Fragment>
        {/*{renderCalendarWithSelectableDate()}
        {renderCalendarWithWeekNumbers()}
        {renderCalendarWithMinAndMaxDates()}
        {renderCalendarWithCustomDay()}
        {renderCalendarWithInactiveDays()}
        {renderCalendarWithCustomHeaderTitle()}
        {renderCalendarWithMarkedDatesAndHiddenArrows()}
        {renderCalendarWithMultiDotMarking()}
        {renderCalendarWithPeriodMarkingAndSpinner()}
        {renderCalendarWithPeriodMarkingAndDotMarking()}
        {renderCalendarWithMultiPeriodMarking()}
        {renderCalendarWithCustomMarkingType()} */}
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