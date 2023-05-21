
// export default function FormValidation(passwordInputValue, passwordInputFieldName) {

//     const errors = {};

//     const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//     let errMsg ="";

//     if(passwordInputFieldName ==='password'){
//     const uppercaseRegExp   = /(?=.*?[A-Z])/;
//     const lowercaseRegExp   = /(?=.*?[a-z])/;
//     const digitsRegExp      = /(?=.*?[0-9])/;
//     const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
//     const minLengthRegExp   = /.{8,}/;
//     const passwordLength =      passwordInputValue.length;
//     const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
//     const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
//     const digitsPassword =      digitsRegExp.test(passwordInputValue);
//     const specialCharPassword = specialCharRegExp.test(passwordInputValue);
//     const minLengthPassword = minLengthRegExp.test(passwordInputValue);
        
    
//     if(passwordLength===0){
//             errMsg="Password is empty";
//     }else if(!uppercasePassword){
//             errMsg="At least one Uppercase";
//     }else if(!lowercasePassword){
//             errMsg="At least one Lowercase";
//     }else if(!digitsPassword){
//             errMsg="At least one digit";
//     }else if(!specialCharPassword){
//             errMsg="At least one Special Characters";
//     }else if(!minLengthPassword){
//             errMsg="At least minumum 8 characters";
//     }else{
//         errMsg="";
//     }
    
//     }
    

//     return errMsg;
  
    
    
// }




export default function FormValidation(values) {

    const errors = {
    };

    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    
    if (values.register_id === ' ') {
        errors.register_id = "Id is required!";
    }

    if (values.email ==='') {
        errors.email = "Email is required";
        
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid Email"
    } 

    if (values.password === '') {
        errors.password = "Password is required";
    } else if (values.password.length < 8 && values.password.length >12) {
        errors.password = "password between 5 to 10 match";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Invalid Password";
    }
   
    return errors;
    
}