import Layout from "@/components/Layout";
import DepartamentHeader from "./departament-header";
import { useQuery } from "@tanstack/react-query";
import { getDepartaments } from "@/utils/getDepartaments";
import DataTable from "@/components/DataTable";
import { columns } from "./TableDepartament/columns";

const Departaments = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["departaments"],
    queryFn: getDepartaments,
  });

  return (
    <Layout>
      <DepartamentHeader />
      <DataTable columns={columns} data={data} />
    </Layout>
  );
};

export default Departaments;
