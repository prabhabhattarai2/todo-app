


import React, { useEffect, useState } from 'react'
import User from './User';
import AddUser from './AddUser';

const Todo = () => {
 
  const [users, setUsers] = useState([]);
  const [upperLimit, addupperLimit] = useState(200);
  // const jsonLink = 'http://localhost:3000/todos'
  var lowerLimit = 195;


 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    fetchData();
  
  }, []);
  
  


  const onAdd = async (name) => {

    await fetch("http://localhost:3000/todos", {
      method: 'POST',
      body: JSON.stringify({
        title: name,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return
        }
        else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
        
        addupperLimit(upperLimit + 1);
      })
      .catch((err) => {
        console.log(err)
      });

  }

  const onDelete = async (id) => {
    await fetch("http://localhost:3000/todos" + `/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      if (response.status !== 200) {
        return
      }

      else {
        setUsers(users.filter((user) => {
          return user.id !== id;
        }))
        addupperLimit(upperLimit - 1);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleEditTodos = async (editvalue, id) => {

    await fetch("http://localhost:3000/todos" + `/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: editvalue
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       
        setUsers((users) => [...users, data])
        alert(data.title + "  Edited at id-" + id)
      })
      .catch((err) => {
        console.log(err)
      });
  }


  const switchComplete = id => {
    let newUser = [...users];
    newUser= newUser.map((user, index) => {
      
      if ((index + 1).toString() === id.toString()) {
        user.completed = !user.completed;
      }
      return user
    })
    setUsers(newUser)
  }
  


  console.log( users,"user")

  return (
    <div className='App'>
      <h3>CREATE YOUR TODO AS YOUR WISH</h3>
      <br />
      <AddUser onAdd={onAdd} />
      <div className='allList'>
        {
          users.map((user) => (
            <User
              id={user.id}
              key={user.id}
              title={user.title}
              completed={user.completed}
              onDelete={onDelete}
              handleEditTodos={handleEditTodos}
              checkComplete={switchComplete}
            />
          ))}
      </div>
    </div>
  )
}

export default Todo

