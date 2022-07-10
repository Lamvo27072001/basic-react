
import React from 'react'

export default function AddContact() {
  return (
    <div className='ui main'>
        <h2>Add Contact</h2>
        <form className="ui form">
            <div className='field'>
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Name' />
            </div>
        </form>
    </div>
  )
}
