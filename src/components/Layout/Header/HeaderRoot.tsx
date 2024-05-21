import React, { ReactNode } from 'react'

interface IHeaderRoot {
    children: ReactNode
}

const HeaderRoot = ({ children }: IHeaderRoot) => {
  return (
    <div className="w-full flex items-center justify-between mb-8">
        {children}
    </div>
  )
}

export default HeaderRoot