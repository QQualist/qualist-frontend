import Layout from "@/components/Layout";
import AuditedItemHeader from "./audited-item-header";
import AuditedItemDrags from "./audited-item-drags";

const AuditedItems = () => {
  return (
    <Layout>
      <AuditedItemHeader />
      <AuditedItemDrags />
    </Layout>
  );
};

export default AuditedItems;
