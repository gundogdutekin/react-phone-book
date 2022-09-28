import { useState } from "react";
import Form from "./form";
import List from "./list";

function Contacts() {
  const [contacts,setContacts]=useState([])
  return (
    <>
    <List contacts={contacts}/>
    <Form addContacts={setContacts} contacts={contacts}/>
      
    </>
  
  )
}

export default Contacts