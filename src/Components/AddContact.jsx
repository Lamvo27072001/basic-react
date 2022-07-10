
import React from 'react'

export default function AddContact() {
  return (
    <div className='add_contact'>
        <h2>Add Contact</h2>
        <form className="ui_form">
            <div className='field '>
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Name' />
            </div>
            <div className='field '>
                <label htmlFor="">Email</label>
                <input type="email" name='email' placeholder='Email' />
            </div>
            <button className='ui button red'>Add</button>
        </form>
    </div>
  )
}
