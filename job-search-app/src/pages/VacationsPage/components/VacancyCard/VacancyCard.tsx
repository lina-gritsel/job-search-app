import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Location from '../../../../assets/icons/Location'
import Star from '../../../../assets/icons/Star'
import { PATHS } from '../../../../router/paths'

import { ParsedVacation } from '../../helpers'
import { useVacationCard } from './hooks'

import styles from './VacancyCard.module.scss'
import classNames from 'classnames'

type Event = MouseEvent | TouchEvent | any

interface VacationCardProps {
  id: string
  profession: string
  salary: string
  position: string
  city: string
  className?: string
}

const VacationCard: FC<VacationCardProps> = ({
  profession,
  salary,
  position,
  city,
  id,
  className,
}) => {
  const {
    addVacancyToFavoriteList,
    removeVacancyFromFavoriteList,
    isFavorited,
    addedToFavoriteList,
  } = useVacationCard(id)

  return (
    <NavLink
      to={`${PATHS.VACANCY}/${id}`}
      className={classNames(styles.container, className)}
    >
      <h2 className={styles.work}>{profession}</h2>
      <div className={styles.wrapper}>
        <p className={styles.salary}>з/п от {salary} rub</p>
        <p className={styles.timeLine}>{position}</p>
      </div>
      <div className={styles.location}>
        <Location className={styles.locationIcon} />
        <p className={styles.city}>{city}</p>
      </div>
      <>
        {isFavorited || addedToFavoriteList.includes(id) ? (
          <div
            className={styles.favorite}
            onClick={(event: Event) => removeVacancyFromFavoriteList(event)}
          >
            <Star className={styles.activeStar} />
          </div>
        ) : (
          <div
            className={styles.favorite}
            onClick={(event: Event) => addVacancyToFavoriteList(event)}
          >
            <Star className={styles.star} />
          </div>
        )}
      </>
    </NavLink>
  )
}

export default VacationCard
