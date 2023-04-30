import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchIndustries, fetchAllVacancies } from '../../../api/requests'

export const useFetchAllVacations = () => {
  const [activePage, setPage] = useState<number>(1)
  const pageForRequest = activePage - 1

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
    ['fetchAllVacations', pageForRequest],
    () => fetchAllVacancies(pageForRequest),
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
  }
}

export const useFetchAllIndustries = () => {
  const { data } = useQuery(['fetchAllIndustries'], () => fetchIndustries(), {
    refetchOnWindowFocus: false,
    staleTime: 60_000,
  })

  return { data: data || [] }
}
