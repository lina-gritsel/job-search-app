import { FC } from 'react'

import VacationCard from '../VacationsPage/components/VacancyCard'
import { parseVacanciesData } from '../VacationsPage/helpers'
import EmptyList from '../../components/EmptyList'
import Loader from '../../components/Loader'
import { fetchFavorites } from './hooks'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { favorites, storageVacancies, hideFavorite } = fetchFavorites()

  const parseVacancies = parseVacanciesData(favorites)
  const isFavoriteVacanciesExist = !!storageVacancies.length

  return (
    <>
      <div
        className={isFavoriteVacanciesExist ? styles.container : styles.hidden}
      >
        {!favorites.length && !!storageVacancies.length && <Loader />}
        {parseVacancies.map((vacancy) => (
          <VacationCard key={vacancy?.id} onHide={hideFavorite} {...vacancy} />
        ))}
      </div>
      {!isFavoriteVacanciesExist && <EmptyList />}
    </>
  )
}

export default FavoritesPage
