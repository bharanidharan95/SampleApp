import React ,{useState} from 'react';
import { View, Text, StyleSheet, TextInput , Button } from 'react-native';

const GoalInput = props => {

    
  const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="Add" onPress={props.onAppGoal.bind(this, enteredGoal)} />
        </View>
    );
};


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        width: 200,
        marginBottom: 20,
      },
      inputContainer : {
          flexDirection : 'column',
          justifyContent : 'center',
          alignItems : 'center',
      }
    });

export default GoalInput;