import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class Clickable extends React.Component {
  state = { number: 1 };

  pressHandler = () => {
    this.setState(prevState => (
      { number: prevState.number + 1 }
    ));
  }

  render() {
    return (
      <View {...this.props}>
        <TouchableHighlight onPress={this.pressHandler}>
          <Text>{this.state.number}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Clickable;