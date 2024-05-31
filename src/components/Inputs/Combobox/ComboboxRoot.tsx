import { ReactNode } from 'react'
import { Combobox } from '.'

interface IComboboxRoot {
    children: ReactNode
    error?: string;
}

const ComboboxRoot = ({ children, error }: IComboboxRoot) => {
  return (
    <div className='w-full h-max'>
        {children}
        {error && <Combobox.Error>{error}</Combobox.Error>}
    </div>
  )
}

export default ComboboxRoot