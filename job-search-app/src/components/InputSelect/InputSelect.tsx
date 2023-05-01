import { FC, useState } from 'react'
import { Select } from '@mantine/core'

import SelectArrow from '../../assets/icons/SelectArrow'
import styles from './InputSelect.module.scss'

interface InputSelectProps {
  placeholder: string
  data: string[]
}

const InputSelect: FC<InputSelectProps> = ({ placeholder, data }) => {
  const [value, setValue] = useState<string | null>('')

  return (
    <Select
      className={styles.input}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      searchable
      nothingFound="No options"
      clearable
      allowDeselect
      rightSection={<SelectArrow />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={data}
    />
  )
}

export default InputSelect
