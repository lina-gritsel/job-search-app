import { FC } from 'react'

import Star from '../../../../assets/icons/Star'
import { ParsedVacation } from '../../helpers'
import { useVacationCard } from './hooks'

import styles from './VacancyCard.module.scss'

type Event = MouseEvent | TouchEvent | any

const VacationCard: FC<ParsedVacation> = ({
  profession,
  salary,
  position,
  city,
  id,
}) => {
  const {
    addVacancyToFavoriteList,
    removeVacancyFromFavoriteList,
    isFavorited,
    addedToFavoriteList,
  } = useVacationCard(id)

  return (
    <div className={styles.container}>
      <p className={styles.work}>{profession}</p>
      <div className={styles.wrapper}>
        <p className={styles.salary}>з/п от {salary} rub</p>
        <p className={styles.timeLine}>{position}</p>
      </div>
      <div className={styles.location}>
        <p className={styles.city}>{city}</p>
      </div>
      <div className={styles.iconWrapper}>
        {isFavorited || addedToFavoriteList.includes(id) ? (
          <div
            className={styles.favorite}
            onClick={(event: Event) => removeVacancyFromFavoriteList(event)}
          >
            <Star className={styles.starIcon} />
          </div>
        ) : (
          <div
            className={styles.favorite}
            onClick={(event: Event) => addVacancyToFavoriteList(event)}
          >
            <Star className={styles.starIcon} />
          </div>
        )}
      </div>
    </div>
  )
}

export default VacationCard
