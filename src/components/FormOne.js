import style from '../App.module.css';
import { WorkWithInput } from './WorkWithInput';
import * as yup from 'yup';

export const FormOne = ({ validateEmail, validatePassword }) => {
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

  return (
    <div className={style.app}>
      <h1 className={style.title}>Регистрация пользователя:</h1>
      <WorkWithInput fieldsSchema={fieldsSchema} />
    </div>
  );
};
