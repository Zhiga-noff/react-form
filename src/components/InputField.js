import style from '../App.module.css';

export const InputField = ({ field }) => {
  const arrayFieldName = Object.keys(field);

  return arrayFieldName.map((item) => {
    return (
      <div className={style.flexBox} key={item}>
        <label htmlFor={item}>{field[item]?.textLabel}</label>
        <input
          type={'text'}
          name={item}
          id={item}
          value={field[item].value}
          onChange={({ target }) => changeValue(target, field[item].setValue)}
        />
      </div>
    );
  });
};
