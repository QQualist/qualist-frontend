import { ElementType } from 'react'

interface INotificationIcon {
    icon: ElementType
}

const NotificationIcon = ({icon: Icon}: INotificationIcon) => {
  return (
    <Icon className="min-w-6 min-h-6 text-light-blue" size={24} />
  )
}

export default NotificationIcon