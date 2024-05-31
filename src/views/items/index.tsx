import Layout from "@/components/Layout";
import ItemHeader from "./item-header";
import DataTable from "@/components/DataTable";
import { columns } from "./TableItems/columns";
import { getItems } from "@/utils/getItems";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const Items = () => {
  const { checklistUuid } = useParams();
  const navigate = useNavigate();

  if (!checklistUuid) {
    navigate("/checklists");
    return null;
  }

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["items"],
    queryFn: () => {
      return getItems(checklistUuid);
    },
    enabled: !!checklistUuid,
  });

  return (
    <Layout>
      <ItemHeader />
      <DataTable columns={columns} data={data} />
    </Layout>
  );
};

export default Items;
