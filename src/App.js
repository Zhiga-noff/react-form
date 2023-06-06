import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const fieldsScheme = yup.object().shape({
  login: yup
    .string()
    .matches(/^[\w_]*$/, 'Может содержать лишь буквы, цифры и нижнее подчеркивание')
    .max(20, 'Должно быть меньше 20 символов')
    .min(3, 'Должно быть больше 3х символов'),
});

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
    },
    resolver: yupResolver(fieldsScheme),
  });

  const loginError = errors.login?.message;

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={style.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <div className={style.error}>{loginError}</div>}
        <input type="text" name="login" {...register('login')} />
        <button type={'submit'} disabled={!!loginError}>
          Отправить
        </button>
      </form>
    </div>
  );
};
