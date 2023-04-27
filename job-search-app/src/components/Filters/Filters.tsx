import { FC } from 'react'
import Input from '../Input'

import styles from './Filters.module.scss'
import InputNumeric from '../InputNumeric'
import { Button } from '@mantine/core'

const Filters: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>фильтры</div>
        <div className={styles.resetFilters}>Cбросить все</div>
      </div>
      <div className={styles.content}>
        <Input label="Отрасль" placeholder="Выберете отрасль" />
        <div className={styles.salary}>
          <div className={styles.subtitle}>оклад</div>
          <InputNumeric placeholder="От" />
          <InputNumeric placeholder="До" />
        </div>
        <Button>Применить</Button>
      </div>
    </div>
  )
}

export default Filters
