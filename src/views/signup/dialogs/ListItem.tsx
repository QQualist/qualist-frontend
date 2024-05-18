import { useTranslation } from "react-i18next";

interface IListItem {
  children: string;
}

const ListItem = ({ children }: IListItem) => {
  const { t } = useTranslation();

  return <li className="pl-5 text-sm text-justify">{t(children)}</li>;
};

export default ListItem;
