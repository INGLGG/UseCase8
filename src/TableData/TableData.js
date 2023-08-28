import { useSelector } from "react-redux"
import { showValues } from "../store"
import './TableData.css'

const TableData = () => {
    const storeValues = useSelector(showValues);

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(storeValues).map(name => (
                        <th key={name}>{name}</th>
                    ))}
                </tr>
            </thead>
            {Object.values(storeValues).every((value) => value !== '') &&
                <tbody>
                    <tr>
                        {Object.values(storeValues).map(value => (
                            <td key={value}>{value}</td>
                        ))}

                    </tr>
                </tbody>
            }
        </table>
    )
};

export default TableData;