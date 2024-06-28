import { format } from 'date-fns'

export const formatDate = (data: string) => {
    const date = new Date(data);

    return format(date, 'dd/MM/yyyy')
}