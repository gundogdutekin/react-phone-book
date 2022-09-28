import { useState } from 'react'
function List({ contacts }) {
  const [filterContact, setFilterContact] = useState('')

  if (filterContact && filterContact.length > 0) {
    const filterArray = contacts.filter(
     // (item) => item.fullName.toLocaleLowerCase() === filterContact.toString().toLocaleLowerCase().trim() || item.phone === filterContact.toString().toLocaleLowerCase().trim()
     //Object.keys(item) --->Bu ["fullName", "phone"] gibi bir dizi döndürür
    // Sonra ["fullName", "phone"].some(key => item[key].toString().toLocaleLowerCase().includes(filterContact.toString().toLocaleLowerCase().trim())) true dönerse item döner.Yani item.fullName veya item.phone içinde filterContact varsa(yani true ise) item döner.
     (item)=>Object.keys(item).some((key)=>item[key].toString().toLocaleLowerCase().includes(filterContact.toString().toLocaleLowerCase().trim()))
    )
    if (filterArray.length > 0) {
      contacts = filterArray
    }
  }
  return (
    <>
      <div className='form'>
        <label htmlFor='search'>Search:</label>
        <input
          value={filterContact}
          onChange={(e) => setFilterContact(e.target.value)}
          type='text'
          name='search'
        />
      </div>
      <div className='list-container'>
        <ol className='list'>
          {contacts.map((contact, index) => ( 
            <li key={index}>
              <span className='nameList'>{contact.fullName}</span>
              <span className='arrow'>----</span>
              <span className='phoneList'>{contact.phone}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default List
