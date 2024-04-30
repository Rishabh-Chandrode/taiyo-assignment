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
    <div id={_id} className='bg-slate-500 w-72  m-2 rounded flex justify-between'>
        
        <div className='box-border p-1 flex flex-col' >
            <div className="firstname text-md p-1">{firstname + " " + lastname}</div>
            <div className="phone p-1">{phone}</div>
            <div className="status p-1">{status}</div>

        </div>
        <div className='actions flex flex-col justify-center'>
            <button onClick={() => navigate(`/contactform/${_id}`)} className='bg-green-500 rounded p-2 m-2'>Edit</button>
            <button onClick={() => handleDelete()} className='bg-red-500 rounded p-2 m-2'>Delete</button>
        </div>
    </div>
  )
}

export default ContactCard