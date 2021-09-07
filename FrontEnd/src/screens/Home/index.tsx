import { useIsFocused, useNavigation } from '@react-navigation/core'
import { FlatList, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Container, SearchBar } from '../../components'
import { VERTICAL_SPACING } from '../../constants'
import { api, handleRequestError } from '../../services/api'
import { BookCard } from './components/BookCard'
import { WelcomeText } from './components/WelcomeText'
import { AddFab } from './components/AddFab'

export default function Home() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const { navigate }: any = useNavigation()
  const [isFab, setIsFab] = useState(true)
  const isFocused = useIsFocused()

  function getBooks() {
    const url = 'books'

    api
      .get(url)
      .then(({ data }) => setBooks(data))
      .catch(handleRequestError)
  }

  function getFilteredBooks() {
    const url = search ? `books/search/${search}` : 'books'

    api
      .get(url)
      .then(({ data }) => setBooks(data))
      .catch(handleRequestError)
  }

  function handleChangeSearch(value) {
    setSearch(value)
  }

  function handleClickFab() {
    navigate('Add Book')
  }

  function handleDetailCard(i) {
    navigate('Detail', { book: books[i] })
  }

  useEffect(() => {
    getBooks()

    return () => setIsFab(false)
  }, [isFocused])

  return (
    <>
      <Container>
        <SearchBar
          placeholder="Search Book"
          onSubmitEditing={getFilteredBooks}
          value={search}
          onChangeText={value => handleChangeSearch(value)}
        />

        <WelcomeText username="Mehmed Al Fatih" />

        {books.length > 0 ? (
          <FlatList
            keyExtractor={({ name }) => name}
            data={books}
            numColumns={3}
            marginBottom={VERTICAL_SPACING.spacing75}
            renderItem={({ item: { name, author, image }, index }) => (
              <BookCard
                name={name}
                author={author}
                image={image}
                onPress={() => handleDetailCard(index)}
              />
            )}
          />
        ) : (
          <Text>Connection Failed. Try Again Later.</Text>
        )}

        <AddFab onAddFab={handleClickFab} isFab={isFab} />
      </Container>
    </>
  )
}
