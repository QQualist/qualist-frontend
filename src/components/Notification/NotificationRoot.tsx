import { ReactNode } from 'react'

interface INotificationRoot {
    children: ReactNode
}

const NotificationRoot = ({children}: INotificationRoot) => {
  return (
    <div className='flex w-full items-center p-5  gap-3 dark:bg-dark-gray border-light-gray/30 border-b last:border-b-0'>
        {children}
    </div>
  )
}

export default NotificationRoot