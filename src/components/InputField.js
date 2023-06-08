import style from '../App.module.css';

export const InputField = ({ field, register }) => {
  return field.map((item) => {
    return (
      <div className={style.flexBox} key={item.name}>
        <label htmlFor={item.name}>{item.textLabel}</label>
        <input type={'text'} name={item.name} id={item.name} {...register(item.name)} />
      </div>
    );
  });
};
