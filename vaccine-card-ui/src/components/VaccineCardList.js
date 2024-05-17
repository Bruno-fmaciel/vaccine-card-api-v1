import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VaccineCardServise from '../services/VaccineCardServise';
import VaccineCard from './VaccineCard';

const VaccineCardList = () => {

    const   navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [vaccineCards, setVaccineCards] = useState(null);

    useEffect(() => { 
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await VaccineCardServise.getVaccines();
                setVaccineCards(response.data);
            } catch(error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteVaccine = (e, id) => {
        e.preventDefault();
        VaccineCardServise.deleteVaccine(id).then((res) => {
            if(vaccineCards) {
                setVaccineCards((prevElement) => {
                    return prevElement.filter((vaccineCard) => vaccineCard.id !== id);
                });
            }
        });
    }
    

    return (
    <>
        <div className='container mx-auto my-8'>
            <div className='h-12 flex align-middle justify-end px-8 mb-6'>
                <button onClick={() => navigate("/addVacina")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-800'>Nova Vacina</button>
            </div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Vacina</th>
                            <th className='font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Doses</th>
                            <th className='font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Data</th>
                            <th className='font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Local</th>
                            <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-8'>Configurar</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className='bg-white'>
                        {vaccineCards.map((vaccineCard) => (
                            <VaccineCard vaccineCard={vaccineCard} deleteVaccine={deleteVaccine} key={vaccineCard.id}></VaccineCard>
                         ))}
                    </tbody> )}
                </table>
            </div>
        </div>
    </>
  )
}

export default VaccineCardList