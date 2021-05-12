import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);



  const addGoalHandler = goTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    { uid: Math.random().toString(), value: goTitle }
    ]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAppGoal = {addGoalHandler}/>


      
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={ ()=> console.log("Working") } title={itemData.item.value} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
