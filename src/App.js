import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import { GameEngine } from 'react-native-game-engine';
import { Finger } from './components/renderers';
import { RotateFingers } from './components/systems';

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[RotateFingers]}
        entities={{
          1: { position: [-60, 250], renderer: <Finger /> }
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
