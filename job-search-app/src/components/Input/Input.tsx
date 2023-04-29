import { FC, useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import { Select } from '@mantine/core'

import styles from './Input.module.scss'

interface InputProps {
  placeholder: string
  data: string[]
}

const Input: FC<InputProps> = ({ placeholder, data }) => {
  const [value, setValue] = useState<string | null>("")

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
        rightSection={<IconChevronDown className={styles.iconArrow} />}
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        data={data}
      />
  )
}

export default Input
