import Layout from "@/components/Layout"
import { useNavigate, useParams } from "react-router-dom";
import ResponsibleHeader from "./responsible-header";

const Responsibles = () => {
    const { departamentUuid } = useParams();
    const navigate = useNavigate();

  if (!departamentUuid) {
    navigate("/departaments");
    return null;
  }

  return (
    <Layout>
        <ResponsibleHeader />
    </Layout>
  )
}

export default Responsibles