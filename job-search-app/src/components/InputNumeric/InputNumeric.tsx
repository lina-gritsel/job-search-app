import { FC, useState } from 'react'
import { Select } from '@mantine/core'

interface InputNumericProps {
  placeholder: string
}

const InputNumeric: FC<InputNumericProps> = ({ placeholder }) => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Select
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      searchable
      nothingFound="No options"
      clearable
      allowDeselect
      data={['100', '200']}
    />
  )
}

export default InputNumeric
