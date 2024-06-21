import Layout from "@/components/Layout";
import AuditHeader from "./audit-header";
import Calendar from "@/components/Calendar";

const Audits = () => {
  return (
    <Layout>
      <AuditHeader />
      <Calendar />
    </Layout>
  );
};

export default Audits;
