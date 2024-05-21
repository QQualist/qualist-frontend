import Layout from "@/components/Layout"

const Checklists = () => {
  return (
    <Layout 
      title="Checklists"
      subtitle="Access and manage checklists"
      hasButton={true}
      textButton="Create checklist"
      onClick={() => alert("CRIA CHECKLIST")}
    >
        <h1>Checklists</h1>
    </Layout>
  )
}

export default Checklists