import { ReactNode } from "react";

interface IListItem {
    children: ReactNode;
}

const ListItem = ({children}: IListItem) => {
  return (
    <li className="pl-5 text-sm text-justify">
        {children}
    </li>
  )
}

export default ListItem