import { FC, useState } from 'react'
import { Button } from '@mantine/core'

import InputNumeric from '../../../../components/InputNumeric'
import InputSelect from '../../../../components/InputSelect'

import styles from './Filters.module.scss'

const Filters: FC<{
  industries: string[]
  setQueryData: (params: any) => void
}> = ({ industries, setQueryData }) => {
  const [paymentFrom, setPaymentFrom] = useState<string>('')
  const [paymentTo, setPaymentTo] = useState<string>('')

  const onSubmit = () => {
    setQueryData({ industry: '', paymentFrom, paymentTo })
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
          <InputSelect placeholder="Выберите отрасль" data={industries} />
        </div>
        <div className={styles.filter}>
          <p className={styles.subtitle}>оклад</p>
          <InputNumeric
            value={paymentFrom}
            onChange={(e) => setPaymentFrom(e.target.value)}
            placeholder="От"
          />
          <InputNumeric
            value={paymentTo}
            onChange={(e) => setPaymentTo(e.target.value)}
            placeholder="До"
          />
        </div>
        <Button onClick={onSubmit}>Применить</Button>
      </div>
    </div>
  )
}

export default Filters
