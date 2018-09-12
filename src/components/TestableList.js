import React from 'react';
import { FlatList, Text } from 'react-native';

const TestableList = props => {
  return(
  <FlatList
    data={props.data}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
  />
  );
};

function renderItem({item, index}) {
  return (<Text>{(index+1)+". "+item.name}</Text>);
}

function keyExtractor(item, index) {
  return index + item.name;
}

export default TestableList;