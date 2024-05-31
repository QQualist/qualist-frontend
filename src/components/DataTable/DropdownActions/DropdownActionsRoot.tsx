import { ReactNode } from 'react'
import { DropdownMenu } from '../../ui/dropdown-menu'

interface IDropdownRoot {
    children: ReactNode
}

const DropdownActionsRoot = ({ children }: IDropdownRoot) => {
  return (
    <DropdownMenu>
        {children}
    </DropdownMenu>
  )
}

export default DropdownActionsRoot