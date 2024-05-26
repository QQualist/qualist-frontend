import Layout from "@/components/Layout"
import { Header } from "@/components/Layout/Header";
import ItemHeader from "./item-header";


const Items = () => {
  
    const searchParams = new URLSearchParams(location.search);
    const checklist_uuid = searchParams.get('checklist_uuid');

    return (
    <Layout>
        <ItemHeader />
    </Layout>
  )
}

export default Items