import Layout from '@/components/Layout'
import RoleHeader from './role-header'
import DataTable from '@/components/DataTable'
import { useQuery } from '@tanstack/react-query';
import { getRoles } from '@/utils/getRoles';
import { columns } from './TableRoles/columns';

const Role = () => {

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });

  return (
    <Layout>
        <RoleHeader />
        <DataTable columns={columns} data={data} />
    </Layout>
  )
}

export default Role