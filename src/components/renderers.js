import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Square extends PureComponent {
  render() {
    const {
      props: {
        degree,
        position: { width, height },
        ...props
      }
    } = this;
    const x = width * 0.3;
    const y = height * 0.4;
    return (
      <View
        style={[
          styles.square,
          {
            left: -x,
            top: y,
            transform: [{ rotate: `${degree}deg` }]
          }
        ]}
      >
        <Text style={styles.squareText}>Let's play</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: 60,
    width: 240,
    height: 240,
    backgroundColor: '#123456',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  squareText: {
    fontSize: 20,
    color: 'white'
  }
});

export { Square };
