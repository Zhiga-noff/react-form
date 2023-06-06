import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { func } from 'prop-types';

function changeValue(target, setValue) {
  setValue(target.value);
}

export const App = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [secondaryPassword, setSecondaryPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function resetSet() {
    setEmailValue('');
    setPasswordValue('');
    setSecondaryPassword('');
    setErrorMessage('');
  }
  function onSubmit(event) {
    event.preventDefault();
    let error = null;
    if (!/^[\w]*$/.test(passwordValue)) {
      error = 'Пароль должен содержать только буквы и цифры';
      setErrorMessage(error);
      return;
    }
    if (passwordValue !== secondaryPassword) {
      error = 'Пароли не совпадают';
      setErrorMessage(error);
      return;
    }
    resetSet();
    console.log({ email: emailValue, password: passwordValue });
  }

  return (
    <div className={style.app}>
      <h1 className={style.title}>Регистрация пользователя:</h1>
      <form onSubmit={onSubmit}>
        <div className={style.flexBox}>
          <label htmlFor={'email'}>Введите свой email</label>
          <input
            type="email"
            name="email"
            id={'email'}
            value={emailValue}
            onChange={({ target }) => changeValue(target, setEmailValue)}
          />
        </div>
        <div className={style.flexBox}>
          <label htmlFor={'password'}>Введите пароль</label>
          <input
            type="text"
            name="password"
            id={'password'}
            value={passwordValue}
            onChange={({ target }) => changeValue(target, setPasswordValue)}
          />
        </div>
        <div className={style.flexBox}>
          <label htmlFor={'password-two'}>Повторите пароль</label>
          <input
            type="text"
            name="password-two"
            id={'password-two'}
            value={secondaryPassword}
            onChange={({ target }) => changeValue(target, setSecondaryPassword)}
          />
        </div>
        <div className={style.errorMessage}>{errorMessage}</div>
        <div className={style.containerButton}>
          <button type={'submit'} className={`${style.button} ${style.buttonMain}`}>
            Зарегистрироваться
          </button>
          <button type={'button'} className={style.button} onClick={resetSet}>
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
};
