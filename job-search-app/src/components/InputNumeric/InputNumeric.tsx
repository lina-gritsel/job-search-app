import { FC } from 'react'
import { Input } from '@mantine/core'

interface InputNumericProps {
  placeholder: string
  onChange: (args: any) => void
  value: string
}

const InputNumeric: FC<InputNumericProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return <Input value={value} onChange={onChange} placeholder={placeholder} />
}

export default InputNumeric
