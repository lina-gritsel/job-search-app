import { FC } from 'react'
import { MOCK_DATA } from '../../../../mockData'
import Location from '../../../../assets/icons/Location'
import Star from '../../../../assets/icons/Star'

import styles from './VacationsList.module.scss'

const VacationsList: FC = () => {
  return (
    <div className={styles.list}>
      {MOCK_DATA.map(({ work, salary, timeLine, sity }, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.work}>{work}</div>
          <div className={styles.wrapper}>
            <div className={styles.salary}>{salary}</div>
            <div className={styles.timeLine}>{timeLine}</div>
          </div>
          <div className={styles.location}>
            <Location className={styles.locationIcon} />
            <div className={styles.sity}>{sity}</div>
          </div>
          <Star className={styles.favorite}/>
        </div>
      ))}
    </div>
  )
}

export default VacationsList
