import { ElementType } from 'react'


interface ITextfieldIcon {
  icon: ElementType;
  size?: number;
  onClick?: () => void
}


const TextfieldIcon = ({icon: Icon, size=24, onClick}: ITextfieldIcon) => {
  return (
    <Icon 
        className="text-light-gray"
        size={size}
        onClick={onClick}
    />
  )
}

export default TextfieldIcon