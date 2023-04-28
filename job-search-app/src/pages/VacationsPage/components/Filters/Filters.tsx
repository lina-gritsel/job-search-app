import { FC } from 'react'
import { Button } from '@mantine/core'

import InputNumeric from '../../../../components/InputNumeric'
import Input from '../../../../components/Input'

import { useVacationsPage } from '../../hooks/useVacationsPage'

import styles from './Filters.module.scss'

const Filters: FC = () => {
  const { industrys } = useVacationsPage()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>фильтры</div>
        <div className={styles.resetFilters}>Cбросить все</div>
      </div>
      <div className={styles.content}>
        <Input label="Отрасль" placeholder="Выберете отрасль" data={industrys} />
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
