import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0)
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRound(0)
  }
  const gameOverHandler = (numOfRounds) => {
    setGuessRound(numOfRounds)
  }
  const configureNewGameHandler = () => {
    setGuessRound(0)
    setUserNumber(null)
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {
        !userNumber && guessRound <= 0 ?
          <StartGameScreen startGameHandler={startGameHandler} /> :
          guessRound <= 0 ?
            <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} /> :
            <GameOver rounds={guessRound} userNumber={userNumber} configureNewGameHandler={configureNewGameHandler} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
