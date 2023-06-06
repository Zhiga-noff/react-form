import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { func } from 'prop-types';

function changeValue(target, setValue) {
  setValue(target.value);
}

function onSubmit(event, formData) {
  event.preventDefault();
  console.log(formData);
}

export const App = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [secondaryPassword, setSecondaryPassword] = useState('');

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
            type="password"
            name="password"
            id={'password'}
            value={passwordValue}
            onChange={({ target }) => changeValue(target, setPasswordValue)}
          />
        </div>
        <div className={style.flexBox}>
          <label htmlFor={'password-two'}>Повторите пароль</label>
          <input
            type="password"
            name="password-two"
            id={'password-two'}
            value={secondaryPassword}
            onChange={({ target }) => changeValue(target, setSecondaryPassword)}
          />
        </div>
        <div className={style.errorMessage}></div>
        <div className={style.containerButton}>
          <button type={'submit'} className={`${style.button} ${style.buttonMain}`}>
            Зарегистрироваться
          </button>
          <button className={`${style.button}`}>Сбросить</button>
        </div>
      </form>
    </div>
  );
};
