import { useState,useEffect } from "react";


function Form({addContacts,contacts}) {
  const [form, setForm] = useState({ fullName: "",  phone: "" });
  const [validate, setValidate] = useState();

  const onChangeInput = (e) => {
    //Kısa yol
    const { name, value } = e.target;
    setForm({...form,[name]: value}) 
    //Uzun yol
    /* if((e.target.name==="fullName")){
        setForm({...form,fullName:(e.target.value)})
    }else{
        setForm({...form,phone:(e.target.value)})
    } */
  };
  useEffect(() => {
    setForm({ fullName: "",  phone: "" })

  },[contacts])

  const addPhone = (e) => {   
    //setForm([...form, { fullName: "",  phone: "" }]);
     e.preventDefault();
     if(form.fullName===""||form.phone===""){
      setValidate("Lütfen alanları boş geçmeyiniz.")
      return false
     }
      setValidate("")
      addContacts([...contacts,form])
      
      //console.log(form)
     
     
   
  };

  return (
    <>
    <div className="phone">
         
     </div>
     <div className="text-center red mt-1">{validate}</div>
     <form onSubmit={addPhone}>
        <div className="form">
          <label htmlFor="fullName">Name:</label>
          <input onChange={onChangeInput} id="fullName" type="text" value={form.fullName} name="fullName" />
        </div>
        <div className="form">
          <label htmlFor="phone">Phone Number:</label>
          <input onChange={onChangeInput} id="phone" type="text" value={form.phone} name="phone" />
        </div>
        <div className="btn-div"> 
          <button type="submit" className="btn">Add Phone</button>
        </div>
       
      </form>
    </>
  )
}

export default Form