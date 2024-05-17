import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Dashboard = () => {

  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <span>{t('I want')}</span>
    </>
  );
};

export default Dashboard;
