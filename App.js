import React, { useState, Component, useEffect } from 'react';
import { StatusBar, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity } from 'react-native';
import Header from './components/header';
import Card from './components/card';
// import { accelerometer, gyroscope, setUpdateIntervalForType, SensorTypes} from "react-native-sensors";   THIS SHOULD SOON BE UNNECESSARY. EXPO SENSORS.
import { GameEngine } from "react-native-game-engine";
import { Accelerometer, Gyroscope } from 'expo-sensors';
// import Matter from "matter.js";      //From the tutorial that I was using. Might be useful during game dev.
// import randomInt from "random-int";
// import randomColor from "randomcolor";


export default function App() {

  // BELLOW IS CURRENTLY NON FUNCTIONAL. COPYING CODE FROM PREVIOUSLY FUNCTIONAL STATE.
  // const [todos, setTodos] = useState([
  //   { text: 'Go to team meeting', key: '1' },
  // ]);


  // // Bellow taken from https://docs.expo.io/versions/latest/sdk/accelerometer/#api
  // const [dataAcc, setDataAcc] = useState({
  //   xa: 0,
  //   ya: 0,
  //   za: 0,
  // });

  // const [dataGyro, setDataGyro] = useState({
  //   xg: 0,
  //   yg: 0,
  //   zg: 0,
  // });

  // const [subscriptionAcc, setSubscriptionAcc] = useState(null);
  // const [subscriptionGyro, setSubscriptionGyro] = useState(null);

  // const _subscribeAccelerometer = () => {
  //   setSubscriptionAcc(
  //     Accelerometer.addListener(accelerometerData => {
  //       setDataAcc(accelerometerData);
  //     })
  //   );
  //   Accelerometer.setUpdateInterval(200);
  // };

  // // const _subscribeGyro = () => {
  // //   setSubscriptionGyro(
  // //     Gyroscope.addListener(gyroscopeData => {
  // //       setDataGyro(gyroscopeData);
  // //     })
  // //   );
  // // };

  // const _unsubscribe = () => {
  //   subscriptionAcc && subscriptionAcc.remove();
  //   setSubscriptionAcc(null);
  //   // subscriptionGyro && subscriptionGyro.remove();
  //   // setSubscriptionGyro(null);
  // };

  // useEffect(() => {
  //   _subscribeAccelerometer();
  //   // _subscribeGyro();
  //   return () => _unsubscribe();
  // }, []);

  // const { xa, ya, za } = dataAcc;
  // // const { xg, yg, zg } = dataGyro;

    const [data, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
    });

    const [dataGyro, setDataGyro] = useState({
      xg: 0,
      yg: 0,
      zg: 0,
    });
    const [subscription, setSubscription] = useState(null);
  
    const _slow = () => {
      Accelerometer.setUpdateInterval(1000);
      Gyroscope.setUpdateInterval(1000);
    };
  
    const _fast = () => {
      Accelerometer.setUpdateInterval(16);
      Gyroscope.setUpdateInterval(16);
    };
  
    const _subscribe = () => {
      setSubscription(
        Accelerometer.addListener(accelerometerData => {
          setData(accelerometerData);
        }),
        Gyroscope.addListener(gyroscopeData => {
          setDataGyro(gyroscopeData);
         })
      );
    };
  
    const _unsubscribe = () => {
      subscription && subscription.remove();
      setSubscription(null);
    };
  
    useEffect(() => {
      _subscribe();
      return () => _unsubscribe();
    }, []);

    const { x, y, z } = data;
    const { xg, yg, zg } = dataGyro;

  return (  //The viewable app; the actual interactive part


    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Card>
          <Text>Hello</Text>
        </Card>
        <Card>
          <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
          <Text style={styles.text}>
            x: {round(x)} y: {round(y)} z: {round(z)}
          </Text>
        </Card>
        <Card>
          <Text style={styles.text}>Gyroscope:</Text>
          <Text style={styles.text}>
            x: {round(xg)} y: {round(yg)} z: {round(zg)}
          </Text>
        </Card>
        <StatusBar hidden={true} />
      </View>
    </TouchableWithoutFeedback>

  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
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
  },
  text: {
    textAlign: 'center',
  }
})