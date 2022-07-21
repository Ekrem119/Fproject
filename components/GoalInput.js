import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

function GoalInput(props) {
const [enteredGoalText, setEnteredGoalText] = useState('');

function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); 
  }

function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
}
   
return (
  <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Write your goal here" 
        onChangeText={goalInputHandler}
        value={enteredGoalText} 
        />
        <View style={styles.butttonContainer}>
          <View style={styles.button}>
          <Button title='Cancel' onPress={props.onCancel}/>
          </View>
          <View style={styles.button}>
          <Button title="Add" onPress={addGoalHandler}/>
          </View>
        </View>
        
        </View>
        </Modal>
);
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        
        
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%'
        
      },
      butttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
      },
      button: {
        width: 75,
        marginHorizontal: 8
      }
});