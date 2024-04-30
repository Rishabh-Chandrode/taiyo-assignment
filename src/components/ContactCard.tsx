import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { deleteContact } from '../store/features/contactSlice';

const ContactCard = ({_id, firstname, lastname,phone,status}: {_id: string ,firstname: string, lastname: string, phone: string, status: string}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    console.log('Deleting contact')
    dispatch(deleteContact(_id))
    console.log(_id)
  }
  return (
    <div id={_id} className='bg-white w-72 p-2  m-2 rounded flex  justify-between'>
        
        <div className='box-border p-1 flex flex-col' >
            <div className="firstname text-md p-1">{firstname + " " + lastname}</div>
            <div className="phone p-1">{phone}</div>
            <div className="status p-1">{status}</div>

        </div>
        <div className='actions flex flex-col justify-center'>
            <button onClick={() => navigate(`/contactform/${_id}`)} className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>Edit</button>
            <button onClick={() => handleDelete()} className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'>Delete</button>
        </div>
    </div>
  )
}

export default ContactCard