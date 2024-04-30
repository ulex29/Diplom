import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Импорт компонента Link для реализации перехода на другую страницу
import '../css/login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть больше 3 и менее 8 символов');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Авторизация</h1>
        {(emailDirty && emailError) && <div className="error">{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your Email..." />
        {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your Password..." />
        <button disabled={!formValid} type="submit">Войти</button>
      </form>
      <div className="register-link">
        <span>Еще нет аккаунта? </span>
        <Link to="/registration">Зарегистрироваться</Link> {/* Кнопка для перехода на страницу регистрации */}
      </div>
    </div>
  );
}

export default LoginPage;
