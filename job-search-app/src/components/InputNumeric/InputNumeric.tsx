import { FC } from 'react'
import { NumberInput } from '@mantine/core'

import styles from './InputNumeric.module.scss'

interface InputNumericProps {
  placeholder: string
  onChange: (args: any) => void
  value: number | ''
}

const InputNumeric: FC<InputNumericProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <NumberInput
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={0}
      styles={{
        controlUp: { border: 0, width: 17, color: '#7b7c88' },
        controlDown: { border: 0, width: 17, color: '#7b7c88' },
      }}
    />
  )
}

export default InputNumeric
