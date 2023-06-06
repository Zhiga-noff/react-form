import style from './App.module.css';
import { useState } from 'react';

const ValidNonYup = () => {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);

    let error = null;

    if (!/^[\w_]*$/.test(target.value)) {
      error = 'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание';
    } else if (target.value.length > 20) {
      error = 'Неверный логин. Логин должен состоять менее чем из 20и символов';
    }

    setLoginError(error);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(login);
  };

  const onLoginBlur = () => {
    if (login.length < 3) {
      setLoginError('Неверный логин. Должно быть не меньше 3х символов');
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      {loginError && <div className={style.error}>{loginError}</div>}
      <input
        type="text"
        name="login"
        value={login}
        placeholder={'Логин'}
        onChange={onLoginChange}
        onBlur={onLoginBlur}
      />
      <button type={'submit'} disabled={loginError !== null}>
        Отправить
      </button>
    </form>
  );
};
