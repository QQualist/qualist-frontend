import DataTable from "@/components/DataTable";
import Layout from "@/components/Layout";
import { columns } from "./TablePriorities/columns";
import { useQuery } from "@tanstack/react-query";
import { getPriorities } from "@/utils/getPriorities";

import PriorityHeader from "./priority-header";


const Priorities = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["priorities"],
    queryFn: getPriorities,
  });

  return (
    <Layout>
      <PriorityHeader />
      <DataTable columns={columns} data={data} />
    </Layout>
  );
};

export default Priorities;
