import { FC, useState } from 'react'
import { Button } from '@mantine/core'

import { VacanciesQueryParams } from '../../hooks/useVacanciesPage'
import InputNumeric from '../../../../components/InputNumeric'
import InputSelect from '../../../../components/InputSelect'
import { Industries } from '../../../../api'

import styles from './Filters.module.scss'

type Event = { target: { value: number | '' } }

interface FiltersProps {
  industries: Industries[]
  setQueryData: (params: VacanciesQueryParams) => void
}

const Filters: FC<FiltersProps> = ({ industries, setQueryData }) => {
  const [industry, setIndustry] = useState<string>('')
  const [paymentFrom, setPaymentFrom] = useState<number | ''>('')
  const [paymentTo, setPaymentTo] = useState<number | ''>('')

  const onSubmit = () => {
    const key = String(industries.find(({ title }) => title === industry).key)

    setQueryData({ industry: key, paymentFrom, paymentTo })
  }

  const onClear = () => {
    setIndustry('')
    setPaymentFrom('')
    setPaymentTo('')
  }

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
            data-elem="industry-select"
          />
        </div>
        <div className={styles.filter}>
          <p className={styles.subtitle}>оклад</p>
          <InputNumeric
            value={paymentFrom}
            onChange={(event: Event) => setPaymentFrom(event?.target?.value)}
            placeholder="От"
            data-elem="salary-from-input"
          />
          <InputNumeric
            value={paymentTo}
            onChange={(event: Event) => setPaymentTo(event?.target?.value)}
            placeholder="До"
            data-elem="salary-to-input"
          />
        </div>
        <Button onClick={onSubmit} data-elem="search-button">
          Применить
        </Button>
      </div>
    </div>
  )
}

export default Filters
