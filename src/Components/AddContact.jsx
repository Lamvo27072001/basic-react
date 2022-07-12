
import React from 'react'

 function AddContact() {
  return (
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
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
export default AddContact;