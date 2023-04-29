import { useQuery } from '@tanstack/react-query'

import { fetchIndustries, fetchAllVacancies } from '../../../api/requests'

export const useFetchAllVacations = () => {
  const {
    data,
    isLoading,
    isFetching,
  }: {
    data: any
    isLoading: boolean
    isFetching: boolean
  } = useQuery(['fetchAllVacations'], () => fetchAllVacancies(), {
    refetchOnWindowFocus: false,
    staleTime: 60_000,
  })

  return { data: data || [], loading: isLoading || isFetching }
}

export const useFetchAllIndustries = () => {
  const { data } = useQuery(['fetchAllIndustries'], () => fetchIndustries(), {
    refetchOnWindowFocus: false,
    staleTime: 60_000,
  })

  return { data: data || [] }
}
