import { FC, useState } from 'react'
import { Button } from '@mantine/core'

import { VacanciesQueryParams } from '../../hooks/useVacanciesPage'
import InputNumeric from '../../../../components/InputNumeric'
import InputSelect from '../../../../components/InputSelect'

import styles from './Filters.module.scss'

type Event = { target: { value: string } }

interface FiltersProps {
  industries: any[]
  setQueryData: (params: VacanciesQueryParams) => void
}

const Filters: FC<FiltersProps> = ({ industries, setQueryData }) => {
  const [industry, setIndustry] = useState<string>('')
  const [paymentFrom, setPaymentFrom] = useState<string>('')
  const [paymentTo, setPaymentTo] = useState<string>('')

  const onSubmit = () => {
    const key = industries.find(({ title }) => title === industry).key

    setQueryData({ industry: key, paymentFrom, paymentTo })
  }

  const onClear = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>фильтры</p>
        <p onClick={onClear} className={styles.resetFilters}>
          Cбросить все
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.filter}>
          <p className={styles.subtitle}>отрасль</p>
          <InputSelect
            value={industry}
            onChange={setIndustry}
            placeholder="Выберите отрасль"
            data={industries}
          />
        </div>
        <div className={styles.filter}>
          <p className={styles.subtitle}>оклад</p>
          <InputNumeric
            value={paymentFrom}
            onChange={(event: Event) => setPaymentFrom(event.target.value)}
            placeholder="От"
          />
          <InputNumeric
            value={paymentTo}
            onChange={(event: Event) => setPaymentTo(event.target.value)}
            placeholder="До"
          />
        </div>
        <Button onClick={onSubmit}>Применить</Button>
      </div>
    </div>
  )
}

export default Filters
