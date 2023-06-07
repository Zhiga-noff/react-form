import style from '../App.module.css';
import { WorkWithInput } from './non-yup/WorkWithInput';

export const FormTwo = ({ validateEmail, validatePassword }) => {
  return (
    <div className={style.app}>
      <h1 className={style.title}>Регистрация пользователя:</h1>
      <WorkWithInput validateEmail={validateEmail} validatePassword={validatePassword} />
    </div>
  );
};
