import { ElementType } from 'react'


interface ITextFieldIcon {
  icon: ElementType;
  size?: number;
  onClick?: () => void
}


const TextFieldIcon = ({icon: Icon, size=24, onClick}: ITextFieldIcon) => {
  return (
    <Icon 
        className="text-light-gray cursor-pointer w-[17px]"
        size={size}
        onClick={onClick}
    />
  )
}

export default TextFieldIcon