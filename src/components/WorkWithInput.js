import style from '../App.module.css';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from './InputField';

const field = [
  { name: 'email', textLabel: 'Введите свой email' },
  { name: 'password', textLabel: 'Введите пароль' },
  { name: 'secondaryPassword', textLabel: 'Повторите пароль' },
];

export const WorkWithInput = ({ fieldsSchema }) => {
  const submitButton = useRef(null);

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
      <InputField field={field} register={register} />
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
