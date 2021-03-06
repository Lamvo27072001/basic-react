import React from 'react'
import ContactCard from './ContactCard'

 function ContactList() {

    const contacts = [
        {
          id: "1",
          name: "Dipesh",
          email: "malvia@gmail.com",
        },
        {
          id: "2",
          name: "Nikesh",
          email: "nicksa@gmail.com",
        }
      ]
    
    const renderContactList = contacts.map((contact1) => {
        return(
            // <ContactCard name={contact1.name} email={contact1.email}/>
            <ContactCard contactions={contact1} />
        )
    })
  return (
    <div className='ui celled list'>
           {renderContactList}
    </div>
  )
}

export default ContactList
