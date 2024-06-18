import Layout from "@/components/Layout"
import { useNavigate, useParams } from "react-router-dom";
import ResponsibleHeader from "./responsible-header";
import DataTable from "@/components/DataTable";
import { columns } from "./TableResponsible/columns";
import { useQuery } from "@tanstack/react-query";
import { getResponsibles } from "@/utils/getResponsibles";

const Responsibles = () => {
    const { departamentUuid } = useParams();
    const navigate = useNavigate();

  if (!departamentUuid) {
    navigate("/departaments");
    return null;
  }

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["responsibles"],
    queryFn: () => {
      return getResponsibles(departamentUuid);
    },
    enabled: !!departamentUuid,
  });

  console.log(data)

  return (
    <Layout>
        <ResponsibleHeader />
        <DataTable columns={columns} data={data} />
    </Layout>
  )
}

export default Responsibles