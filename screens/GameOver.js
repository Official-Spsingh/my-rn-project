
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Game over</Text>
                <Text>User Number : {props.userNumber}</Text>
                <Text>Number of rounds : {props.rounds}</Text>
                <Button title="Restart game !" onPress={props.configureNewGameHandler} />
            </Card>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
});
export default GameOver
