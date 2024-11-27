
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import ancla from "../../assets/ancla.png";
import { validateForm, validateField } from "../../helpers/loginValidate";
import { UsersContext } from "../../context/UsersContext";

const Login = () => {
  const { loginUser} = useContext(UsersContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [serverResponse, setServerResponse] = useState(null);

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };


  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    try {
      loginUser(form)
     
      setServerResponse({ success: true, message: "Login exitoso." });
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setServerResponse({
        success: false,
        message: "Usuario o contraseña incorrecta",
      });
    }
  };
  
  return (
    <div className={styles.loginContainer}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.pixabay.com/video/2023/03/11/154199-807166840_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.navLogin}>
        <img src={ancla} alt="ancla" className={styles.ancla} />
        <h1 className={styles.titlelogo}>
          Frente Al Mar
          <br />
          Restaurante
        </h1>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <h1>Ingresar</h1>
          <hr />
          <div className={styles.divInput}>
            <label>Usuario</label>
            <input
              className={styles.formInput}
              type="string"
              name="username"
              placeholder="Usuario"
              onChange={handleInputChange}
            />
            {errors.username && (
              <span className={styles.errorText}>{errors.username}</span>
            )}
          </div>

          <div className={styles.divInput}>
            <label>Contraseña</label>
            <input
              className={styles.formInput}
              type="password"
              name="password"
              placeholder="*******"
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <div>
            <button type="submit" className={styles.buttonLogin}>
              Entrar
            </button>
          </div>
          {serverResponse && (
            <div
              className={
                serverResponse.success
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {serverResponse.message}
            </div>
          )}
          <div className={styles.linkRegisterContainer}>
            <Link to="/register" className={styles.linkRegister}>
              ¿No tienes cuenta? Regístrate aquí
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
