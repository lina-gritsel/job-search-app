import { FC } from 'react'

import VacationsList from './components/VacationsList'
import Filters from './components/Filters/Filters'
import { useVacationsPage } from './hooks'

import styles from './VacationsPage.module.scss'

const VacationsPage: FC = () => {
  const { industries, vacancies } = useVacationsPage()

  return (
    <div className={styles.container}>
      <Filters industries={industries} />
      <VacationsList vacancies={vacancies} />
    </div>
  )
}

export default VacationsPage
