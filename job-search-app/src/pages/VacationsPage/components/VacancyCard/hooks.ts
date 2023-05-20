import { useState } from 'react'

import { getStorageItemsByKey, setItemsToStorageByKey } from '../../../../utils'

export const useVacationCard = (id: string) => {
  const storageVacanciesIds = getStorageItemsByKey('favorites')

  const isFavorited = storageVacanciesIds.includes(id)

  const [addedToFavoriteList, setAddedToFavoriteList] = useState<string[]>([])

  const addVacancyToFavoriteList = (event: Event) => {
    if (isFavorited) return
    setAddedToFavoriteList([...addedToFavoriteList, id])

    const storageVacanciesIds = getStorageItemsByKey('favorites')
    const newVacanciesIds = [...storageVacanciesIds, id]
    setItemsToStorageByKey('favorites', newVacanciesIds)
    event.stopPropagation()
  }

  const removeVacancyFromFavoriteList = (event: Event) => {
    setAddedToFavoriteList(
      addedToFavoriteList.filter((vacancyId: string) => vacancyId !== id),
    )

    const storageVacanciesIds = getStorageItemsByKey('favorites')
    const newVacanciesIds = storageVacanciesIds.filter(
      (savedVacancyId: string) => savedVacancyId !== id,
    )

    setItemsToStorageByKey('favorites', newVacanciesIds)
    event.stopPropagation()
  }

  return {
    isFavorited,
    addedToFavoriteList,
    addVacancyToFavoriteList,
    removeVacancyFromFavoriteList,
  }
}
