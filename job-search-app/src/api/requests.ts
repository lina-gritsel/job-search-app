import axios from 'axios'

import { Vacation } from './types'

export const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'
const secretKey = process.env.REACT_APP_X_SECRET_KEY

type FetchAllVacancies = (page: number) => Promise<Vacation[]>
export const fetchAllVacancies: FetchAllVacancies = async (page) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/vacancies?page=${page}`, {
      headers: {
        'x-secret-key': secretKey,
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
      },
    })
    return data.objects
  } catch (error) {
    throw new Error(`${error}`)
  }
}

type FetchIndustries = () => Promise<string[]>
export const fetchIndustries: FetchIndustries = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/catalogues`, {
      headers: {
        'x-secret-key': secretKey,
      },
    })
    const industries = data.map(({ title }: { title: string }) => title)

    return industries
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// 'Content-Type': 'application/x-www-form-urlencoded',
