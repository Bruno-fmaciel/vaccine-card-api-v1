import React from 'react'
import { useNavigate } from 'react-router-dom';

const VaccineCard = ({vaccineCard, deleteVaccine}) => {

  const navigate = useNavigate();
  const editVaccine = (e, id) => {
    e.preventDefault();
    navigate(`/editVaccineCard/${id}`)
  };

  return (
    <tr key={vaccineCard.id}>
        <td className='text-center px-6 py-4 whitespace-nowrap'><div className='text-small text-gray-500'>{vaccineCard.vacina}</div></td>
        <td className='text-center px-6 py-4 whitespace-nowrap'><div className='text-small text-gray-500'>{vaccineCard.doses}</div></td>
        <td className='text-center px-6 py-4 whitespace-nowrap'><div className='text-small text-gray-500'>{vaccineCard.data}</div></td>
        <td className='text-center px-6 py-4 whitespace-nowrap'><div className='text-small text-gray-500'>{vaccineCard.local}</div></td>
        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a onClick={(e,id) => editVaccine(e, vaccineCard.id)} className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Editar</a>
            <a onClick={(e, id) => deleteVaccine(e, vaccineCard.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Excluir</a>
        </td>
    </tr>
  )
}

export default VaccineCard