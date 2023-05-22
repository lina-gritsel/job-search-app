import { getStorageItemsByKey } from '../../utils'
import { fetchVacancy } from '../../api'
import { useQuery } from '@tanstack/react-query'

import { useEffect, useState } from 'react'

export const fetchFavorites = () => {
  const storageVacanciesIds = getStorageItemsByKey('favorites')
  const promise = []
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      storageVacanciesIds.filter((vacancyId: string) =>
        promise.push(fetchVacancy(vacancyId)),
      )

      const favorites = await Promise.all(promise)

      setData(favorites)
    })()
  }, [])

  return { favorites: data, storageVacansies: storageVacanciesIds }
}
