// // // import React from 'react'
// // // import './user.css'
// // // import { useState } from 'react'
// // // const User = ({ id, title, completed, onDelete, checkComplete, handleEditTodos }) => {

// // //     // using useState for swithing edit
// // //     const [onEdit, setOnEdit] = useState(false)
// // //     const [editValue, setEditValue] = useState(title);

// // //     // handle edit function
// // //     const handleDelete = () => {
// // //         onDelete(id);
// // //     }

// // //     // handle edit function
// // //     const handleOnEdit = () => {
// // //         setOnEdit(true);
// // //     }
// // //     // handle save function
// // //     const handleSave = () => {
// // //         setOnEdit(false);
// // //         if (editValue) {
// // //             handleEditTodos(editValue, id)
// // //         }
// // //         else {
// // //             setEditValue(title)
// // //         }
// // //     }

// // //     // if edit mode on
// // //     if (onEdit) {
// // //         return (

// // //             <div className='list'>

// // //                 <div className="listItems">
// // //                     <input id={id} type="text" value={editValue} name="editValue"
// // //                         onChange={e => setEditValue(e.target.value.toLocaleLowerCase())}
// // //                     />

// // //                 </div>

// // //                 <span>
// // //                     <div className="buttons">
// // //                         <button id='edit' onClick={() => handleSave(id)} >Save</button>
// // //                         <button id='delete' onClick={handleDelete}>Delete</button>
// // //                     </div>
// // //                 </span>
// // //             </div>
// // //         )

// // //     }
// // //     // if edit mode off
// // //     else {

// // //         return (

// // //             <div className='list'>

// // //                 <div className="listItems">
// // //                     <label htmlFor={id} className={completed ? "active" : ""}>
// // //                         <input id={id} type="checkbox" checked={completed}
// // //                             onChange={() => checkComplete(id)}
// // //                         />
// // //                         {title}
// // //                     </label>
// // //                 </div>

// // //                 <span>
// // //                     <div className="buttons">
// // //                         <button id='edit' onClick={handleOnEdit} disabled={completed}>Edit</button>
// // //                         <button id='delete' onClick={handleDelete}>Delete</button>
// // //                     </div>
// // //                 </span>
// // //             </div>
// // //         )
// // //     }


// // // }

// // // export default User
// // import React from 'react';
// // import './user.css';
// // import { useState } from 'react';

// // const User = ({ id, title, completed, onDelete, checkComplete, handleEditTodos }) => {
// //     // using useState for swithing edit
// //     const [onEdit, setOnEdit] = useState(false);
// //     const [editValue, setEditValue] = useState(title);

// //     // handle edit function
// //     const handleDelete = () => {
// //         onDelete(id);
// //     };

// //     // handle edit function
// //     const handleOnEdit = () => {
// //         setOnEdit(true);
// //     };

// //     // handle save function
// //     const handleSave = () => {
// //         setOnEdit(false);
// //         if (editValue.trim() !== "") { // Check if editValue is not empty or whitespace
// //             handleEditTodos(editValue, id);
// //         } else {
// //             setEditValue(title);
// //         }
// //     };

// //     // if edit mode on
// //     if (onEdit) {
// //         return (
// //             <div className='list'>
// //                 <div className="listItems">
// //                     <input
// //                         id={id}
// //                         type="text"
// //                         value={editValue}
// //                         name="editValue"
// //                         onChange={e => setEditValue(e.target.value)}
// //                     />
// //                 </div>
// //                 <span>
// //                     <div className="buttons">
// //                         <button id='save' onClick={handleSave}>Save</button> {/* Remove id from button */}
// //                         <button id='delete' onClick={handleDelete}>Delete</button>
// //                     </div>
// //                 </span>
// //             </div>
// //         );
// //     }
// //     // if edit mode off
// //     else {
// //         return (
// //             <div className='list'>
// //                 <div className="listItems">
// //                     <label htmlFor={id} className={completed ? "active" : ""}>
// //                         <input
// //                             id={id}
// //                             type="checkbox"
// //                             checked={completed}
// //                             onChange={() => checkComplete(id)}
// //                         />
// //                         {title}
// //                     </label>
// //                 </div>
// //                 <span>
// //                     <div className="buttons">
// //                         <button id='edit' onClick={handleOnEdit} disabled={completed}>Edit</button>
// //                         <button id='delete' onClick={handleDelete}>Delete</button>
// //                     </div>
// //                 </span>
// //             </div>
// //         );
// //     }
// // };

// // export default User;
// import React from 'react';
// import './user.css';
// import { useState } from 'react';

// const User = ({ id, title, completed, onDelete, checkComplete, handleEditTodos }) => {
//     // using useState for switching edit
//     const [onEdit, setOnEdit] = useState(false);
//     const [editValue, setEditValue] = useState(title);

//     // handle edit function
//     const handleDelete = () => {
//         onDelete(id);
//     };

//     // handle edit function
//     const handleOnEdit = () => {
//         setOnEdit(true);
//     };

//     // handle save function
//     const handleSave = () => {
//         setOnEdit(false);
//         if (editValue.trim() !== "") {
//             handleEditTodos(editValue, id);
//         } else {
//             setEditValue(title);
//         }
//     };

//     // handle checkbox change
//     const handleCheckboxChange = () => {
//         checkComplete(id);
//     };

//     // if edit mode on
//     if (onEdit) {
//         return (
//             <div className='list'>
//                 <div className="listItems">
//                     <input
//                         id={id}
//                         type="text"
//                         value={editValue}
//                         name="editValue"
//                         onChange={e => setEditValue(e.target.value)}
//                     />
//                 </div>
//                 <span>
//                     <div className="buttons">
//                         <button onClick={handleSave}>Save</button>
//                         <button onClick={handleDelete}>Delete</button>
//                     </div>
//                 </span>
//             </div>
//         );
//     }
//     // if edit mode off
//     else {
//         return (
//             <div className='list'>
//                 <div className="listItems">
//                     <label htmlFor={id} className={completed ? "active" : ""}>
//                         <input
//                             id={id}
//                             type="checkbox"
//                             checked={completed}
//                             onChange={handleCheckboxChange}
//                         />
//                         {title}
//                     </label>
//                 </div>
//                 <span>
//                     <div className="buttons">
//                         <button onClick={handleOnEdit} disabled={completed}>Edit</button>
//                         <button onClick={handleDelete}>Delete</button>
//                     </div>
//                 </span>
//             </div>
//         );
//     }
// };

// export default User;

//   feriiiiiii



// import React from 'react'
// import './user.css'
// import { useState } from 'react'
// import { MdEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// const User = ({ id, title, completed, onDelete, checkComplete, handleEditTodos }) => {
 

    
//     const [onEdit, setOnEdit] = useState(false)
//     const [editValue, setEditValue] = useState(title);

   
//     const handleDelete = () => {
//         onDelete(id);
//     }


//     const handleOnEdit = () => {
//         setOnEdit(true);
//     }
    
//     const handleSave = () => {
//         setOnEdit(false);
//         if (editValue) {
//             handleEditTodos(editValue, id)
//         }
//         else {
//             setEditValue(title)
//         }
//     }

    
//     if (onEdit) {
//         return (

//             <div className='list'>

//                 <div className="listItems">
//                     <input id={id} type="text" value={editValue} name="editValue"
//                         onChange={e => setEditValue(e.target.value.toLocaleLowerCase())}
//                     />

//                 </div>

//                 <span>
//                     <div className="buttons">
//                         <button id='edit' onClick={() => handleSave(id)} >Save</button>
//                         <button id='delete' onClick={handleDelete}>Delete</button>
//                     </div>
//                 </span>
//             </div>
//         )

//     }
//     // if edit mode off
//     else {

//         return (

//             <div className='list'>

//                 <div className="listItems">
//                     <label htmlFor={id} className={completed ? "active" : ""}>
//                         <input id={id} type="checkbox" checked={completed}
//                             onChange={() => checkComplete(id)}
//                         />
//                         {title}
//                     </label>
//                 </div>

//                 <span>
//                     <div className="buttons">
//                         <button id='<MdEdit />' onClick={handleOnEdit} disabled={completed}><MdEdit /></button>
                        
//                         <button id='MdDelete />' onClick={handleDelete}><MdDelete /></button>
                        
                        
//                     </div>
//                 </span>
//             </div>
//         )
//     }


// }

// export default User




// import React from 'react';
// import './user.css';
// import { useState } from 'react';
// import { MdEdit, MdDelete } from "react-icons/md";

// const User = ({ id, title, completed, onDelete, checkComplete, handleEditTodos }) => {
//     const [onEdit, setOnEdit] = useState(false);
//     const [editValue, setEditValue] = useState(title);

//     const handleDelete = () => {
//         onDelete(id);
//     }

//     const handleOnEdit = () => {
//         setOnEdit(true);
//     }
    
//     const handleSave = () => {
//         setOnEdit(false);
//         if (editValue.trim() !== "") {
//             handleEditTodos(editValue, id);
//         } else {
//             setEditValue(title);
//         }
//     }

//     const handleChange = (e) => {
//         setEditValue(e.target.value);
//     }

//     return (
//         <div className='list'>
//             {onEdit ? (
//                 <div className="listItems">
//                     <input
//                         id={id}
//                         type="text"
//                         value={editValue}
//                         name="editValue"
//                         onChange={handleChange}
//                     />
//                 </div>
//             ) : (
//                 <div className="listItems">
//                     <label htmlFor={id} className={completed ? "active" : ""}>
//                         <input
//                             id={id}
//                             type="checkbox"
//                             checked={completed}
//                             onChange={() => checkComplete(id)}
//                         />
//                         {title}
//                     </label>
//                 </div>
//             )}
//             <span>
//                 <div className="buttons">
//                     {onEdit ? (
//                         <button id='edit' onClick={handleSave}>Save</button>
//                     ) : (
//                         <button onClick={handleOnEdit} disabled={completed}><MdEdit /></button>
//                     )}
//                     <button onClick={handleDelete}><MdDelete /></button>
//                 </div>
//             </span>
//         </div>
//     );
// }

// export default User;
import React from 'react';
import { useState } from 'react';
import './user.css';
import { MdEdit, MdDelete } from "react-icons/md";

const User = ({ id, title, completed, onDelete, checkComplete, handleEditTodos }) => {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(title);

    const handleDelete = () => {
        onDelete(id);
    }

    const handleOnEdit = () => {
        setOnEdit(true);
    }
    
    const handleSave = () => {
        setOnEdit(false);
        if (editValue.trim() !== "") {
            handleEditTodos(editValue, id);
        } else {
            setEditValue(title);
        }
    }

    const handleChange = (e) => {
        setEditValue(e.target.value);
    }

    return (
      

        <div className='list'>
            {onEdit ? (
                <div className="listItems">
                    <input
                        id={id}
                        type="text"
                        value={editValue}
                        name="editValue"
                        onChange={handleChange}
                    />
                </div>
            ) : (
                <div className="listItems">
                    <label htmlFor={id} className={completed ? "active" : ""}>
                        <input
                            id={id}
                            type="checkbox"
                            checked={completed}
                            onChange={() => checkComplete(id)}
                        />
                        {title}
                    </label>
                </div>
            )}
            <span>
                <div className="buttons">
                    {onEdit ? (
                        <button id='edit' onClick={handleSave}>Save</button>
                    ) : (
                        <button onClick={handleOnEdit} disabled={completed}><MdEdit /></button>
                    )}
                    <button onClick={handleDelete}><MdDelete /></button>
                </div>
            </span>
        </div>
        
    );
}

export default User

