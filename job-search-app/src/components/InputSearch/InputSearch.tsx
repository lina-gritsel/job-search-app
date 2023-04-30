import { FC } from 'react'
import { Button, Input } from '@mantine/core'

import SearchIcon from '../../assets/icons/SearchIcon'

import styles from './InputSearch.module.scss'

const InputSearch: FC<{ placeholder: string }> = ({ placeholder }) => {
  const rightSection = <Button className={styles.btnSearch}>Поиск</Button>

  return (
    <Input
      size="sm"
      icon={<SearchIcon />}
      placeholder={placeholder}
      rightSection={rightSection}
      rightSectionWidth={95}
      styles={{
        input: {
          height: 48,
          marginBottom: 16,
          padding: 12,
          borderRadius: 8
        },
      }}
    />
  )
}

export default InputSearch
