import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: localStorage.getItem('access') || '',
    Accept: 'application/json',
    'x-secret-key': process.env.REACT_APP_SECRET_KEY,
    'X-Api-App-Id': process.env.REACT_APP_APP_ID,
  },
})

export default instance
