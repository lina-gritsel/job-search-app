import { useQuery } from '@tanstack/react-query'
import { fetchVacancy } from '../../api'

export const useVacancyPage = (vacancyId: string) => {
  const { data, isLoading, isFetching } = useQuery(
    ['fetchAllVacancy', vacancyId],
    () => fetchVacancy(vacancyId),
    {
      refetchOnWindowFocus: false,
      staleTime: 60_000,
      keepPreviousData: true,
      enabled: !!vacancyId,
    },
  )

  return { data, loading: isLoading || isFetching }
}
