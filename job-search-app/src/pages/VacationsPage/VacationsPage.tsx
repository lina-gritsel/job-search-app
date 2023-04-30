import { FC } from 'react'
import { Pagination } from '@mantine/core'

import VacationsList from './components/VacationsList'
import Filters from './components/Filters/Filters'
import { useFetchAllIndustries, useFetchAllVacations } from './hooks'

import styles from './VacationsPage.module.scss'
import InputSearch from '../../components/InputSearch'

const VacationsPage: FC = () => {
  const {
    data: vacancies,
    loading,
    activePage,
    setPage,
  } = useFetchAllVacations()
  const { data: industries } = useFetchAllIndustries()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Filters industries={industries} />
        <div>
          <InputSearch placeholder='Введите название вакансии'/>
          <VacationsList vacancies={vacancies} loading={loading} />
        </div>
      </div>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={3}
        className={styles.pagination}
      />
    </div>
  )
}

export default VacationsPage
