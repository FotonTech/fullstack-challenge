import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.15.135:4000' // PUT YOUR IPV4 ADDRESS
})

export function handleRequestError(error) {
  if (error.response) {
    console.group(`[${error.response.status}]`, `${error.response.data.title}`)
    console.log(error.response.data.detail)
    console.log(error.response)
    console.groupEnd()
  } else {
    console.log({ error })
  }
}
