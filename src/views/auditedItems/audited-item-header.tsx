import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { getAudit } from "@/utils/getAudit";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const AuditedItemHeader = () => {
  const { audit_uuid } = useParams();
    const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["audit", audit_uuid],
    queryFn: () => {
      if (audit_uuid !== undefined) {
        return getAudit(audit_uuid);
      }
    },
    enabled: !!audit_uuid
  });

  if (!audit_uuid) {
    navigate("/checklists");
    return null;
  }

  return (
    <Header.Root>
      <Header.Texts
        title={`Audit: ${data?.name}`}
        subtitle="Run your audit here"
      />
      <Button variant="default">Finish audit</Button>
    </Header.Root>
  );
};

export default AuditedItemHeader;
