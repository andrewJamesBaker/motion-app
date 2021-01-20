import React, { useState, Component } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './components/header';
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Go to team meeting', key: '1' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (

    <TouchableWithoutFeedback>
      <View style={styles.container}>

      </View>
    </TouchableWithoutFeedback>






    // <TouchableWithoutFeedback>
    //   <View style={styles.container}>
    //     <Header />
    //     <View style={styles.content}>
          
    //       <View style={styles.list}>
    //         <FlatList 
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} pressHandler={pressHandler}/>
    //           )}
    //           />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
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