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

export const usePagination = (vacancies) => {
  const NUMBER_OF_VACANCIES_ON_PAGE = 4

  const [page, setPage] = useState<number>(2)

  const totalPage = Math.ceil(vacancies.length / 4)

  const currentVacancies = [...vacancies].splice(
    (page - 1) * NUMBER_OF_VACANCIES_ON_PAGE,
    NUMBER_OF_VACANCIES_ON_PAGE,
  )

  useEffect(() => {
    if (currentVacancies.length === 0) {
      setPage((prev) => prev - 1)
    }
  }, [currentVacancies.length])

  return { page, setPage, totalPage, currentVacancies }
}
