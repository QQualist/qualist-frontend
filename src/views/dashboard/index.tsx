import Layout from "@/components/Layout";
import Header from "@/components/Layout/header";
import { useTranslation } from "react-i18next";

const Dashboard = () => {

  const {t} = useTranslation();
  return (
    <Layout>
      <Header title={t("Dashboard")} subtitle={t("Lorem ipsum, or lipsum as it is sometimes known")} buttonText={t("Teste")} hasButton={true} onClick={() => {}} />
    </Layout>
  );
};

export default Dashboard;
