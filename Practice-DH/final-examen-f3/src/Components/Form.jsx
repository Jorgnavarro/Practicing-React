import React from "react";
import { useState } from "react";
import styles from './modules/form.module.css';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) =>{
    setPassword(e.target.value);
  }

  const onChangeEmail = (e) =>{
      setEmail(e.target.value);
  }
  
  const onSubmitForm = (e) =>{
      e.preventDefault();
      Swal.fire({
        icon: 'success',
        title: `Welcome ${email}!!`
      })
  }
  return (
    <div className={styles.container_form}>
      <form className={`${styles.form}`}>
      <h2 className={`${styles.header_form}`}>Sing In</h2>
      <div className="mb-3">
        <input type="text" id="inputName" className={`form-control form-control-lg ${styles.inputs}`} placeholder='Introduce your name' onChange={onChangeName}/>
      </div>
      <div className="mb-3">
        <input type="email" id='inputEmail' className={`form-control form-control-lg ${styles.inputs}`}  placeholder="name@example.com" onChange={onChangeEmail} />
      </div>
        <button type="submit" className={`btn btn-danger ${styles.btn_form} mt-3`}
        onClick={onSubmitForm}
        >Send</button>
    </form>
    </div>
  );
};

export default Form;
