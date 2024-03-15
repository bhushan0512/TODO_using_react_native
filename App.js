import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, StatusBar, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleAddGoals = () => {
    if (textInput.trim() !== "") {
      setGoalsList([...goalsList, { text: textInput }]);
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

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
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
        <Pressable style={styles.button} onPress={handleAddGoals}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </View>
      <View style={styles.outputCard}>
        <Text style={styles.outputHeader}>TO DO ITEMS</Text>
        <ScrollView contentContainerStyle={styles.outputList}>
          {goalsList.map((goal, index) => (
            <View style={styles.list} key={index}>
            <Ionicons style={styles.icon} name="logo-ionic" size={24} color="#7b2cbf" />
              <Text style={styles.listItemText}>{goal.text}</Text>
              <Pressable onPress={() => handleDeleteGoal(index)}>
                <Ionicons style={styles.icon} name="trash" size={24} color="red" />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
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
    paddingTop: "15%",
    paddingBottom: "2%",
    backgroundColor: "#9B59B6",
    width: "100%",
    height: "14%",
    fontSize: 24,
  },
  title: {
    color: "white",
    fontSize: "30%",
    fontWeight: "700",
    fontFamily: "Poppins",
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
    marginBottom:"100%"
  },
  list: {
    margin: "1%",
    borderRadius: "18%",
    backgroundColor: "#fff",
    height: "200%",
    width: "90%",
    height: "13%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row",
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
  icon:{
    padding:"5%"
  }
});
