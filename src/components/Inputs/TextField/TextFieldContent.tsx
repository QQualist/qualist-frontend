import { ReactNode } from 'react'

interface ITextFieldContent {
    children: ReactNode
}

const TextFieldContent = ({ children }: ITextFieldContent) => {
  return (
    <div className='flex items-center gap-1 border border-input rounded-md bg-transparent px-3'>
        {children}
    </div>
  )
}

export default TextFieldContent