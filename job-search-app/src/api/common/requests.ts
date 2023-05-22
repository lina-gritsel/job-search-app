import { FetchVacanciesParams, Vacation } from './types'
import instance from '../instance'

type FetchAllVacancies = ({
  page,
  paymentFrom,
  paymentTo,
  search,
  industry,
  count,
}: FetchVacanciesParams) => Promise<{ data: Vacation[]; total: number }>

export const fetchAllVacancies: FetchAllVacancies = async ({
  page,
  paymentFrom,
  paymentTo,
  industry,
  search,
  count,
}) => {
  try {
    const { data } = await instance.get(
      `vacancies?page=${page}&count=${count}&keyword=${search}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${industry}`,
    )

    return { data: data.objects, total: data?.total }
  } catch (error) {
    throw new Error(error)
  }
}

type FetchIndustries = () => Promise<string[]>
export const fetchIndustries: FetchIndustries = async () => {
  try {
    const { data } = await instance.get('catalogues')

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchVacancy = async (id: string) => {
  try {
    const { data } = await instance.get(`vacancies/${id}`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}
