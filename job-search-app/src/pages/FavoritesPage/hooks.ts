import { getStorageItemsByKey } from '../../utils'
import { fetchVacancy } from '../../api'
import { useQuery } from '@tanstack/react-query'

import { useState } from 'react'

export const fetchFavorites = () => {
  const [favorites, setFavorites] = useState<any>([])

  const storageVacanciesIds = getStorageItemsByKey('favorites')
  const responses: any = []

  storageVacanciesIds.map((id: string) => {
    const response = fetchVacancy(id)
    responses.push(response)
  })

  // const waitingFavorites = async () => {
  //   const result = await Promise.all(responses)

  //   setFavorites(result)
  // }
  // waitingFavorites()

  // storageVacanciesIds.map((id: number) => {
  //   const { data, isLoading, isFetching } = useQuery(
  //     ['fetchFavorites'],
  //     () => fetchVacancy(id),
  //     {
  //       refetchOnWindowFocus: false,
  //       staleTime: 60_000,
  //       keepPreviousData: true,
  //     },
  //   )
  //   favorites.push(data)
  // })

  return { favorites }
}
