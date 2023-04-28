import { FC } from 'react'
import { MOCK_DATA } from '../../../../mockData'
import Location from '../../../../assets/icons/Location'
import Star from '../../../../assets/icons/Star'

import { useVacationsPage } from '../../hooks/useVacationsPage'

import styles from './VacationsList.module.scss'

const VacationsList: FC = () => {
  const { vacancies } = useVacationsPage()
  console.log(vacancies)

  return (
    <div className={styles.list}>
      {vacancies.map(({ profession, payment_from, type_of_work,town }, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.work}>{profession}</div>
          <div className={styles.wrapper}>
            <div className={styles.salary}>з/п от {payment_from} rub</div>
            <div className={styles.timeLine}>{type_of_work.title}</div>
          </div>
          <div className={styles.location}>
            <Location className={styles.locationIcon} />
            <div className={styles.sity}>{town.title}</div>
          </div>
          <Star className={styles.favorite} />
        </div>
      ))}
    </div>
  )
}

export default VacationsList
