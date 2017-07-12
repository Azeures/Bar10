import React from 'react';
import { ScrollView, Text } from 'react-native';

const DrinkDetails = ({ navigation }) => (
  <ScrollView>
    <Text>Hello, {navigation.state.params.name}!</Text>
  </ScrollView>
);

export default DrinkDetails;
