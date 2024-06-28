import { ElementType } from 'react'


interface ITextFieldIcon {
  icon: ElementType;
  size?: number;
  onClick?: () => void
}


const TextFieldIcon = ({icon: Icon, size=16, onClick}: ITextFieldIcon) => {
  return (
    <Icon 
        className="text-light-gray cursor-pointer"
        size={size}
        onClick={onClick}
    />
  )
}

export default TextFieldIcon