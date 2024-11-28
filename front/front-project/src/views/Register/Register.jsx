/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios'
import ancla from '../../assets/ancla.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validateField } from '../../helpers/registerValidate';
import { UsersContext } from '../../context/UsersContext';


function showAlert(icon, title, text, timer = null, navigateTo = null) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        width: '400px',
        color: '#000000',
        background: '#F5F5DC',
        iconColor: '#3C8C91', 
        confirmButtonColor: '#3C8C91',
        timer: timer,
        timerProgressBar: !!timer, 
        showConfirmButton: !timer, 
    }).then(() => {
        if (navigateTo) {
            navigateTo(); 
        }
    });

    if (timer && navigateTo) {
        setTimeout(navigateTo, timer);
    }
}


const Register = () => {
    const { registerUser } = useContext(UsersContext)
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username:"",
        password: "",
        passwordRepeat: "", 
    })
    const [errors, setErrors] = useState({});
    const [serverResponse, setServerResponse] = useState(null); 


    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setForm((prevForm) => {
            const updatedForm = { ...prevForm, [name]: value };
            

            const error = validateField(name, value, updatedForm);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error,
            }));
    
            return updatedForm;
        });
    };

    const postFunction = async (event) => {
        event.preventDefault();

        const newErrors = {};
        Object.keys(form).forEach((key) => {
            const error = validateField(key, form[key], form);
            if (error) newErrors[key] = error;
        });
    
        if (form.password !== form.passwordRepeat) {
            newErrors.passwordRepeat = "Las contraseñas no coinciden.";
        }
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        const result = await registerUser(form); 
    
        if (result.success) {
          showAlert('success', 'Usuario registrado correctamente', 'Has sido redirigido al login');
          navigate('/');
        } else {
          showAlert('error', 'Error en el registro', result.message);  
          setErrors((prevErrors) => ({
            ...prevErrors,
            server: result.message,
          }));
        }
        
        
   
    };
    
    
    return (
        <div>
            <div className={styles.navRegister}>
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
            <img src={ancla} alt="ancla" className={styles.ancla}/>   
                <h1 className={styles.titlelogo}>Frente Al Mar 
                    <br />
                    Restaurante
                </h1>
            </div>
            <div className={styles.formContainer}>
            <form onSubmit={postFunction} className={styles.form}>
                <h1>Registrarse</h1>
                <hr />
                <div className={styles.divInput}>
                    <label>Nombre</label>
                    <input
                    className={styles.formInput}
                    type='text'
                    name='name'
                    placeholder='Nombre'
                    onChange={handleInputChange}></input>
                    {errors.name && typeof errors.name === "string" && (
                    <span className={styles.errorText}>{errors.name}</span>
                    )}

                </div>

                <div className={styles.divInput}>
                    <label>Email</label>
                    <input
                    className={styles.formInput}
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={handleInputChange}
                    ></input>
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.divInput}>
                    <label>Fecha de Nacimiento</label>
                    <input
                    className={styles.formInput}
                    type='date'
                    name='birthdate'
                    onChange={handleInputChange}></input>
                    {errors.birthdate && <span className={styles.errorText}>{errors.birthdate}</span>}
                </div>

                <div className={styles.divInput}>
                    <label>DNI</label>
                    <input
                    className={styles.formInput}
                    type='number'
                    name='nDni'
                    placeholder='DNI'
                    onChange={handleInputChange}
                    ></input>
                    {errors.nDni && <span className={styles.errorText}>{errors.nDni}</span>}
                </div>    

                <div className={styles.divInput}>
                    <label>Nombre de Usuario</label>
                    <input
                    className={styles.formInput}
                    type='string'
                    name='username'
                    placeholder='Usuario'
                    onChange={handleInputChange}></input>
                    {errors.username && <span className={styles.errorText}>{errors.username}</span>}
                </div>

                <div className={styles.divInput}>    
                    <label>Contraseña</label>
                    <input
                    className={styles.formInput}
                    type='password'
                    name='password'
                    placeholder='*******'
                    onChange={handleInputChange}></input>
                    {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                </div>   
                
                <div className={styles.divInput}>
                    <label>Repetir Contraseña</label>
                    <input
                    className={styles.formInput}
                    type='password'
                    name='passwordRepeat'
                    placeholder='*******'
                    onChange={handleInputChange}></input>
                    {errors.passwordRepeat && (
                <span className={styles.errorText}>{errors.passwordRepeat}</span>
                    )}
                </div> 
                <div>
                    <button type='submit' className={styles.buttonRegister}>Registrarse</button>
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
            <Link to="/" className={styles.linkRegister}>
               Regresar al Login
            </Link>
          </div>
            </form>
            </div>
        </div>
    )
}


export default Register;