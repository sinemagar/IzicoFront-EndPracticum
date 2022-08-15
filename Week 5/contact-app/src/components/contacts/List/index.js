import React, { useState } from 'react'



function List({ contacts }) {

const [filterText, setFilterText] = useState('')

//filtered
const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    )})
///console.log("filtered: ", filtered);

    return (
        <div>

            <input placeholder='Filter Contact' value={filterText} 
            onChange={(e)=>setFilterText(e.target.value)} />

            <div >
            <ul className='list'>
                {filtered.map((contacts,i) => (
                    <li key={i}>
                      
                        <span>
                        {contacts.fullname}
                        </span>
                        <span className='spanTel'>
                        {contacts.phone_number}
                        </span>
                        <span>
                            <h1>X</h1>
                        </span>
                    </li>
                ))}
            </ul>
            <p> {`${filtered.length} Person listed`} </p>
            </div>
            
        </div>
    )
}

export default List
