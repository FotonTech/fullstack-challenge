import React from 'react'
import { Actions } from '../Actions'

import {
  BookAuthor,
  BookDescription,
  BookImage,
  BookInfoContainer,
  BookInfoSection,
  BookName
} from './styles'

export const BookInfo = ({ book: { image, name, author, description } }) => (
  <BookInfoContainer>
    <BookImage source={{ uri: image }} alt={`${name}'s book infos, by author ${author}`} />

    <BookInfoSection>
      <BookName>{name}</BookName>
      <BookAuthor>{author}</BookAuthor>
      <BookDescription>{description}</BookDescription>
    </BookInfoSection>

    <Actions />
  </BookInfoContainer>
)
