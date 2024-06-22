import Layout from "@/components/Layout";
import AuditHeader from "./audit-header";
import Calendar from "@/components/Calendar";
import { useQuery } from "@tanstack/react-query";
import { getAudits } from "@/utils/getAudits";

const Audits = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["audits"],
    queryFn: getAudits,
  });

  const appointments = data.map((audit) => ({
    ...audit, 
    date: new Date(audit.date),
    description: audit.name,
  }));

  return (
    <Layout>
      <AuditHeader />
      <Calendar appointments={appointments} />
    </Layout>
  );
};

export default Audits;
