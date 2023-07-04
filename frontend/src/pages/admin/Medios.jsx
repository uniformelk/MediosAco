import React from 'react'
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";

const Medios = () => {
  return (
    <>
        <div className="grid grid-cols-4 gap-4 p-5  bg-gray-100">
            <select name="" id="" className='p-2'>
                <option value="defualt">Seleccione Medio</option>
                <option value="defualt">Radio</option>
                <option value="defualt">TV</option>
            </select>
            <select name="" id="" className='p-2' disabled>
                <option value="defualt">Seleccione Proveedor Mayor</option>
                <option value="defualt">JM</option>
                <option value="defualt">Maravilla ST</option>
            </select>
            <select name="" id="" className='p-2' disabled>
                <option value="defualt">Seleccione Proveedor Menor</option>
                <option value="defualt">JM</option>
                <option value="defualt">Maravilla ST</option>
            </select>
            <select name="" id="" className='p-2' disabled>
                <option value="defualt">Seleccione Formato</option>
                <option value="defualt">Cuña</option>
                <option value="defualt">Otro</option>
            </select>

            <div className='text-gray-900'>
                <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900">Rango de Precios</label>
                <input id="default-range" type="range" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
            </div>

        </div>
       
<div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 m-5">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 text-gray-900">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 text-gray-900">
                    Color
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 text-gray-900">
                    Category
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 text-gray-900">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 text-gray-900">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4 bg-gray-50 text-gray-900">
                    Red
                </td>
                <td className="px-6 py-4 bg-gray-50 text-gray-900">
                    Wearables
                </td>
                <td className="px-6 py-4 bg-gray-50 text-gray-900">
                    <button>
                        <BsFillPatchPlusFill className='text-lime-600 text-xl'/>
                    </button>
                    <button>
                        <BsFillPatchMinusFill className='text-red-600 text-xl'/>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </>
  )
}

export default Medios