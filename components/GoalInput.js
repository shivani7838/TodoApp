import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enterText => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Courese Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
        <Button  title="CANCEL" color="red" onPress={props.onCancel} />
        <Button title="ADD" onPress={addGoalHandler} />
        </View>
        
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom:10,
  },
  buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'60%',
  },
});
