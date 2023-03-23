import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,  } from 'react-native';

import Taskitem from './Taskitem';
import data from './data'





export default function Todo() {

  let [taskTitle, setTaskTitle] = useState();
  let [taskDescription, setTaskDescription] = useState();
  let [taskList, setTaskList] = useState(data);
/*
  const handleLogin = () =>{
    if(taskTitle == '' && taskDescription == 'Test1@'){
      navigation.navigate('Todo')
    } else {
      alert("please try again")
    }
  }
  */

  const setTaskCompleted = (key) => {
    const newTaskList = taskList.map((item) => {
      if (item.key === key) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTaskList(newTaskList)
  }

//function for adding new tasks
function handleAddTasks(){
  const _newTask = {
    key: Math.random().toString,
    title: taskTitle,
    description: taskDescription,
    completed: false   
  }
  const newTasks = [...taskList,  _newTask] 

  setTaskList(newTasks)
  setTaskTitle("");
  setTaskDescription("");
 
  if(taskTitle === null){
    alert("Proceed you can't, Add task you must")
  }  
}

function resetTasks(){
  setTaskList([]);
 
}



return (
  
  <View style={styles.container}>
    <Text style={styles.heading}>Todo List</Text>
    <Text style={styles.username}>Username</Text>   
     {/* Start of ToDo code */}
    <View style={styles.inputfield}>
    <TextInput 
      style={styles.input} placeholder='add new task..' 
      value={taskTitle} onChangeText = {text => setTaskTitle(text)}/>       
    <TextInput 
      style={styles.input} placeholder='add description..' 
      value = {taskDescription} onChangeText = {text => setTaskDescription(text)}
      />         
    </View>      
    <View style={styles.button}>
      <Button color={'black'} title='Add Task' onPress={() => handleAddTasks() } />
      <Button color={'red'} title='Reset' onPress={() => resetTasks() } />
    </View>
     <ScrollView> 
        <View>
          {taskList.map((item, index) => {
          return (
          <Taskitem key = {index}
          item = {item} 
          setTaskCompleted = {setTaskCompleted}
          />   
          );
          })}     
      </View>            
    </ScrollView>
  </View> 
  
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'darkgray',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 20
},
heading:{
  fontSize: 32,
  margin: 9,
  fontFamily: 'American Typewriter',
  justifyContent: 'space-between',
  alignSelf:'flex-start',
  paddingHorizontal: 15,
},
username:{
  fontSize: 16,
  margin: 9,
  fontFamily: 'American Typewriter',
  justifyContent: 'space-between',
  alignSelf:'flex-start',
  paddingHorizontal: 15,
},
input: {
  paddingVertical: 15, 
  paddingHorizontal: 15,
  backgroundColor: 'lightgray',
  //borderColor: 'black',
  //borderWidth: 1,
  borderRadius: 25,
  width: 350,
  marginTop: 10,
  marginBottom: 10
},
inputfield: {
  alignItems: 'center',
   marginTop: 10,
   marginBottom: 10
   
},
button: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
taskitem: {
  backgroundColor: 'lightgray',
  padding: 10,
 // borderWidth: 1,
  borderRadius: 8,
  width: 350,
  margin: 3,
  

 // fontFamily: 'American Typewriter',
 // fontSize: 24
  
},

taskitemWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  
},
taskWrapper: {
  alignItems: 'center',
  justifyContent: 'space-between',
  
   
},
crossedout:{
  textDecorationLine: 'line-through',
  textDecorationStyle: 'solid',
  //color: 'red'
}

});