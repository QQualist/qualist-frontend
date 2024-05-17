
interface INotificationContent {
    children: string
}

const NotificationContent = ({children}: INotificationContent) => {
  return (
    <span className="text-sm dark:text-light-gray leading-relaxed">
        {children}
    </span>
  )
}

export default NotificationContent