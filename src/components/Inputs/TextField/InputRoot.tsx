import { ReactNode } from 'react'

interface ITextFieldRoot {
    children: ReactNode
}

const TextFieldRoot = ({children}: ITextFieldRoot) => {
  return (
    <div className='w-full h-max flex flex-col gap-1 mb-3 group'>
        {children}
    </div>
  )
}

export default TextFieldRoot