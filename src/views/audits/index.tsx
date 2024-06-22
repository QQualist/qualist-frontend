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
    select: (data) =>
      data.map((appointment) => ({
        ...appointment,
        date: new Date(appointment.date),
        description: appointment.name,
      })),
  });

  return (
    <Layout>
      <AuditHeader />
      <Calendar appointments={data} />
    </Layout>
  );
};

export default Audits;
