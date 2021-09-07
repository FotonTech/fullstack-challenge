import React from 'react'
import { BookAuthor, BookCardContainer, BookImage, BookName } from './styles'

interface BookCardProps {
  image: string
  name: string
  author: string
  onPress: any
}

export const BookCard = ({ image, name, author, onPress }: BookCardProps) => (
  <BookCardContainer onPress={onPress}>
    <BookImage source={{ uri: image }} alt="teste" />
    <BookName>{name}</BookName>
    <BookAuthor>by {author}</BookAuthor>
  </BookCardContainer>
)
