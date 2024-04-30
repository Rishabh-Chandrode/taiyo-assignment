import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import { addContact, updateContact } from '../store/features/contactSlice';
import { redirect, useNavigate, useParams } from 'react-router-dom';

const ContactForm = () => {
    const currid = useParams().id;
    console.log(currid)
    const contacts = localStorage.getItem('contactDetails') ? JSON.parse(localStorage.getItem('contactDetails') || '[]') : []
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [contactDetails, setContactDetails] = useState({
        _id:'',
        firstName: '',
        lastName: '',
        phone: '',
        isActive: true
    });
    
        useEffect(() => {
            let contact = contacts.find((contact: { _id: string ; }) => contact._id === currid)
            if(contact) setContactDetails(contact)
        }, [currid])
    
   

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(currid === '0'){
            let newContact = {...contactDetails, _id: Math.random().toString(16).slice(2)}
            console.log('Adding contact')
            dispatch(addContact(newContact))
            
        }else{
            console.log('Updating contact')
            dispatch(updateContact(contactDetails))
        }
        navigate("/contacts")
        console.log('Form submitted')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(contactDetails)

        setContactDetails({
            ...contactDetails,
            [e.target.name]: e.target.value
        });

    }

    return (

        <div className='bg-slate-700 rounded w-screen-md p-3 flex justify-center box-border mt-16'>

            <form className="max-w-md  mt-16">

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" onChange={handleChange} value={contactDetails.firstName} name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" onChange={handleChange} value={contactDetails.lastName} name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" onChange={handleChange} value={contactDetails.phone} inputMode="numeric" pattern="[0-9]{10}" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
                    </div>
                </div>

                <label  className="inline-flex items-center me-5 cursor-pointer">
                    <input onChange={()=> setContactDetails({...contactDetails,isActive: !contactDetails.isActive})} type="checkbox"  value="" className="sr-only peer" defaultChecked = {contactDetails.isActive}/>
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                </label>
                <div className='mt-8'>

                    <button className="text-white float-left bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800">Cancel</button>
                    <button type="submit" onClick={handleSubmit} className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>


    )
}

export default ContactForm