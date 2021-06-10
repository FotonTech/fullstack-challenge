// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function BookCard(props: { cover: string, title: string, author: string, goBookDetails: any }) {

  return (
    <Pressable onPress={props.goBookDetails}>
      <Image style={styles.imageStyle} source={{ uri: props.cover }}></Image>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.authorText}>by {props.author}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  titleText: {
    fontWeight: 'bold'
  },
  authorText: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});
