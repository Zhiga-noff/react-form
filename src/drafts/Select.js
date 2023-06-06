import Select from 'react-select';
import style from './App.module.css';

export const Selectel = () => {
  const productOptions = [
    { value: 'tv', label: 'Телевизор' },
    { value: 'smartphone', label: 'Смартфон' },
    { value: 'laptop', label: 'Ноутбук' },
  ];
  const colorsOptions = [
    { value: 'black', label: 'Черный' },
    { value: 'silver', label: 'Серебристый' },
    { value: 'white', label: 'Белый' },
  ];

  return (
    <div className={style.app}>
      <Select options={productOptions} defaultValue={productOptions[0]} />
      <Select
        options={colorsOptions}
        isMulti={true}
        defaultValue={[colorsOptions[0], colorsOptions[1]]}
      />
    </div>
  );
};
