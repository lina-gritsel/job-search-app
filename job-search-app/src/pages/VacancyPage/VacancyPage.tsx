import { FC } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { isEmpty } from 'lodash'

import Loader from '../../components/Loader'

import VacationCard from '../VacationsPage/components/VacancyCard'
import { parseVacancy } from '../VacationsPage/helpers'

import { useVacancyPage } from './hooks'

import styles from './VacancyPage.module.scss'

const VacancyPage: FC = () => {
  const { id: vacancyId } = useParams<{ id: string }>()

  const { data, loading } = useVacancyPage(vacancyId as string)
  const vacancy = parseVacancy(data)
  const vacancyInfo = parse(data.vacancyRichText)

  return (
    <>
      {loading && isEmpty(data) && <Loader />}
      {!isEmpty(data) && (
        <div className={styles.container}>
          <VacationCard
            key={vacancy?.id}
            {...vacancy}
            className={styles.vacancyCard}
          />
          <div className={styles.info}>
            {vacancyInfo}
            </div>
        </div>
      )}
    </>
  )
}

export default VacancyPage
