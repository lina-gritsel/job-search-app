import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import EmptyListIcon from '../../../../assets/icons/EmptyListIcon'
import { PATHS } from '../../../../router/paths'

import styles from './EmptyList.module.scss'

const EmptyList: FC = () => {
  return (
    <div className={styles.container}>
      <EmptyListIcon className={styles.emptyIcon} />
      <div className={styles.title}>упс, тут пока ничего нет</div>
      <NavLink to={PATHS.VACANCIES} className={styles.link}>
        Поиск вакансий
      </NavLink>
    </div>
  )
}

export default EmptyList
