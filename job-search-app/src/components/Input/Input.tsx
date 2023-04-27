import { Select } from '@mantine/core'
import { FC, useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'

import styles from './Input.module.scss'

interface InputProps {
  label: string
  placeholder: string
}

const Input: FC<InputProps> = ({ label, placeholder }) => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.title}>{label}</div>
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
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  )
}

export default Input
