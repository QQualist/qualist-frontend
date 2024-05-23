import Layout from "@/components/Layout";
import ChecklistHeader from "./checklist-header";
import { columns } from "./TableChecklist/columns";
import { api } from "@/api/api";
import { useContext } from "react";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { ChecklistData } from "@/types/Checklist";
import { useQuery } from "@tanstack/react-query";
import DataTable from "@/components/DataTable";

const Checklists = () => {
  const { user } = useContext(UserContext) as ContextUser;

  const getChecklists = async (): Promise<ChecklistData[]> => {
    const checklists = await api.get(`/checklists/user/${user?.uuid}`, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });
    return checklists.data;
  };

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["checklists"],
    queryFn: getChecklists,
  });

  return (
    <Layout>
      <ChecklistHeader />
      <DataTable columns={columns} data={data} />
    </Layout>
  );
};

export default Checklists;
