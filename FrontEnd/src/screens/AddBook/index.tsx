import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, FormInput, Title } from '../../components'
import { api, handleRequestError } from '../../services/api'

export default function AddBook() {
  const { navigate }: any = useNavigation()
  const { control, handleSubmit } = useForm()

  function goHome() {
    navigate('Home')
  }

  function onSubmit({ Name, Author, Description }: any) {
    const url = 'books'
    const body = {
      name: Name,
      author: Author,
      description: Description,
      image:
        'http://books.google.com/books/content?id=I4B-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    }

    api.post(url, body).then(goHome).catch(handleRequestError)
  }

  return (
    <Container>
      <Title title="Add a new book" onBackPress={goHome} />
      <FormInput name="Name" control={control} />
      <FormInput name="Author" control={control} />
      <FormInput name="Description" control={control} />
      <Button text="Add new book" onPress={handleSubmit(onSubmit)} />
    </Container>
  )
}
