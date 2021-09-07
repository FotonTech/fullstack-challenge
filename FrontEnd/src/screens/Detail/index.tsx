import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { Header } from './components/Header'
import { BookInfo } from './components/BookInfo'

export default function Detail() {
  const { goBack } = useNavigation()
  const { params }: any = useRoute()
  const [book] = useState(params?.book)

  return (
    <>
      <Header onGoBack={() => goBack()} />
      <BookInfo book={book} />
    </>
  )
}
