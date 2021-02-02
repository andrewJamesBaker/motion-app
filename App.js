import React, { useState, Component } from 'react';
import { StatusBar, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './components/header';
import Card from './components/card';
// import { accelerometer, gyroscope, setUpdateIntervalForType, SensorTypes} from "react-native-sensors";   THIS SHOULD SOON BE UNNECESSARY. EXPO SENSORS.
import { GameEngine } from "react-native-game-engine";
import * as Sensors from 'expo-sensor';
// import Matter from "matter.js";      //From the tutorial that I was using. Might be useful during game dev.
// import randomInt from "random-int";
// import randomColor from "randomcolor";


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Go to team meeting', key: '1' },
  ]);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const { x, y, z } = data;

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