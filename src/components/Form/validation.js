function validations(userData) {
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexNum = /\d/;
  const errors = {};
  // Verificaciones de email
  if (!userData.email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!regexEmail.test(userData.email)) {
    errors.email = "El correo electrónico no es válido";
  } else if (userData.email.length > 35) {
    errors.email = "El correo electrónico no puede tener más de 35 caracteres";
  }
  // Verificaciones de contraseña
  else if (!userData.password) {
    errors.password = "La contraseña es requerida";
  } else if (!regexNum.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }
  return errors;
}

export default validations;
