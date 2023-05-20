import { FC } from 'react'

import Loader from '../../../../components/Loader'
import { Vacation } from '../../../../api'

import { parseVacanciesData } from '../../helpers'

import VacationCard from '../VacancyCard'

import styles from './VacanciesList.module.scss'

interface VacanciesListProps {
  vacancies: Vacation[]
  loading: boolean
}

const VacanciesList: FC<VacanciesListProps> = ({ vacancies, loading }) => {
  const parsedVacancies = parseVacanciesData(vacancies)

  return (
    <div className={styles.list}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {parsedVacancies.map((vacation) => (
            <VacationCard key={vacation?.id} {...vacation} />
          ))}
        </>
      )}
    </div>
  )
}

export default VacanciesList
