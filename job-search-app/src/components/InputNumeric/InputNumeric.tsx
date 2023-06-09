import { FC } from 'react'
import { NumberInput } from '@mantine/core'

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
      step={100}
      stepHoldDelay={500}
      stepHoldInterval={100}
      styles={{
        controlUp: { border: 0, width: 17, color: '#7b7c88' },
        controlDown: { border: 0, width: 17, color: '#7b7c88' },
      }}
      onKeyDown={(event) => {
        if (
          event.key === '.' ||
          event.key === 'e' ||
          event.key === ',' ||
          event.key === '-'
        ) {
          event.preventDefault()
        }
      }}
    />
  )
}

export default InputNumeric
