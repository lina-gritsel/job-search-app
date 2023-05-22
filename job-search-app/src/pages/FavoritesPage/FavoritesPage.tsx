import { FC } from 'react'

import EmptyList from '../../components/EmptyList'
import Loader from '../../components/Loader'

import VacationCard from '../VacationsPage/components/VacancyCard'
import { parseVacanciesData } from '../VacationsPage/helpers'

import { fetchFavorites } from './hooks'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { favorites, storageVacansies } = fetchFavorites()
  const parseVacancies = parseVacanciesData(favorites)
  const isFavoriteVacansiesExist = !!storageVacansies.length

  return (
    <>
      <div
        className={isFavoriteVacansiesExist ? styles.container : styles.hidden}
      >
        {!favorites.length && !!storageVacansies.length && <Loader />}
        {parseVacancies.map((vacancy) => (
          <VacationCard key={vacancy?.id} {...vacancy} />
        ))}
      </div>
      {!isFavoriteVacansiesExist && <EmptyList />}
    </>
  )
}

export default FavoritesPage
