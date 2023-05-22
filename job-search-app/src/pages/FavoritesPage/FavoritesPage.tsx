import { FC } from 'react'

import { fetchFavorites } from './hooks'
import VacationCard from '../VacationsPage/components/VacancyCard'
import { parseVacanciesData } from '../VacationsPage/helpers'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { favorites } = fetchFavorites()
  const parseVacancies = parseVacanciesData(favorites)

  return (
    <div className={styles.container}>
      {parseVacancies.map((vacancy) => (
        <VacationCard key={vacancy?.id} {...vacancy} />
      ))}
    </div>
  )
}

export default FavoritesPage
