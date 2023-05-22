import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import Location from '../../../../assets/icons/Location'
import Star from '../../../../assets/icons/Star'
import { PATHS } from '../../../../router/paths'

import { useVacationCard } from './hooks'

import styles from './VacancyCard.module.scss'

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
      data-elem={`vacancy-${id}`}
    >
      <h2 className={styles.work}>{profession}</h2>
      <div className={styles.wrapper}>
        <p className={styles.salary}>з/п от {salary} rub</p>
        <p className={styles.point}>.</p>
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
            <Star
              className={styles.activeStar}
              data-elem={`vacancy-${id}-shortlist-button`}
            />
          </div>
        ) : (
          <div
            className={styles.favorite}
            onClick={(event: Event) => addVacancyToFavoriteList(event)}
          >
            <Star
              className={styles.star}
              data-elem={`vacancy-${id}-shortlist-button`}
            />
          </div>
        )}
      </>
    </NavLink>
  )
}

export default VacationCard
