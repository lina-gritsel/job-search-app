import { FC, useEffect } from 'react'

import Filters from './components/Filters/Filters'

import styles from './VacationsPage.module.scss'
import VacationsList from './components/VacationsList'

const VacationsPage: FC = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <VacationsList />
    </div>
  )
}

export default VacationsPage
