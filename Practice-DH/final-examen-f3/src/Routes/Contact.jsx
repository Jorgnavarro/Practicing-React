import React from 'react'
import Form from '../Components/Form'
import styles from './modules/contact.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={styles.container_header}>
      <Form/>
    </div>
  )
}

export default Contact