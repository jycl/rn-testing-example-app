/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from "./src/components/Context";
import Testable from "./src/components/Testable";
import Clickable from './src/components/Clickable';
import TestableList from './src/components/TestableList';
import {getUser} from "./src/services/github";
import {getJokes} from "./src/services/jokes"
import Joke from './src/components/Joke';
import codePush from 'react-native-code-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const sampleData = [
  {name: "Joe"},
  {name: "Pete"},
  {name: "Mickey"},
  {name: "Mike"},
];

class App extends Component {
  state = {githubUser: {}};

  componentDidMount() {
    getUser('jycl')
    .then(json => {
      this.setState({
        githubUser:json
      })
    });
    getJokes();
  }

  render() {
    return (
      <Provider value="red">
        <View testID="welcome" style={styles.container}>
          <Text>Testing components using react-test-renderer</Text>
          <Testable pair="blue"/>
          <Clickable testID="button" />
        </View>
        <TestableList data={sampleData}/>
        <Joke testID={"joke-id"} text={"haha"}/>
        <Text style={styles.container}>{this.state.githubUser.login || "None yet."}</Text>
      </Provider>
    );
  }
}

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default codePush(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
