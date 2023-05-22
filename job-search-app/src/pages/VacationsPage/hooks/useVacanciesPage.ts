import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import {
  fetchIndustries,
  fetchAllVacancies,
} from '../../../api/common/requests'
import { Industries, Vacancies } from '../../../api'

export interface VacanciesQueryParams {
  paymentFrom: string
  paymentTo: string
  industry: string
}

export const useFetchAllVacancies = (page: number) => {
  const LIMIT = 4

  const [search, setSearch] = useState('')
  const [queryData, setQueryData] = useState<VacanciesQueryParams | null>(null)

  const {
    data,
    isLoading,
    isFetching,
    isPreviousData,
  }: {
    data: Vacancies
    isLoading: boolean
    isFetching: boolean
    isPreviousData: boolean
  } = useQuery(
    ['fetchAllVacancies', page, queryData, search],
    () =>
      fetchAllVacancies({
        page: page,
        paymentFrom: queryData?.paymentFrom,
        paymentTo: queryData?.paymentTo,
        industry: queryData?.industry,
        search,
        count: LIMIT,
      }),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
      keepPreviousData: true,
    },
  )

  const totalPage = Math.ceil((data?.total > 100 ? 500 : data?.total) / LIMIT)

  return {
    data: data?.data || [],
    totalPage,
    loading: isLoading || isFetching,
    setQueryData,
    setSearch,
    isPreviousData,
  }
}

export const useFetchAllIndustries = () => {
  const {
    data,
    isLoading,
    isFetching,
  }: { data: Industries[]; isLoading: boolean; isFetching: boolean } = useQuery(
    ['fetchAllIndustries'],
    () => fetchIndustries(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  return { data: data || [], loading: isLoading || isFetching }
}
