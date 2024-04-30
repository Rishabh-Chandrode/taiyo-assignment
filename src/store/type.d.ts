interface IContact {
    id: number
    firstName: string
    lastName: string
    phone: string
    isActive: boolean
  }
  
  type IntialState = {
    contacts: Icontact[]
    currentContact: null | IContact
  }
  
  type ContactAction = {
    type: string
    payload: IContact
  }
  
  type DispatchType = (args: ContactAction) => ContactAction