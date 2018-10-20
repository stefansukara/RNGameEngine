import React, { PureComponent } from 'react';
import {
  Dimensions,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { GameEngine } from 'react-native-game-engine';
import { Square } from './components/renderers';
import { RotateSquare } from './components/systems';

const { width, height } = Dimensions.get('window');

export default class App extends PureComponent {
  componentWillMount() {
    this.generateRandomDegree();
  }

  render() {
    const { degree } = this;
    return (
      <GameEngine
        style={styles.container}
        systems={[RotateSquare]}
        entities={{
          1: {
            position: { width, height },
            degree: degree,
            renderer: <Square />
          }
        }}
      >
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Match the sides!</Text>
        </View>
        <View style={styles.moreOptionsWrapper}>
          <TouchableOpacity>
            <Text style={styles.playAgainText}>Play Again</Text>
          </TouchableOpacity>
          <Text style={styles.resultText}>0</Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(18, 89, 45)',
            position: 'absolute',
            top: height * 0.8,
            width: width * 0.8,
            marginLeft: width * 0.1,
            height: height * 0.01
          }}
        />
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
  generateRandomDegree = () => {
    this.degree = Math.floor(Math.random() * 360) + 0;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  appHeader: {
    width,
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appTitle: {
    fontSize: 30,
    color: '#123456'
  },
  moreOptionsWrapper: {
    width,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  playAgainText: {
    padding: 15,
    fontSize: 20,
    color: 'rgb(178, 51, 53)'
  },
  resultText: {
    fontSize: 20
  }
});
