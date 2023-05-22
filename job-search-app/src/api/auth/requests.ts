import axios from 'axios'
import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

import instance from '../instance'
import { AuthResponseParams } from './types'

export const getAuthorization = async () => {
  try {
    const authResponse = await instance.get<AuthResponseParams>(
      'oauth2/password',
      {
        params: {
          login: process.env.REACT_APP_LOGIN,
          password: process.env.REACT_APP_PASSWORD,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_APP_ID,
          hr: process.env.REACT_APP_HR,
        },
      },
    )

    if (authResponse.status === 200) {
      const accessToken = `${authResponse.data.token_type} ${authResponse.data.access_token}`
      const refreshToken = `${authResponse.data.token_type} ${authResponse.data.refresh_token}`

      axios.interceptors.request.use((config) => {
        config.headers.Authorization = accessToken
        return config
      })

      return { accessToken, refreshToken }
    }

    if (authResponse.status === 500) {
      return ''
    }
  } catch (error) {
    console.error(error)
    return ''
  }
}

export const updateAuthTokens = async () => {
  try {
    const refreshToken = getRefreshToken() || ''
    const updateResponse = await instance.get('oauth2/refresh_token', {
      params: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_APP_ID,
        refresh_token: refreshToken,
      },
    })

    if (updateResponse.status === 200) {
      const accessToken = `${updateResponse.data.token_type} ${updateResponse.data.access_token}`
      const refreshToken = `${updateResponse.data.token_type} ${updateResponse.data.refresh_token}`

      setRefreshToken(refreshToken)
      return { accessToken, refreshToken }
    }

    if (updateResponse.status === 500) {
      console.error('Возникла ошибка при обновлении токенов доступа')
    }
  } catch (error) {
    console.error(error)
  }
}

export const setRefreshToken = (refreshToken: string) => {
  const currentDate = Date.now()
  const expires = new Date(currentDate)

  expires.setDate(expires.getDate() + 30)

  Cookies.set('refresh_token', refreshToken, { expires })
}
