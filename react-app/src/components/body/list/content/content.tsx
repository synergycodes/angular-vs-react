import { Employee } from '../../../../interfaces/employee.interface'
import { Title } from '../../../title/title'
import { ListContainer } from '../listContainer/listContainer'

interface Props {
    data: Employee[]
}
export const Content:React.FC<Props> = ({data}) => {

    return (
        <>
            <Title />
            <ListContainer data={data} />
        </>
    )
}