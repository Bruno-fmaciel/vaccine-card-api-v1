import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import VaccineCardServise from '../services/VaccineCardServise';

const UpdateVaccineCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vaccinecard, setVaccinecard] = useState({
        id:id,
        vacina:"",
        doses:"",
        data:"",
        local:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setVaccinecard({...vaccinecard,[e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await VaccineCardServise.getVaccineById(id);
                setVaccinecard(response.data);
            }catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    

    const UpdateVaccine = (e) => {
        e.preventDefault();
        VaccineCardServise.updateVaccine(vaccinecard, id).then((response) => {
            navigate("/vaccineCardList")
        }).catch((error) => {
            console.log(error);
        })
    };

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1 className='pl-40'>Editar vacina</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 pl-24'>
                <label className='block text-gray-600 text-sm font-normal'>Vacina</label>
                <select name='vacina' value={vaccinecard.vacina} onChange={(e) => handleChange(e)} className='text-gray-600 text-sm font-normal h-10 w-96 border mt-2'>
                    <option>Escolha a vacina...</option>
                    <option>BCG</option>
                    <option>DTP (tríplice bacteriana)</option>
                    <option>Dupla adulto (dT)</option>
                    <option>Dupla adulto (dT) e/ou dTpa tipo adulto</option>
                    <option>Hepatite B</option>
                    <option>HPV quadrivalente</option>
                    <option>SRC (tríplice viral)</option>
                    <option>SCRV (tetra viral)</option>
                    <option>Vacina pentavalente (DTP + HB + Hib)</option>
                    <option>VIP (vacina inativada poliomielite)</option>
                    <option>VORH (Vacina Oral de Rotavírus Humano)</option>
                    <option>Vacina pneumocócica 10 (valente)</option>
                    <option>Vacina meningocócica C (conjugada)</option>
                    <option>Vacina Covid-19 (Pfizer pediátrica para menor de 5 anos)</option>
                    <option>Vacina febre amarela</option>
                    <option>VOP (vacina oral poliomielite)</option>
                    <option>Vacina hepatite A</option>
                    <option>Vacina varicela</option>
                    <option>Vacina meningocócica ACWY (conjugada)</option>
                    <option>Vacinas Covid-19</option>
                </select>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 pl-24'>
                <label className='block text-gray-600 text-sm font-normal'>Doses</label>
                <select name='doses' value={vaccinecard.doses} onChange={(e) => handleChange(e)} className='text-gray-600 text-sm font-normal h-10 w-96 border mt-2'>
                    <option>Escolha a dose...</option>
                    <option>Dose única</option>
                    <option>1ª</option>
                    <option>2ª</option>
                    <option>3ª</option>
                    <option>Reforço 1</option>
                    <option>Reforço 2</option>
                </select>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 pl-24'>
                <label className='block text-gray-600 text-sm font-normal'>Data</label>
                <input type='date' name='data' value={vaccinecard.data} onChange={(e) => handleChange(e)} className='text-gray-600 text-sm font-normal h-10 w-96 border mt-2' placeholder='dd/mm/aaaa'>
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 pl-24'>
                <label className='block text-gray-600 text-sm font-normal'>Local</label>
                <input name='local' value={vaccinecard.local} onChange={(e) => handleChange(e)} className='text-gray-600 text-sm font-normal h-10 w-96 border mt-2'>
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4 pl-24'>
                <button onClick={UpdateVaccine} className='rounded text-white font-semibold bg-green-400 py-2 px-2 mt-2 hover:bg-green-700'>Editar</button>
                <button onClick={() => navigate("/vaccineCardList")} className='rounded text-white font-semibold bg-red-400 py-2 px-2 mt-2 hover:bg-red-700'>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateVaccineCard