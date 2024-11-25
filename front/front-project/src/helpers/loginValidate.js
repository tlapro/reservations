export const validateField = (fieldName, value) => {
    let error = "";
  
    if (fieldName === "username" && value.trim() === "") {
      error = "Ingresa un nombre de usuario";
    } else if (fieldName === "password" && value === "") {
      error = "Ingresa una contraseña";
    }
  
    return error;
  };
  
  export const validateForm = (form) => {
    const errors = {};
  
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) {
        errors[key] = error;
      }
    });
  
    return errors;
  };
  
