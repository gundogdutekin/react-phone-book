import { useState } from "react";
import Form from "./form";
import List from "./list";

function Contacts() {
  const [contacts,setContacts]=useState([])
  return (
    <div className="container">
      <h1>PHONE BOOK</h1>
    <List contacts={contacts}/>
    <Form addContacts={setContacts} contacts={contacts}/>
      
    </div>
  
  )
}

export default Contacts