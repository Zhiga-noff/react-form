import { InputField } from './InputField';
import style from '../../App.module.css';
import { useState, useRef } from 'react';

export const WorkWithInput = ({ validateEmail, validatePassword }) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [secondaryPassword, setSecondaryPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitButton = useRef(null);

  const field = {
    email: {
      value: emailValue,
      setValue: setEmailValue,
      textLabel: 'Введите свой email',
    },
    password: {
      value: passwordValue,
      setValue: setPasswordValue,
      textLabel: 'Введите пароль',
    },
    secondaryPassword: {
      value: secondaryPassword,
      setValue: setSecondaryPassword,
      textLabel: 'Повторите пароль',
    },
  };

  function changeValue(target, setValue) {
    // if (
    //   emailValue !== '' &&
    //   passwordValue !== '' &&
    //   secondaryPassword !== '' &&
    //   passwordValue === secondaryPassword
    // ) {
    //   submitButton.current.focus();
    // }
    setValue(target.value);
    setErrorMessage('');
  }

  function resetSet() {
    setEmailValue('');
    setPasswordValue('');
    setSecondaryPassword('');
    setErrorMessage('');
  }

  function validateField(event) {
    if (event) {
      event.preventDefault();
    }

    let error = null;

    if (!validateEmail.test(emailValue)) {
      error = 'Почта указана не верно';
      setErrorMessage(error);
      return false;
    }

    if (!validatePassword.test(passwordValue)) {
      error = 'Пароль должен содержать только латинский буквы и цифры';
      setErrorMessage(error);
      return false;
    }

    if (passwordValue === '' || passwordValue.length < 8) {
      error = 'Пароль должен содержать больше 8 символов';
      setErrorMessage(error);
      return false;
    }

    if (passwordValue !== secondaryPassword) {
      error = 'Пароли не совпадают';
      setErrorMessage(error);
      return false;
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        if (validateField(event)) {
          resetSet();
          console.log({ email: emailValue, password: passwordValue });
        }
      }}
    >
      <InputField field={field} changeValue={changeValue} valid={validateField} />
      <div className={style.errorMessage}>{errorMessage}</div>
      <div className={style.containerButton}>
        <button
          type={'submit'}
          className={`${style.button} ${style.buttonMain}`}
          disabled={errorMessage !== ''}
          ref={submitButton}
        >
          Зарегистрироваться
        </button>
        <button type={'button'} className={style.button} onClick={resetSet}>
          Сбросить
        </button>
      </div>
    </form>
  );
};
