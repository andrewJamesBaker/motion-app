import React, { useState, Component } from 'react';
import { StatusBar, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './components/header';
import Card from './components/card';
import { accelerometer, gyroscope} from "react-native-sensors";
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Go to team meeting', key: '1' },
  ]);

  return (

    
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Card><Text>Hello</Text></Card>
        <StatusBar hidden = {true}/>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
})