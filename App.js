import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  ScrollView,
  Switch,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleAddGoals = () => {
    if (textInput.trim() !== "") {
      setGoalsList([...goalsList, { text: textInput, isEnabled: false }]);
      setTextInput("");
    }
  };

  const handleChangeText = (text) => {
    setTextInput(text);
  };

  const handleDeleteGoal = (index) => {
    const updatedGoalsList = [...goalsList];
    updatedGoalsList.splice(index, 1);
    setGoalsList(updatedGoalsList);
  };

  const toggleSwitch = (index) => {
    const updatedGoalsList = [...goalsList];
    updatedGoalsList[index].isEnabled = !updatedGoalsList[index].isEnabled;
    setGoalsList(updatedGoalsList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
      <View style={ styles.imageBg }>
      <Image
      style={
        {
          width:60,
          height:60,
          resizeMode:"",
        }
      }
      // source={require("./assets/favicon.png")}
      source={{ uri:"https://imgs.search.brave.com/-OsWAftRr0awhB5QhCul6kjActClNJ_WgRLWNbVcSro/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3RvLWRvLWxp/c3QtcG5nLXRoZS1w/b3dlci1vZi1hLXRv/LWRvLWxpc3QtaW1v/ZGVsYWZyaWNhLTEw/MjQucG5n" }}

      /></View>
      <Text style={styles.title}>TO DO List</Text>
      </View>
      
      <View style={styles.inputCard}>
        <TextInput
          placeholder="Enter your Goals..."
          placeholderTextColor="#fff"
          style={styles.textInput}
          value={textInput}
          onChangeText={handleChangeText}
        />
        <TouchableHighlight style={styles.button} onPress={handleAddGoals} underlayColor={"#9B59B6"}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableHighlight>
      </View>
      {/* <View style={styles.outputCard}>
        <Text style={styles.outputHeader}>TO DO ITEMS</Text>
        <ScrollView contentContainerStyle={styles.outputList}>
          {goalsList.map((goal, index) => (
            <View style={styles.list} key={index}>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#A569BD" }}
                onValueChange={() => toggleSwitch(index)}
                value={goal.isEnabled}
              />
              <Text style={styles.listItemText}>{goal.text}</Text>
              <Pressable onPress={() => handleDeleteGoal(index)}>
                <Ionicons
                  style={styles.icon}
                  name="trash"
                  size={24}
                  color="red"
                />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View> */}
      
      <View style={styles.outputCard}>
        <Text style={styles.outputHeader}>TO DO ITEMS</Text>
        <FlatList
          data={goalsList}
          renderItem={({ item, index }) => (
            <View style={styles.list} key={index}>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#A569BD" }}
                onValueChange={() => toggleSwitch(index)}
                value={item.isEnabled}
              />
              <Text style={styles.listItemText}>{item.text}</Text>
              <TouchableOpacity onPress={() => handleDeleteGoal(index)}>
                <Ionicons
                  style={styles.icon}
                  name="trash"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      

      {/* <View style={styles.outputCard}>
        <Text style={styles.outputHeader}>TO DO ITEMS</Text>
        <ScrollView contentContainerStyle={styles.outputList}>
          {goalsList.map((goal, index) => (
            <View style={styles.list} key={index}>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#A569BD" }}
                onValueChange={() => toggleSwitch(index)}
                value={goal.isEnabled}
              />
              <Text style={styles.listItemText}>{goal.text}</Text>
              <Pressable onPress={() => handleDeleteGoal(index)}>
                <Ionicons
                  style={styles.icon}
                  name="trash"
                  size={24}
                  color="red"
                />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View> */}
      
      <StatusBar style="auto" />
      <TouchableOpacity
                style={styles.floatingButton} 
                onPress={() => { alert('Button is pressed') }} 
            > 
                <Image
      style={
        {
          width:25,
          height:25,
          resizeMode:"contain",
        }
      }
      // source={require("./assets/favicon.png")}
      source={{ uri:"https://www.iconsdb.com/icons/preview/white/plus-xxl.png" }}

      />
            </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3F4",
    alignItems: "center",
  },
  appbar: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    paddingTop: "15%",
    paddingBottom: "2%",
    backgroundColor: "#9B59B6",
    width: "100%",
    height: "14%",
    fontSize: 24,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: "30%",
    fontWeight: "700",
    fontFamily: "Poppins",
    marginLeft:"3%"
  },
  textInput: {
    borderRadius: "20%",
    backgroundColor: "#D7BDE2",
    width: "85%",
    height: "35%",
    padding: "5%",
    marginBottom: "2%",
    marginTop: "3%",
    color: "#FDFEFE",
  },
  inputCard: {
    flex: 1,
    backgroundColor: "#E5DAE8",
    width: "87%",
    height: "20%",
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "35%",
  },
  outputCard: {
    flex: 3,
    backgroundColor: "#E5DAE8",
    width: "87%",
    height: "20%",
    marginTop: "5%",
    marginBottom: "6%",
    borderRadius: "35%",
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    margin: "1%",
    borderRadius: "10%",
    backgroundColor: "#A569BD",
    width: "20%",
    height: "25%",
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  outputHeader: {
    paddingTop: "8%",
    paddingBottom: "3%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#A569BD",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  outputList: {
    marginTop: 1,
    width: "100%",
    alignItems: "center",
    marginBottom: "100%",
  },
  list: {
    margin: "1%",
    borderRadius: "18%",
    backgroundColor: "#fff",
    height: 70,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  listItemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#A569BD",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    flex: 1, // To make the text occupy remaining space
  },
  imageBg:{
    backgroundColor: "#E5DAE8",
    // marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    // borderRadius: "35%",
    borderRadius:"100%",
    // marginBottom:"2.5%"
  },
  floatingButton:{ 
    borderWidth: 1, 
    borderColor: '#9B59B6', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding:20,
    position: 'absolute', 
    bottom: "6%", 
    right: "14%", 
    // elevation:5,
    backgroundColor: '#9B59B6', 
    borderRadius: 100,
}
});
