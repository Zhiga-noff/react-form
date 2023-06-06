import { useRef, useState } from 'react';
import style from './App.module.css';
import * as yup from 'yup';

const loginChangeScheme = yup
  .string()
  .matches(
    /^[\w_]*$/,
    'Неверный логин. допустимые символы - буквы, цифры и нижнее подчеркивание',
  )
  .max(20, 'Неверный логин. Допустимое максимальное количество символов 20');

const loginBlurScheme = yup
  .string()
  .min(3, 'Неверный логин. Минимальное количество символов 3');

const validateAndGetErrorMessage = (scheme, value) => {
  let errorMessage = null;

  try {
    scheme.validateSync(value, { abortEarly: false });
  } catch ({ errors }) {
    errorMessage = errors.join(`
    `);
  }

  return errorMessage;
};

export const Valid = () => {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState(null);
  const submitButtonRef = useRef(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);

    const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

    setLoginError(error);

    if (target.value.length === 20) {
      submitButtonRef.current.focus();
    }
  };

  const onLoginBlur = () => {
    const error = validateAndGetErrorMessage(loginBlurScheme, login);

    setLoginError(error);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(login);
  };

  return (
    <form onSubmit={onSubmit}>
      {loginError && <div className={style.error}>{loginError}</div>}
      <input
        type="text"
        name="login"
        value={login}
        placeholder={'Логин'}
        onChange={onLoginChange}
        onBlur={onLoginBlur}
      />
      <button ref={submitButtonRef} type={'submit'} disabled={loginError !== null}>
        Отправить
      </button>
    </form>
  );
};
