import Swal from "sweetalert2";

const validationEmail = (email) =>{
    const regexEmail = /^[a-z]*([@]{1})+[a-z]+([.]{1})+([com]{3}$)/gi
    return regexEmail.test(email);
}
const validationName = (name) =>{
    const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    return regexName.test(name);
}
export {validationEmail, validationName};