import {StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput({addGoal, visible, onCancel}) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(e) {
        setEnteredGoalText(e);
    };

    function addGoalhandler() {
        addGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    console.log(enteredGoalText);
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Course Goal! '
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title='Add Goal'
                            color='crimson'
                            onPress={addGoalhandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});

export default GoalInput;