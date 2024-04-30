import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { stat } from "fs"

export interface IContact {
    _id: string
    firstName: string
    lastName: string
    phone: string
    isActive: boolean
}

interface IContactState {
    contacts: IContact[]
    currentContact: null | IContact
}


const initialState: IContactState = {
    contacts: [
    ],
    currentContact: null 
}


export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<IContact>) => {
            console.log("Adding contact");
            let newContact = action.payload;
            let newcontacts = localStorage.getItem('contactDetails') ? JSON.parse(localStorage.getItem('contactDetails') || '[]') : []
            newcontacts.push(newContact) 
            localStorage.setItem('contactDetails', JSON.stringify(newcontacts) )
            state.contacts = newcontacts
        },
        setCurrentContact: (state, action: PayloadAction<IContact>) => {
            console.log("Setting current contact");
            state.currentContact = action.payload
            localStorage.setItem('currentContact', JSON.stringify(state.currentContact))
        },
        clearCurrentContact: (state) => {
            state.currentContact = null
            localStorage.removeItem('currentContact')
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            console.log("Deleting contact");
            let oldContacts = localStorage.getItem('contactDetails') ? JSON.parse(localStorage.getItem('contactDetails') || '[]') : [];
            let newContacts = oldContacts.filter((contact: { _id: string }) => contact._id !== action.payload)
            
            localStorage.setItem('contactDetails', JSON.stringify(newContacts))
            state.contacts = newContacts
        },
        updateContact: (state, action: PayloadAction<IContact>) => {
            console.log("Updating contact");
            let currentcontact = localStorage.getItem('contactDetails') ? JSON.parse(localStorage.getItem('contactDetails') || '[]') : []
            let newContacts = currentcontact.map((contact: { _id: string }) => contact._id === action.payload._id ? action.payload : contact)
            localStorage.setItem('contactDetails', JSON.stringify(newContacts))
            state.contacts = newContacts
        }
    }
})


export default ContactSlice.reducer
export const { addContact, setCurrentContact, clearCurrentContact, deleteContact, updateContact } = ContactSlice.actions