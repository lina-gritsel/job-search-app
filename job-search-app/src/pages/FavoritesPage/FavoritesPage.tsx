import { FC } from 'react'
import { Pagination } from '@mantine/core'

import VacationCard from '../VacationsPage/components/VacancyCard'
import { parseVacanciesData } from '../VacationsPage/helpers'
import { fetchFavorites, usePagination } from './hooks'
import EmptyList from '../../components/EmptyList'
import Loader from '../../components/Loader'

import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC = () => {
  const { favorites, storageVacancies, hideFavorite } = fetchFavorites()

  const parseVacancies = parseVacanciesData(favorites)
  const isFavoriteVacanciesExist = !!storageVacancies.length

  const { page, setPage, totalPage, currentVacancies } =
    usePagination(parseVacancies)

  return (
    <>
      <div
        className={isFavoriteVacanciesExist ? styles.container : styles.hidden}
      >
        {!favorites.length && !!storageVacancies.length && <Loader />}
        <div className={styles.vacanciesList}>
          {currentVacancies.map((vacancy) => (
            <VacationCard
              key={vacancy?.id}
              onHide={hideFavorite}
              {...vacancy}
            />
          ))}
        </div>
        <Pagination
          value={page}
          onChange={setPage}
          total={totalPage}
          siblings={1}
          onPreviousPage={() => setPage((prev) => prev - 1)}
          onNextPage={() => setPage((prev) => prev + 1)}
          className={styles.pagination}
        />
      </div>
      {!isFavoriteVacanciesExist && <EmptyList />}
    </>
  )
}

export default FavoritesPage
