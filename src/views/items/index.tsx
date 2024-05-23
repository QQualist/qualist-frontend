import Layout from "@/components/Layout"
import { Header } from "@/components/Layout/Header";


const Items = () => {
  
    const searchParams = new URLSearchParams(location.search);
    const checklist_uuid = searchParams.get('checklist_uuid');

    return (
    <Layout>
        <Header.Root>
            <Header.Texts title="Project plan" subtitle="Manage the items on the checklist" />
        </Header.Root>

        <h1 className="text-2xl">{checklist_uuid}</h1>
    </Layout>
  )
}

export default Items