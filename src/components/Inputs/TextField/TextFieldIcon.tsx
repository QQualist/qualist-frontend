import { ElementType } from 'react'


interface ITextFieldIcon {
  icon: ElementType;
  size?: number;
  onClick?: () => void
}


const TextFieldIcon = ({icon: Icon, size=24, onClick}: ITextFieldIcon) => {
  return (
    <Icon 
        className="text-dark-gray cursor-pointer"
        size={size}
        onClick={onClick}
    />
  )
}

export default TextFieldIcon