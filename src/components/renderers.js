import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

const RADIUS = 120;

class Finger extends PureComponent {
  render() {
    const {
      props: { position }
    } = this;
    const x = position[0] - RADIUS / 2;
    const y = position[1] - RADIUS / 2;
    return <View style={[styles.finger, { left: x, top: y }]} />;
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: RADIUS / 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: '#123456',
    position: 'absolute'
  }
});

export { Finger };
