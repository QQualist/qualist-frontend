import { ReactNode } from "react"

interface IList {
    children: ReactNode
}

const List = ({children}: IList) => {
  return (
    <ul className="list-inside list-disc">
        {children}
    </ul>
  )
}

export default List