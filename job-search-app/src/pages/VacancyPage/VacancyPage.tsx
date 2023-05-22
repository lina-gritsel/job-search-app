import { FC } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { isEmpty } from 'lodash'

import VacationCard from '../VacationsPage/components/VacancyCard'
import { parseVacancy } from '../VacationsPage/helpers'
import Loader from '../../components/Loader'

import { useVacancyPage } from './hooks'

import styles from './VacancyPage.module.scss'

const VacancyPage: FC = () => {
  const { id: vacancyId } = useParams<{ id: string }>()

  const { data, loading } = useVacancyPage(vacancyId)
  const vacancy = parseVacancy(data)

  const vacancyInfoHtml = data?.vacancyRichText

  return (
    <div className={styles.content}>
      {loading && isEmpty(data) && <Loader />}
      {!isEmpty(data) && (
        <div className={styles.container}>
          <VacationCard
            key={vacancy?.id}
            className={styles.vacancyCard}
            {...vacancy}
          />
          <div className={styles.info}>{parse(vacancyInfoHtml || '')}</div>
        </div>
      )}
    </div>
  )
}

export default VacancyPage
