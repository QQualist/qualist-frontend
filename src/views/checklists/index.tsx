import Layout from "@/components/Layout";
import ChecklistHeader from "./checklist-header";
import DataTable from "@/components/DataTable";
import { columns } from "./TableChecklist/columns";

const Checklists = () => {

  return (
    <Layout>
      <ChecklistHeader />

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={[
    {
      uuid: "checklist_aaaaa",
      name: "Plano de validação",
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      user: {
        user_uuid: "user_aaaaa",
        sendNonConformitiesToEmail: true,
        roleCanDispenseNoConformity: false,
      },
      version: 1,
    },
  ]} />
      </div>
    </Layout>
  );
};

export default Checklists;
