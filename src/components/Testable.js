// components/Testable.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Consumer } from './Context';
const Testable = props => (
  <Consumer>
    {value => (
      <View>
        <Text>{value} & {props.pair}</Text>
      </View>
    )}
  </Consumer>
);
export default Testable;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});
  