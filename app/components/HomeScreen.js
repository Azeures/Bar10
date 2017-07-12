import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrinkList from './DrinkList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <DrinkList navigation={navigation} />
  </View>
  );

export default HomeScreen;
