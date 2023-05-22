import { FC } from 'react'
import { Select } from '@mantine/core'

import SelectArrow from '../../assets/icons/SelectArrow'
import styles from './InputSelect.module.scss'

interface InputSelectProps {
  placeholder: string
  data: any[]
  onChange: (value: string) => void
  value: string
}

const InputSelect: FC<InputSelectProps> = ({
  placeholder,
  data,
  value,
  onChange,
}) => {
  const industries = data.map(({ title }: { title: string }) => title)

  return (
    <Select
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      nothingFound="No options"
      clearable
      allowDeselect
      rightSection={<SelectArrow />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={industries}
    />
  )
}

export default InputSelect
