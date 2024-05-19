import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";

const Dashboard = () => {

  const {t} = useTranslation();
  return (
    <Layout>
      <h1>{t('Dashboard')}</h1>
    </Layout>
  );
};

export default Dashboard;
