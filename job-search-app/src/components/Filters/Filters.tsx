import { FC } from 'react'
import Input from '../Input'

import styles from './Filters.module.scss'

const Filters: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>фильтры</div>
        <div className={styles.resetFilters}>Cбросить все</div>
      </div>
      <div className={styles.content}>
        <Input label='Отрасль' placeholder="Выберете отрасль"/>
      </div>
    </div>
  )
}

export default Filters
