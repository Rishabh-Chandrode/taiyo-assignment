import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IContact {
    id: number
    firstName: string
    lastName: string
    phone: string
    status: string
}

interface IContactState {
    contacts: IContact[],
    currentContact: null | IContact
}


const initialState: IContactState = {
    contacts: [],
    currentContact: null 
}


export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<IContact>) => {
            state.contacts.push(action.payload)
        },
        setCurrentContact: (state, action: PayloadAction<IContact>) => {
            state.currentContact = action.payload
        },
        clearCurrentContact: (state) => {
            state.currentContact = null
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateContact: (state, action: PayloadAction<IContact>) => {
            state.contacts = state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
        }
    }
})


export default ContactSlice.reducer
export const { addContact, setCurrentContact, clearCurrentContact, deleteContact, updateContact } = ContactSlice.actions