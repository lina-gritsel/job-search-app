import { FC, useEffect, useState } from 'react'
import { Pagination } from '@mantine/core'

import { useFetchAllIndustries, useFetchAllVacancies } from './hooks'
import VacanciesList from './components/VacanciesList'
import Filters from './components/Filters/Filters'

import InputSearch from '../../components/InputSearch'
import { useDebounce } from '../../hooks'

import styles from './VacanciesPage.module.scss'

const VacanciesPage: FC = () => {
  const [page, setPage] = useState<number>(0)

  const {
    data: vacancies,
    totalPage,
    loading,
    setSearch,
    setQueryData,
  } = useFetchAllVacancies(page)

  const { data: industries } = useFetchAllIndustries()

  const setSearchDebounced = useDebounce((value: string) => {
    setSearch(value)
  }, 300)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Filters industries={industries} setQueryData={setQueryData} />
        <div className={styles.searchableList}>
          <InputSearch
            onChange={(e) => setSearchDebounced(e.target.value)}
            placeholder="Введите название вакансии"
          />
          <VacanciesList vacancies={vacancies} loading={loading} />
        </div>
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
  )
}

export default VacanciesPage
