import { DropdownMenuTrigger } from '../../ui/dropdown-menu'
import { Button } from '../../ui/button'
import { MdOutlineMoreHoriz } from 'react-icons/md'

const DropdownActionTrigger = () => {
  return (
    <DropdownMenuTrigger asChild>
          <div className="w-full flex justify-center">
            <Button variant="ghost" className="flex justify-center w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MdOutlineMoreHoriz className="h-4 w-4" />
            </Button>
          </div>
        </DropdownMenuTrigger>
  )
}

export default DropdownActionTrigger