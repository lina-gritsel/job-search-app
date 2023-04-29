import { FC } from 'react'

import VacationsList from './components/VacationsList'
import Filters from './components/Filters/Filters'
import { useFetchAllIndustries, useFetchAllVacations } from './hooks'

import styles from './VacationsPage.module.scss'

const VacationsPage: FC = () => {
  const { data: vacancies, loading } = useFetchAllVacations()
  const { data: industries } = useFetchAllIndustries()

  return (
    <div className={styles.container}>
      <Filters industries={industries} />
      <VacationsList vacancies={vacancies} loading={loading} />
    </div>
  )
}

export default VacationsPage
