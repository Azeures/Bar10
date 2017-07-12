import React from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const cocktail = require('../images/cocktail.jpg');
const beer = require('../images/beer.jpg');
const wine = require('../images/wine.jpg');
const whiskey = require('../images/whiskey.jpg');
const bottle = require('../images/bottles.jpg');

const styles = StyleSheet.create({
  image: {
    width,
    height: Math.floor(height * 0.3),
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 30,
    padding: 5,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});

const imageAndText = (imageSource, text, navigation) => (
  <TouchableOpacity onPress={() => navigation.navigate('Drinks', { name: text })}>
    <Image source={imageSource} style={styles.image}>
      <Text style={styles.title}>
        {text}
      </Text>
    </Image>
  </TouchableOpacity>
  );

const DrinkList = ({ navigation }) => (
  <ScrollView>
    {imageAndText(beer, 'Beer', navigation)}
    {imageAndText(wine, 'Wine', navigation)}
    {imageAndText(cocktail, 'Cocktails', navigation)}
    {imageAndText(whiskey, 'Whiskey', navigation)}
    {imageAndText(bottle, 'Bottle Service', navigation)}
  </ScrollView>
);

export default DrinkList;
