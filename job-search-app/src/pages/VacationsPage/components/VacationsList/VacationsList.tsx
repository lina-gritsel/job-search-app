import { FC } from 'react'

import { Vacation } from '../../../../api'

import { parseVacanciesData } from '../../helpers'

import styles from './VacationsList.module.scss'
import VacationCard from '../VacancyCard'

interface VacationsListProps {
  vacancies: Vacation[]
  loading: boolean
}

const VacationsList: FC<VacationsListProps> = ({ vacancies, loading }) => {
  const parsedVacations = parseVacanciesData(vacancies)

  return (
    <div className={styles.list}>
      {loading ? (
        <>Loading ...</>
      ) : (
        <>
          {parsedVacations.map((vacation) => (
            <VacationCard key={vacation?.id} {...vacation} />
          ))}
        </>
      )}
    </div>
  )
}

export default VacationsList
