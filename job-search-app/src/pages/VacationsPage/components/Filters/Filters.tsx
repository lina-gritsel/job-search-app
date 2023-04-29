import { FC } from 'react'
import { Button } from '@mantine/core'

import InputNumeric from '../../../../components/InputNumeric'
import Input from '../../../../components/Input'

import styles from './Filters.module.scss'

const Filters: FC<{ industries: string[] }> = ({ industries }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>фильтры</p>
        <p className={styles.resetFilters}>Cбросить все</p>
      </div>
      <div className={styles.content}>
        <div className={styles.filter}>
          <p className={styles.subtitle}>отрасль</p>
          <Input placeholder="Выберите отрасль" data={industries} />
        </div>
        <div className={styles.filter}>
          <p className={styles.subtitle}>оклад</p>
          <InputNumeric placeholder="От" />
          <InputNumeric placeholder="До" />
        </div>
        <Button>Применить</Button>
      </div>
    </div>
  )
}

export default Filters
