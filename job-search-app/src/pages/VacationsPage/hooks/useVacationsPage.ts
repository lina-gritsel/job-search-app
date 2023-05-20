import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchIndustries, fetchAllVacancies } from '../../../api/requests'

export const useFetchAllVacations = (queryData: any) => {
  const [activePage, setPage] = useState<number>(1)
  const pageForRequest = activePage - 1

  const [search, setSearch] = useState('')

  const {
    data,
    isLoading,
    isFetching,
    isPreviousData,
  }: {
    data: any
    isLoading: boolean
    isFetching: boolean
    isPreviousData: boolean
  } = useQuery(
    ['fetchAllVacations', pageForRequest, queryData, search],
    () =>
      fetchAllVacancies({
        page: pageForRequest,
        paymentFrom: queryData?.paymentFrom,
        paymentTo: queryData?.paymentTo,
        search,
      }),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
      keepPreviousData: true,
    },
  )

  return {
    data: data || [],
    loading: isLoading || isFetching,
    activePage,
    setPage,
    setSearch,
  }
}

export const useFetchAllIndustries = () => {
  const {
    data,
    isLoading,
    isFetching,
  }: { data: any; isLoading: boolean; isFetching: boolean } = useQuery(
    ['fetchAllIndustries'],
    () => fetchIndustries(),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
    },
  )

  return { data: data || [], loading: isLoading || isFetching }
}
