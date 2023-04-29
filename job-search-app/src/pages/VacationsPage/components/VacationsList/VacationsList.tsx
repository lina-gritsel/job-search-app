import { FC } from 'react'

import Location from '../../../../assets/icons/Location'
import Star from '../../../../assets/icons/Star'
import { MOCK_DATA } from '../../../../mockData'
import { Vacation } from '../../../../api'

import { parseVacanciesData } from '../../helpers'

import styles from './VacationsList.module.scss'

interface VacationsListProps {
  vacancies: Vacation[]
  loading: boolean
}

const VacationsList: FC<VacationsListProps> = ({ vacancies, loading }) => {
  const parsedVacations = parseVacanciesData(vacancies)

  return (
    <div className={styles.list}>
      {parsedVacations.map(({ profession, salary, position, city }, index) => (
        <div key={index} className={styles.container}>
          <p className={styles.work}>{profession}</p>
          <div className={styles.wrapper}>
            <p className={styles.salary}>з/п от {salary} rub</p>
            <p className={styles.timeLine}>{position}</p>
          </div>
          <div className={styles.location}>
            <Location className={styles.locationIcon} />
            <p className={styles.city}>{city}</p>
          </div>
          <Star className={styles.favorite} />
        </div>
      ))}
    </div>
  )
}

export default VacationsList
