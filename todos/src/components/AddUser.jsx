


import React from 'react';

const AddUser = ({ onAdd }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const nameInput = e.target.name.value;
        if (typeof onAdd === 'function') {
            onAdd(nameInput);
        }
        e.target.name.value = "";
    }
     

    return (
        <div className='list center'>
          <form onSubmit={handleOnSubmit}>
                <h1>TODO LIST BY API</h1>
                <input placeholder='Add Todo items' name='name' required />
                <button type="submit">Add</button>
            </form>
        </div>
      )
    }



 
export default AddUser;
