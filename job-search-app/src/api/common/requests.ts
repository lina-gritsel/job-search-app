import axios from 'axios'

import { FetchVacanciesParams, Vacation } from './types'

export const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'
const secretKey = process.env.REACT_APP_SECRET_KEY

type FetchAllVacancies = ({
  page,
  paymentFrom,
  paymentTo,
  search,
  industry,
}: FetchVacanciesParams) => Promise<{ data: Vacation[]; total: number }>

export const fetchAllVacancies: FetchAllVacancies = async ({
  page,
  paymentFrom,
  paymentTo,
  industry,
  search,
}) => {
  console.log(industry)
  try {
    const { data } = await axios.get(
      `${BASE_URL}/vacancies?page=${page}&keyword=${search}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${industry}`,
      {
        headers: {
          'x-secret-key': secretKey,
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      },
    )

    return { data: data.objects, total: data?.total }
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

    return data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const fetchVacancy = async (id: number) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/vacancies/${id}`, {
      headers: {
        'x-secret-key': secretKey,
      },
    })

    return data
  } catch (error) {
    throw new Error(`${error}`)
  }
}
