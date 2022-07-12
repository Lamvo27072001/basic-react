import React from 'react'

// function ContactCard({ name, email
// }) {
  function ContactCard(props) {  
    const {name, email} = props.contactions
  return (
    <div className='item'>
    <div className="content">      
        <div className="header">{name}</div>
        <div>{email}</div>
    </div>
    <i className='trash alternate outline icon' style={{color: "red", margintop: "7px"}}></i>
    </div>
  )
}

export default ContactCard