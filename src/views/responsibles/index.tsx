import Layout from "@/components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import ResponsibleHeader from "./responsible-header";
import DataTable from "@/components/DataTable";
import { columns } from "./TableResponsible/columns";
import { useQuery } from "@tanstack/react-query";
import { getResponsibles } from "@/utils/getResponsibles";

const Responsibles = () => {
  const { departamentUuid } = useParams();
  const navigate = useNavigate();

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["responsibles"],
    queryFn: () => {
      if (departamentUuid) {
        return getResponsibles(departamentUuid);
      }
    },
    enabled: !!departamentUuid,
  });

  if (!departamentUuid) {
    navigate("/departaments");
    return null;
  }

  return (
    <Layout>
      <ResponsibleHeader />
      <DataTable columns={columns} data={data} />
    </Layout>
  );
};

export default Responsibles;
