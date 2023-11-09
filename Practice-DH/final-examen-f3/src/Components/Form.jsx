import React from "react";
import { useState, useEffect } from "react";
import styles from './modules/form.module.css';
import Swal from "sweetalert2";
import {validationEmail, validationName} from "./utils/validationsForm";
import { useContext } from "react";
import { ContextGlobal } from "./utils/globalContext";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const {currentTheme} = useContext(ContextGlobal);
  const [styleBtn, setStyleBtn] = useState("");

  useEffect(() => {
      if(currentTheme === 'light'){
          setStyleBtn("btn-secondary");
      }else{
          setStyleBtn("btn-danger");
      }
  }, [currentTheme]);

  const onChangeName = (e) =>{
    setName(e.target.value);
  }

  const onChangeEmail = (e) =>{
      setEmail(e.target.value);
  }
  
  const onSubmitForm = (e) =>{
      e.preventDefault();
      
      if(validationName(name) && validationEmail(email) ){
        Swal.fire({
          icon: 'success',
          title: `Thank ${name} for providing us with your information, we will be able to contact you soon!!`,
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Incorrect data',
          html: "Some of the data entered is incorrect, remember that the <strong>name</strong> must have only letters and the <strong>email</strong> must have the format: example@email.com",
        })
      }
      
    
  }
  return (
    <div className={styles.container_form}>
        <h2 className="mt-4">Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      <form onSubmit={onSubmitForm} className={`${styles.form}`}>
      <h2 className={`${styles.header_form}`}>Contact us</h2>
      <div className="mb-3">
        <input type="text" id="inputName" className={`form-control form-control-lg ${styles.inputs}`} placeholder='Introduce your name' onChange={onChangeName}/>
      </div>
      <div className="mb-3">
        <input type="email" id='inputEmail' className={`form-control form-control-lg ${styles.inputs}`}  placeholder="name@example.com" onChange={onChangeEmail} />
      </div>
        <button type="submit" className={`btn ${styleBtn} ${styles.btn_form} mt-3`}>Send</button>
    </form>
    </div>
  );
};

export default Form;
