import { FC } from 'react'
import { Button, Input } from '@mantine/core'

import SearchIcon from '../../assets/icons/SearchIcon'

import styles from './InputSearch.module.scss'

const InputSearch: FC<{
  placeholder: string
  onChange: (args: any) => void
  className?: string
}> = ({ onChange, placeholder, className }) => {
  const rightSection = <Button className={styles.btnSearch}>Поиск</Button>

  return (
    <Input
      className={className}
      size="sm"
      icon={<SearchIcon />}
      placeholder={placeholder}
      onChange={onChange}
      rightSection={rightSection}
      rightSectionWidth={95}
      styles={{
        input: {
          height: 48,
          marginBottom: 16,
          padding: 12,
          borderRadius: 8,
        },
      }}
    />
  )
}

export default InputSearch
