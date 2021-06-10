// @generated: @expo/next-adapter@2.1.52
import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Book } from '../customTypes';

export default function BookDetails() {

  const { book } = useRoute().params as { book: Book };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: book.cover }}></Image>
      <Text style={styles.text}>Book details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF9'
  },
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
  },
});
