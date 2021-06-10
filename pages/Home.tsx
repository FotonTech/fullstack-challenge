import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Book, PageMeta } from '../customTypes';
import BookCard from '../components/BookCard';
import BookDetails from './BookDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={HomeMainContent} />
      <Stack.Screen name="Book Details" component={BookDetails} />
    </Stack.Navigator>
  );
}

function HomeMainContent() {

  const navigation = useNavigation();

  const [loading, setloading] = useState<boolean>(false);
  const [bookCardArr, setbookCardArr] = useState<Array<typeof BookCard>>();

  useEffect(function () {
    fetch('http://192.168.0.38:3000/api/list-books').then(function (res) {
      return res.json();
    }).then(function (data: { meta: PageMeta, books: Array<Book> }) {
      const tempArr: Array<typeof BookCard> = [];
      data.books.forEach(function (book, i, arr) {
        tempArr.push(
          <BookCard
            cover={book.cover}
            title={book.title}
            author={book.author}
            goBookDetails={() => navigation.navigate('Book Details', { book })}
            key={i}
          /> as unknown as typeof BookCard)
      })
      setbookCardArr(tempArr);
      setloading(true);
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <Foundation name="magnifying-glass" size={24} color="#DCD8D8" />
        <TextInput style={styles.searchTextInput}></TextInput>
      </View>
      <View style={styles.userNameView}>
        <Text style={styles.userNameTextHi}>Hi, </Text>
        <Text style={styles.userNameTextName}>Mehmed Al Fatih 👋</Text>
      </View>
      {loading ?
        <View style={styles.booksList}>
          {bookCardArr}
        </View> :
        <></>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: '#FFFCF9',
    backgroundColor: '#fce299'
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10
  },
  searchTextInput: {
    height: 40,
    width: '100%',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 10
  },
  userNameView: {
    flexDirection: 'row',
    marginTop: 10
  },
  userNameTextHi: {
    fontSize: 25,
  },
  userNameTextName: {
    fontSize: 25,
    color: '#fe6a79'
  },
  booksList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  }
});
