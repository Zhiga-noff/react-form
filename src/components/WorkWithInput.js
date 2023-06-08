import style from '../App.module.css';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const WorkWithInput = ({ validateEmail, validatePassword }) => {
  const submitButton = useRef(null);

  const fieldsSchema = yup.object().shape({
    email: yup.string().matches(validateEmail, 'Почта указана не верно'),
    password: yup
      .string()
      .matches(validatePassword, 'Пароль должен содержать только латинский буквы и цифры')
      .min(8, 'Пароль должен содержать больше 8 символов'),
    secondaryPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      secondaryPassword: '',
    },
    resolver: yupResolver(fieldsSchema),
  });

  const sendFormData = (formData) => {
    console.log(formData);
    reset();
  };

  const handleReset = () => {
    reset();
  };

  const loginError =
    errors.email?.message ||
    errors.password?.message ||
    errors.secondaryPassword?.message;

  return (
    <form onSubmit={handleSubmit(sendFormData)}>
      <div className={style.flexBox}>
        <label htmlFor={'email'}>Введите свой email</label>
        <input type="email" name="email" id={'email'} {...register('email')} />
      </div>
      <div className={style.flexBox}>
        <label htmlFor={'password'}>Введите пароль</label>
        <input type="text" name="password" id={'password'} {...register('password')} />
      </div>
      <div className={style.flexBox}>
        <label htmlFor={'password-two'}>Повторите пароль</label>
        <input
          type="text"
          name="password-two"
          id={'password-two'}
          {...register('secondaryPassword')}
        />
      </div>
      <div className={style.errorMessage}>{loginError}</div>
      <div className={style.containerButton}>
        <button
          type={'submit'}
          className={`${style.button} ${style.buttonMain}`}
          disabled={!!loginError}
          ref={submitButton}
        >
          Зарегистрироваться
        </button>
        <button type={'button'} className={style.button} onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </form>
  );
};
