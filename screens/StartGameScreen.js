
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors'
const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be in between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        setConfirmed(true)
        setSelectedNumber(choosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryConatiner}>
            <Text>You selected </Text>
            <View style={styles.numberConatiner}>
                <Text style={styles.number}>
                    {selectedNumber}
                </Text>
            </View>
            <Button title="START GAME" onPress={() => props.startGameHandler(selectedNumber)} />
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game !</Text>
                <Card style={styles.inputConatiner}>
                    <Text>Select a number</Text>
                    <Input
                        style={styles.input}
                        keyboardType="number-pad"
                        blurOnSubmit
                        maxLength={2}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={() => { resetInputHandler() }} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={() => { confirmInputHandler() }} color={Colors.primary} /></View>
                    </View>
                </Card>
                {
                    confirmedOutput
                }
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputConatiner: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 90
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryConatiner: {
        marginTop: 20,
        alignItems: 'center'
    },
    numberConatiner: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});
export default StartGameScreen
