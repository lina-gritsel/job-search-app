import { useEffect, useState } from 'react'

import { create } from 'zustand'
import { produce } from 'immer'

import { getStorageItemsByKey } from '../../utils'
import { fetchVacancy } from '../../api'

export const fetchFavorites = () => {
  const storageVacanciesIds = getStorageItemsByKey('favorites')
  const { hiddenFavoriteIds, hideFavorite } = useHiddenFavoriteIds()

  const [data, setData] = useState([])

  const promise = []

  useEffect(() => {
    (async () => {
      storageVacanciesIds.filter((vacancyId: string) =>
        promise.push(fetchVacancy(vacancyId)),
      )

      const favorites = await Promise.all(promise)

      setData(favorites)
    })()
  }, [])

  return {
    favorites:
      data?.filter(({ id }) => !hiddenFavoriteIds.includes(String(id))) || [],
    hideFavorite,
    storageVacancies: storageVacanciesIds,
  }
}

interface HiddenFavoriteIdsState {
  hiddenFavoriteIds: string[]
  hideFavorite: (vacancyId: string) => void
}
const useHiddenFavoriteIds = create<HiddenFavoriteIdsState>((set) => ({
  hiddenFavoriteIds: [],
  hideFavorite: (vacancyId) =>
    set(
      produce((state: HiddenFavoriteIdsState) => {
        state.hiddenFavoriteIds = [...state.hiddenFavoriteIds, vacancyId]
      }),
    ),
}))
