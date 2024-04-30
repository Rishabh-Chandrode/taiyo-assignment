import React, { useEffect } from 'react'
import ContactCard from './ContactCard'
import { useAppSelector } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();
  let c = useAppSelector(state => state.contact.contacts)
  console.log('Fetching contacts')
  let contacts = localStorage.getItem('contactDetails') ? JSON.parse(localStorage.getItem('contactDetails') || '[]') : []
  console.log(contacts)
  useEffect(() => {
    
  }, [c])
  
 
  return (
    <div className='contacts h-full w-full mt-16' >
      <div className='flex justify-between'>
        <h1 className='text-4xl text-slate-200'>Contacts</h1>
        <button  className='bg-green-500 p-2 m-2 rounded'>
          <div onClick={() => navigate("/contactform/0")}>Add Contact</div>
        </button>
      </div>
      <div className='flex flex-wrap'>

      {
        contacts.map((contact: { _id: string ; firstName: string; lastName: string; phone: string; isActive: boolean; }) => {
          return <ContactCard key={contact._id} _id={contact._id} firstname={contact.firstName} lastname={contact.lastName} phone={contact.phone} status={contact.isActive ? 'active' : 'inactive'} />
        })
      }
      </div>
      
    </div>
  )
}

export default Contacts