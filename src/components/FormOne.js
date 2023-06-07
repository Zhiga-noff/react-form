import style from '../App.module.css';
import { WorkWithInput } from './WorkWithInput';

export const FormOne = ({ validateEmail, validatePassword }) => {
  return (
    <div className={style.app}>
      <h1 className={style.title}>Регистрация пользователя:</h1>
      <WorkWithInput validateEmail={validateEmail} validatePassword={validatePassword} />
    </div>
  );
};
